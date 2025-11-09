#!/usr/bin/env bash
set -e

echo "Generating TypeScript protobuf files..."

OUT_DIR="gen/ts"
PROTO_DIR="proto"

mkdir -p $OUT_DIR

protoc -I $PROTO_DIR $(find $PROTO_DIR -name "*.proto") \
  --ts_proto_out=$OUT_DIR \
  --ts_proto_opt=nestJs=true,env=browser

echo "TS generation complete: $OUT_DIR"
