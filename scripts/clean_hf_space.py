"""Remove build artefacts and committed secret files from a Hugging Face Space.

Deletes paths matching node_modules / build output / real .env files that were
committed upstream, then re-uploads a cleaned copy of the repository.

Usage:
    python scripts/clean_hf_space.py --token hf_xxx --space emotions-store-pos --repo POS
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
import tempfile
from pathlib import Path

from huggingface_hub import HfApi, create_repo

sys.path.insert(0, str(Path(__file__).parent))
from mirror_to_hf import (  # noqa: E402
    EXCLUDE_DIRS,
    EXCLUDE_FILES,
    EXCLUDE_PATTERNS,
    GITHUB_OWNER,
    collect_files,
    excluded,
    write_readme,
)
from mirror_retry import download_tarball, repo_is_private  # noqa: E402
from mirror_to_hf import SPACES  # noqa: E402

JUNK_DIR_NAMES = {
    "node_modules", ".next", ".vercel", "dist", "build", "out", ".turbo",
    ".cache", "__pycache__", ".pytest_cache", "coverage", ".gradle", "bin",
    "obj", ".vs", ".idea", ".dart_tool", ".expo", "target",
}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--token", required=True)
    parser.add_argument("--space", required=True)
    parser.add_argument("--repo", required=True)
    args = parser.parse_args()

    api = HfApi(token=args.token)
    owner = api.whoami()["name"]

    space_files = api.list_repo_files(f"{owner}/{args.space}", repo_type="space")
    junk = [
        path for path in space_files
        if any(part in JUNK_DIR_NAMES for part in Path(path).parts)
        or (excluded(Path(path)) and not path.endswith((".env.example", ".env.sample", ".env.test", ".env.template")))
    ]
    print(f"Space {owner}/{args.space}: {len(space_files)} files, {len(junk)} to remove")
    for path in junk[:15]:
        print(f"    - {path}")
    if len(junk) > 15:
        print(f"    ... and {len(junk) - 15} more")

    if junk:
        api.delete_files(
            repo_id=f"{owner}/{args.space}",
            delete_patterns=junk,
            repo_type="space",
            commit_message="Remove build artefacts and secret files",
        )
        print("    deleted junk files")

    # Re-upload a clean checkout so nothing missing comes back.
    workdir = Path(tempfile.mkdtemp(prefix="hf-clean-"))
    checkout = workdir / args.repo
    if download_tarball(args.repo, checkout) is None:
        print("    tarball download failed; skipping re-upload")
        return 1

    files, total = collect_files(checkout)
    print(f"    clean checkout: {len(files)} files, {total / 1024 / 1024:.1f} MB")

    space_name = args.space
    entry = SPACES.get(args.repo)
    if entry:
        _, emoji, color_from, color_to, summary = entry
        write_readme(checkout, space_name, emoji, color_from, color_to, summary, args.repo, owner)

    private = repo_is_private(args.repo)
    create_repo(
        repo_id=f"{owner}/{space_name}",
        repo_type="space",
        space_sdk="static",
        private=private,
        exist_ok=True,
        token=args.token,
    )

    # Upload only the cleaned set, using allow_patterns so nothing excluded leaks in.
    patterns = [str(path.relative_to(checkout)).replace("\\", "/") for path in files]
    api.upload_folder(
        folder_path=str(checkout),
        repo_id=f"{owner}/{space_name}",
        repo_type="space",
        allow_patterns=patterns,
        commit_message=f"Clean mirror of {GITHUB_OWNER}/{args.repo}",
    )
    print("    re-uploaded clean source")

    after = api.list_repo_files(f"{owner}/{space_name}", repo_type="space")
    remaining = [p for p in after if any(part in JUNK_DIR_NAMES for part in Path(p).parts)]
    print(f"    final file count: {len(after)} (junk remaining: {len(remaining)})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
