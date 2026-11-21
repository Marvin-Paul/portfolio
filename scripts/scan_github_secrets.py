"""Scan every GitHub repository for committed .env files and credential strings.

Usage:
    python scripts/scan_github_secrets.py
"""

from __future__ import annotations

import json
import subprocess
import sys

GH = r"C:\Program Files\GitHub CLI\gh.exe"
OWNER = "Marvin-Paul"

CREDENTIAL = [
    "postgresql://",
    "mysql://",
    "mongodb+srv://",
    "redis://",
    "service_role",
    "SUPABASE_SERVICE_ROLE",
    "PRIVATE_KEY",
    "AWS_SECRET_ACCESS_KEY",
    "sk-[A-Za-z0-9]{20,}",
    "ghp_[A-Za-z0-9]{20,}",
    "hf_[A-Za-z0-9]{20,}",
    "AIza[0-9A-Za-z_-]{30,}",
]


def run(args: list[str]) -> str:
    result = subprocess.run(
        [GH] + args,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        timeout=180,
    )
    return result.stdout if result.returncode == 0 else ""


def main() -> int:
    repos_raw = run(["repo", "list", OWNER, "--limit", "100", "--json", "name,isPrivate"])
    repos = json.loads(repos_raw or "[]")
    print(f"Scanning {len(repos)} repositories...\n")

    findings = []
    for repo in repos:
        name = repo["name"]
        tree_raw = run(["api", f"repos/{OWNER}/{name}/git/trees/HEAD?recursive=1"])
        if not tree_raw:
            continue
        try:
            tree = json.loads(tree_raw).get("tree", [])
        except json.JSONDecodeError:
            continue

        env_files = [
            node["path"]
            for node in tree
            if node.get("type") == "blob"
            and node["path"].split("/")[-1].startswith(".env")
            and not node["path"].split("/")[-1].endswith((".example", ".sample", ".template"))
        ]

        for path in env_files:
            content = run(["api", f"repos/{OWNER}/{name}/contents/{path}"])
            if not content:
                continue
            try:
                import base64
                text = base64.b64decode(json.loads(content)["content"]).decode("utf-8", "ignore")
            except Exception:
                continue
            hits = [needle for needle in CREDENTIAL if needle in text]
            findings.append((name, repo["isPrivate"], path, hits))

    print("Committed .env files (excluding templates):")
    if not findings:
        print("  none")
    for name, private, path, hits in findings:
        flag = "PRIVATE" if private else "*** PUBLIC ***"
        print(f"  [{flag}] {name}/{path}")
        if hits:
            print(f"      credentials found: {', '.join(hits)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
