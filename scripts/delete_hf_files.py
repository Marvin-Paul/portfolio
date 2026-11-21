"""Delete specific files from a Hugging Face Space via the commit endpoint.

Usage:
    python scripts/delete_hf_files.py --token hf_xxx --space connect-plus --file "ConnectPlus/.env.test"
"""

from __future__ import annotations

import argparse
import sys

from huggingface_hub import HfApi


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--token", required=True)
    parser.add_argument("--space", required=True)
    parser.add_argument("--file", action="append", required=True)
    args = parser.parse_args()

    api = HfApi(token=args.token)
    owner = api.whoami()["name"]
    repo_id = f"{owner}/{args.space}"

    api.delete_files(
        repo_id=repo_id,
        delete_patterns=args.file,
        repo_type="space",
        commit_message="Remove committed secret files",
    )
    print(f"Deleted {len(args.file)} file(s) from {repo_id}")

    remaining = [
        path for path in api.list_repo_files(repo_id, repo_type="space")
        if path in args.file
    ]
    print(f"Still present: {remaining if remaining else 'none'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
