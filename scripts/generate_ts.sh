#!/bin/bash
set -e
echo "Generating TypeScript protobuf..."
npx protoc \
  -I ./proto \
  ./proto/*.proto \
  --ts_proto_out=./gen/ts \
  --ts_proto_opt=nestJs=true,package=omit
echo "TS generation complete."
