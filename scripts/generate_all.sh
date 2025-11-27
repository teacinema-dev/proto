#!/bin/bash
set -e

./scripts/generate_ts.sh
./scripts/generate_go.sh
./scripts/generate_py.sh

echo "All languages generated successfully!"
