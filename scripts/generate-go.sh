#!/usr/bin/env bash
set -e

echo "Generating Go protobuf files..."

OUT_DIR="gen/go"
PROTO_DIR="proto"

mkdir -p $OUT_DIR

protoc -I $PROTO_DIR $(find $PROTO_DIR -name "media.proto") \
  --go_out=$OUT_DIR --go_opt=paths=source_relative \
  --go-grpc_out=$OUT_DIR --go-grpc_opt=paths=source_relative

echo "Go generation complete: $OUT_DIR"
