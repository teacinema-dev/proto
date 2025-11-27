#!/bin/bash
set -e
echo "Generating Python protobuf..."

# 1. Генерация файлов
python3 -m grpc_tools.protoc \
  -I ./proto \
  --python_out=./gen/py \
  --grpc_python_out=./gen/py \
  ./proto/*.proto

echo "Proto generated. Creating __init__.py files..."

# 2. Создаем пакетный namespace (корень)
mkdir -p gen/py/teacinema_dev_contracts
touch gen/py/teacinema_dev_contracts/__init__.py

# 3. Переносим все сгенерированные файлы в пакет
mv gen/py/*_pb2.py gen/py/teacinema_dev_contracts/
mv gen/py/*_pb2_grpc.py gen/py/teacinema_dev_contracts/

# 4. Жёстко убеждаемся что __init__.py есть
for d in gen/py/teacinema_dev_contracts/*; do
    if [[ -d "$d" ]]; then
        touch "$d/__init__.py"
    fi
done

echo "Python package structure prepared."
echo "Python generation complete."
