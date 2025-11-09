#!/bin/bash
set -e

echo "🔎 Verifying protobuf changes..."

./scripts/generate-ts.sh
./scripts/generate-go.sh

# Check if anything changed after generation
if git diff --exit-code; then
  echo "✅ Proto files are up to date"
else
  echo "❌ Generated files are outdated. Run yarn proto:gen locally"
  exit 1
fi
