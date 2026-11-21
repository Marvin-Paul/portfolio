"""Remove committed .env files from a GitHub repository via the contents API.

Usage:
    python scripts/remove_github_env.py --repo POS --path pos-system/.env
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys

GH = r"C:\Program Files\GitHub CLI\gh.exe"
OWNER = "Marvin-Paul"


def run(args: list[str]) -> tuple[int, str]:
    result = subprocess.run(
        [GH] + args,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        timeout=180,
    )
    return result.returncode, result.stdout


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", required=True)
    parser.add_argument("--path", action="append", required=True)
    args = parser.parse_args()

    for path in args.path:
        code, out = run(["api", f"repos/{OWNER}/{args.repo}/contents/{path}"])
        if code != 0:
            print(f"  skip {path}: not found")
            continue
        sha = json.loads(out).get("sha")
        if not sha:
            print(f"  skip {path}: no sha")
            continue
        code, out = run([
            "api", f"repos/{OWNER}/{args.repo}/contents/{path}",
            "--method", "DELETE",
            "-f", "message=Remove committed .env file",
            "-f", f"sha={sha}",
        ])
        status = "deleted" if code == 0 else f"failed ({out.strip()[:120]})"
        print(f"  {args.repo}/{path}: {status}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
