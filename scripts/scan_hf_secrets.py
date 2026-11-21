"""Scan public Hugging Face Spaces for committed secret files.

Looks for real .env files (not .example/.sample/.test), key material and
credential-shaped assignments across every text file in each public Space.
"""

from __future__ import annotations

import re
import sys
from concurrent.futures import ThreadPoolExecutor

from huggingface_hub import HfApi, hf_hub_download

OWNER = "Marvin256"
TOKEN = sys.argv[1] if len(sys.argv) > 1 else None

PUBLIC_SPACES = [
    "wabz-foods", "hysys-global-solutions", "connect-plus", "campus-mindspace",
    "mavin-javascript-course", "maizeguard-ai", "rakentaa-real-estate",
    "safe-space-community-center", "csharp-fundamentals", "portfolio",
    "developer-bootstrap", "enterprise-api-bootstrap", "rolkat-financial-services",
]

SECRET_FILE = re.compile(
    r"(^|/)(\.env(\.[\w.-]+)?|.*\.pem|.*\.key|id_rsa|.*\.p12|.*\.pfx|credentials\.json|service-account.*\.json)$",
    re.IGNORECASE,
)
# .example/.sample/.test files are safe templates.
SAFE_SUFFIX = re.compile(r"\.(example|sample|template|dist|dist\.example)$", re.IGNORECASE)
SECRET_ASSIGNMENT = re.compile(
    r"(?i)(service_role|private_key|secret_key|access_token|client_secret|aws_secret_access_key)\s*[=:]\s*['\"]?[A-Za-z0-9_\-/+]{16,}"
)
TEXT_EXT = {
    ".js", ".ts", ".tsx", ".jsx", ".json", ".env", ".txt", ".md", ".yml", ".yaml",
    ".toml", ".ini", ".cfg", ".conf", ".sh", ".ps1", ".html", ".css", ".py",
    ".dart", ".cs", ".php", ".sql", ".xml", ".csv", ".gitignore", "",
}


def scan(space: str) -> dict:
    api = HfApi(token=TOKEN)
    try:
        files = api.list_repo_files(f"{OWNER}/{space}", repo_type="space")
    except Exception as exc:
        return {space: {"error": str(exc)[:200]}}

    findings = []
    for path in files:
        if SECRET_FILE.search(path) and not SAFE_SUFFIX.search(path):
            findings.append({"file": path, "kind": "secret-named file"})
            continue
        ext = path.rsplit(".", 1)[-1].lower() if "." in path.rsplit("/", 1)[-1] else ""
        if ext not in TEXT_EXT:
            continue
        if path.endswith((".png", ".jpg", ".jpeg", ".gif", ".ico", ".pdf", ".zip")):
            continue
        try:
            local = hf_hub_download(
                repo_id=f"{OWNER}/{space}", filename=path, repo_type="space", token=TOKEN
            )
            with open(local, "r", encoding="utf-8", errors="ignore") as handle:
                content = handle.read()
        except Exception:
            continue
        for match in SECRET_ASSIGNMENT.finditer(content):
            findings.append({"file": path, "kind": "credential assignment"})

    return {space: {"files": len(files), "findings": findings}}


def main() -> int:
    with ThreadPoolExecutor(max_workers=6) as pool:
        results = list(pool.map(scan, PUBLIC_SPACES))

    total = 0
    for result in results:
        for space, data in result.items():
            findings = data.get("findings", [])
            total += len(findings)
            print(f"{space:<32} files={data.get('files', '?'):<6} findings={len(findings)}")
            for finding in findings[:10]:
                print(f"    - {finding['kind']}: {finding['file']}")
    print(f"\nTotal findings across public spaces: {total}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
