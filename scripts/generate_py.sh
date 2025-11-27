#!/bin/bash
set -e
echo "Generating Python protobuf..."
python3 -m grpc_tools.protoc \
  -I ./proto \
  --python_out=./gen/py \
  --grpc_python_out=./gen/py \
  ./proto/*.proto
echo "Python generation complete."
