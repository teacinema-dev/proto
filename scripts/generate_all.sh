#!/bin/bash
set -e

./scripts/generate_ts.sh
./scripts/generate_go.sh

echo "All languages generated successfully!"
