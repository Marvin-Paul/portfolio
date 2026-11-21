"""Retry mirror for repos whose git clone failed on Windows.

Uses the GitHub tarball API (no git, no long-path issues) then uploads to the
matching Hugging Face Space.

Usage:
    python scripts/mirror_retry.py --token hf_xxx
"""

from __future__ import annotations

import argparse
import io
import json
import os
import shutil
import subprocess
import sys
import tarfile
import tempfile
from pathlib import Path

from huggingface_hub import HfApi, create_repo

sys.path.insert(0, str(Path(__file__).parent))
from mirror_to_hf import (  # noqa: E402
    EXCLUDE_DIRS,
    EXCLUDE_FILES,
    EXCLUDE_PATTERNS,
    GITHUB_OWNER,
    MAX_FILE_BYTES,
    MAX_TOTAL_BYTES,
    SPACES,
    collect_files,
    excluded,
    write_readme,
)

RETRY = ["rolkat-website", "jbk-invoicing"]


def download_tarball(repo: str, dest: Path) -> Path | None:
    """Download and extract a repo tarball via the GitHub API."""
    dest.mkdir(parents=True, exist_ok=True)
    url = f"https://api.github.com/repos/{GITHUB_OWNER}/{repo}/tarball"
    result = subprocess.run(
        ["gh", "api", url, "--method", "GET", "--include"],
        capture_output=True,
        timeout=1800,
    )
    if result.returncode != 0:
        print(f"    tarball download failed: {result.stderr.decode(errors='replace')[:300]}")
        return None

    raw = result.stdout
    # gh --include prefixes the headers; strip up to the blank line.
    marker = b"\r\n\r\n"
    idx = raw.find(marker)
    if idx == -1:
        marker = b"\n\n"
        idx = raw.find(marker)
    if idx == -1:
        print("    could not split headers from body")
        return None
    body = raw[idx + len(marker):]

    try:
        with tarfile.open(fileobj=io.BytesIO(body), mode="r:gz") as tar:
            members = []
            for member in tar.getmembers():
                parts = Path(member.name).parts
                if len(parts) < 2:
                    continue
                member.name = str(Path(*parts[1:]))
                if not member.name or member.name == ".":
                    continue
                if any(part in EXCLUDE_DIRS for part in Path(member.name).parts):
                    continue
                if member.isfile() and excluded(Path(member.name)):
                    continue
                members.append(member)
            tar.extractall(dest, members=members)
    except Exception as exc:
        print(f"    extraction failed: {exc}")
        return None

    # Tarballs nest everything under a single root folder.
    entries = list(dest.iterdir())
    if len(entries) == 1 and entries[0].is_dir():
        inner = entries[0]
        for item in list(inner.iterdir()):
            shutil.move(str(item), str(dest / item.name))
        inner.rmdir()
    return dest


def repo_is_private(repo: str) -> bool:
    try:
        info = subprocess.run(
            ["gh", "api", f"repos/{GITHUB_OWNER}/{repo}"],
            capture_output=True, text=True, timeout=120,
        )
        if info.returncode == 0:
            return bool(json.loads(info.stdout).get("private", False))
    except Exception:
        pass
    return False


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--token", required=True)
    args = parser.parse_args()

    api = HfApi(token=args.token)
    owner = api.whoami()["name"]
    print(f"Authenticated as: {owner}\n")

    workdir = Path(tempfile.mkdtemp(prefix="hf-retry-"))
    results = []

    try:
        for repo in RETRY:
            space_name, emoji, color_from, color_to, summary = SPACES[repo]
            print(f"[{repo}] -> {owner}/{space_name}")
            checkout = workdir / repo
            if download_tarball(repo, checkout) is None:
                results.append((repo, "download failed"))
                continue

            files, total = collect_files(checkout)
            print(f"    {len(files)} files, {total / 1024 / 1024:.1f} MB")
            if total > MAX_TOTAL_BYTES:
                results.append((repo, "too large"))
                continue

            private = repo_is_private(repo)
            write_readme(checkout, space_name, emoji, color_from, color_to, summary, repo, owner)

            try:
                create_repo(
                    repo_id=f"{owner}/{space_name}",
                    repo_type="space",
                    space_sdk="static",
                    private=private,
                    exist_ok=True,
                    token=args.token,
                )
            except Exception as exc:
                print(f"    create failed: {exc}")
                results.append((repo, f"create failed: {exc}"))
                continue

            try:
                api.upload_folder(
                    folder_path=str(checkout),
                    repo_id=f"{owner}/{space_name}",
                    repo_type="space",
                    commit_message=f"Mirror {GITHUB_OWNER}/{repo}",
                )
                print("    uploaded")
                results.append((repo, "ok"))
            except Exception as exc:
                print(f"    upload failed: {exc}")
                results.append((repo, f"upload failed: {exc}"))
    finally:
        shutil.rmtree(workdir, ignore_errors=True)

    print("\nSummary")
    for repo, status in results:
        print(f"  {repo:<34} {status}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
