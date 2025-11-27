#!/bin/bash
set -e
echo "Generating Go protobuf..."
protoc -I ./proto \
  --go_out=./gen/go \
  --go_opt=paths=source_relative \
  --go-grpc_out=./gen/go \
  --go-grpc_opt=paths=source_relative \
  ./proto/*.proto
echo "Go generation complete."
