"""Mirror GitHub repositories into Hugging Face Spaces.

Usage:
    python scripts/mirror_to_hf.py --token hf_xxx [--dry-run]

Creates one HF Space per GitHub repo, uploads the source (excluding build
artefacts and secrets), and writes a README with YAML frontmatter so the Space
renders with a title, emoji and theme colours.
"""

from __future__ import annotations

import argparse
import fnmatch
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from huggingface_hub import HfApi, create_repo

GITHUB_OWNER = "Marvin-Paul"

# repo -> (space name, emoji, color_from, color_to, summary)
SPACES = {
    "wabzfoods": ("wabz-foods", "🍔", "red", "gray", "Full-stack food ordering and delivery platform with a merchant admin panel and Supabase-backed data."),
    "hysys": ("hysys-global-solutions", "🏢", "blue", "indigo", "Company website for HYSYS Global Solutions, delivered as a TypeScript monorepo with full product and design documentation."),
    "ConnectPlus": ("connect-plus", "🔗", "blue", "cyan", "Professional networking platform scaffold with profiles, jobs, messaging and API routes."),
    "campus-Mindspace": ("campus-mindspace", "🎓", "emerald", "green", "Student community project with a React application, Supabase integration and Tailwind CSS styling."),
    "MAVIN-JAVASCRIPT-COURSE": ("mavin-javascript-course", "🎮", "yellow", "orange", "Hands-on JavaScript course: rock-paper-scissors, todo list, cart design and DOM projects."),
    "maize2026": ("maizeguard-ai", "🌽", "lime", "green", "Standalone Flutter app that diagnoses maize leaf disease from a photo using Gemini vision."),
    "rakentaa-real-estate": ("rakentaa-real-estate", "🏘️", "blue", "indigo", "Responsive corporate website with a React frontend and Node.js content management backend."),
    "rolkat-website": ("rolkat-financial-services", "💼", "blue", "slate", "Financial services and property website with a custom WordPress theme and admin CMS."),
    "safe-space-community-center": ("safe-space-community-center", "🛡️", "emerald", "teal", "Community centre website for Safe Space."),
    "Variables": ("csharp-fundamentals", "🎓", "purple", "violet", "C# console exercises targeting .NET 10: variables, input, conditionals, loops, arrays and methods."),
    "portfolio": ("portfolio", "💼", "red", "black", "Professional portfolio site built with Next.js, TypeScript and Tailwind CSS."),
    "POS": ("emotions-store-pos", "🧾", "orange", "red", "Offline-first point-of-sale terminal with a Tauri v2 and Rust shell around React."),
    "jbk-invoicing": ("jbk-invoicing", "🧮", "blue", "slate", "Offline-first invoicing and stock app for JBK Machinery & Accessories."),
    "house-of-gina-storefront": ("house-of-gina", "👗", "pink", "purple", "Editorial luxury storefront for a Kampala fashion house."),
    "developer-bootstrap": ("developer-bootstrap", "🧰", "slate", "gray", "Developer bootstrap tooling and templates."),
    "enterprise-api-bootstrap": ("enterprise-api-bootstrap", "🏢", "slate", "gray", "Enterprise API bootstrap tooling and templates."),
}

# Directories/files never uploaded to the Hub.
EXCLUDE_DIRS = {
    "node_modules", ".git", ".next", ".vercel", "dist", "build", "out",
    ".turbo", ".cache", "__pycache__", ".pytest_cache", "coverage", ".gradle",
    "bin", "obj", ".vs", ".idea", ".dart_tool", ".expo", "target",
}
EXCLUDE_FILES = {
    ".env", ".env.local", ".env.development", ".env.production", ".DS_Store",
    "Thumbs.db", "package-lock.json", "yarn.lock", "pnpm-lock.yaml",
    "poetry.lock", "Cargo.lock", "composer.lock",
}
EXCLUDE_PATTERNS = (
    "*.keystore", "*.jks", "*.p12", "*.pfx", "*.key", "*.pem", "*.env*",
    "*.sqlite", "*.sqlite3", "*.db", "*.exe", "*.dll", "*.so", "*.dylib",
    "*.apk", "*.aab", "*.ipa", "*.zip", "*.tar", "*.gz", "*.7z", "*.rar",
    "*.mp4", "*.mov", "*.avi", "*.psd", "*.ai", "*.sketch", "*.fig",
)

MAX_FILE_BYTES = 90 * 1024 * 1024  # stay under the Hub's per-file LFS limit
MAX_TOTAL_BYTES = 2 * 1024 * 1024 * 1024


def excluded(path: Path) -> bool:
    name = path.name
    if name in EXCLUDE_FILES or name.startswith(".env"):
        return True
    return any(fnmatch.fnmatch(name, pat) for pat in EXCLUDE_PATTERNS)


def should_skip_dir(name: str) -> bool:
    return name in EXCLUDE_DIRS


def collect_files(root: Path) -> tuple[list[Path], int]:
    """Return files to upload plus their total size in bytes."""
    picked: list[Path] = []
    total = 0
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if not should_skip_dir(d)]
        for filename in filenames:
            file_path = Path(dirpath) / filename
            if excluded(file_path):
                continue
            try:
                size = file_path.stat().st_size
            except OSError:
                continue
            if size > MAX_FILE_BYTES:
                print(f"    skip (too large): {file_path.relative_to(root)}")
                continue
            total += size
            picked.append(file_path)
    return picked, total


def clone_repo(repo: str, dest: Path) -> bool:
    target = dest / repo
    cmd = ["gh", "repo", "clone", f"{GITHUB_OWNER}/{repo}", str(target), "--", "--depth", "1"]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=900)
    except FileNotFoundError:
        cmd[0] = "git"
        cmd = ["git", "clone", "--depth", "1", f"https://github.com/{GITHUB_OWNER}/{repo}.git", str(target)]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=900)
    if result.returncode != 0:
        print(f"    clone failed: {result.stderr.strip()[:300]}")
        return False
    return True


def write_readme(root: Path, space_name: str, emoji: str, color_from: str, color_to: str, summary: str, repo: str, owner: str) -> None:
    frontmatter = [
        "---",
        f"title: {space_name.replace('-', ' ').title()}",
        f"emoji: {emoji}",
        f"color_from: {color_from}",
        f"color_to: {color_to}",
        "sdk: static",
        "sdk_version: 0.0.1",
        "app_port: 3000",
        "pinned: false",
        "---",
        "",
    ]
    body = [
        f"# {space_name.replace('-', ' ').title()}",
        "",
        summary,
        "",
        "## Source",
        "",
        f"- GitHub: https://github.com/{GITHUB_OWNER}/{repo}",
        f"- Hugging Face Space: https://huggingface.co/spaces/{owner}/{space_name}",
        "",
        "This Space mirrors the project repository. The source code below is the",
        "same code that lives on GitHub.",
        "",
    ]
    (root / "README.md").write_text("\n".join(frontmatter + body), encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--token", required=True)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    api = HfApi(token=args.token)
    whoami = api.whoami()
    owner = whoami["name"]
    print(f"Authenticated as: {owner}\n")

    workdir = Path(tempfile.mkdtemp(prefix="hf-mirror-"))
    results: list[tuple[str, str]] = []

    try:
        for repo, (space_name, emoji, color_from, color_to, summary) in SPACES.items():
            print(f"[{repo}] -> {owner}/{space_name}")
            checkout = workdir / repo
            if not clone_repo(repo, checkout):
                results.append((repo, "clone failed"))
                continue

            # GitHub visibility decides Hub visibility.
            private = False
            try:
                info = subprocess.run(
                    ["gh", "api", f"repos/{GITHUB_OWNER}/{repo}"],
                    capture_output=True, text=True, timeout=120,
                )
                if info.returncode == 0:
                    import json
                    private = bool(json.loads(info.stdout).get("private", False))
            except Exception:
                pass

            files, total = collect_files(checkout)
            print(f"    {len(files)} files, {total / 1024 / 1024:.1f} MB, private={private}")
            if total > MAX_TOTAL_BYTES:
                print("    skip: exceeds upload budget")
                results.append((repo, "too large"))
                continue

            write_readme(checkout, space_name, emoji, color_from, color_to, summary, repo, owner)

            if args.dry_run:
                results.append((repo, "dry-run"))
                continue

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
                    ignore_patterns=["*"] if False else None,
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
