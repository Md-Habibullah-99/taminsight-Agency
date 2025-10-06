#!/usr/bin/env bash
set -euo pipefail

echo "Running local build check (install + build)..."
if npm ci 2>/dev/null; then
  echo "npm ci succeeded"
else
  echo "npm ci failed, trying npm install"
  npm install --no-audit --no-fund
fi

npm run build

echo "Build finished. Check dist/ for output."
