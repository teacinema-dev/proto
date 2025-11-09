#!/usr/bin/env bash
set -e

echo "🔎 Verifying protobuf changes..."

TMP_DIR="$(mktemp -d)"

cp -R gen "$TMP_DIR"/gen_old

./scripts/generate-ts.sh >/dev/null 2>&1
./scripts/generate-go.sh >/dev/null 2>&1

if ! diff -r gen "$TMP_DIR"/gen_old >/dev/null; then
  echo "❌ Protobuf codegen out of date!"
  echo "➡️  Run:"
  echo "     ./scripts/generate-ts.sh"
  echo "     ./scripts/generate-go.sh"
  exit 1
fi

echo "✅ Proto verification passed (code generated and consistent)"
