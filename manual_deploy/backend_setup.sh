#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BACKEND_DIR="$REPO_ROOT/backend"
VENV_DIR="$REPO_ROOT/.venv-manual"
ENV_FILE="$BACKEND_DIR/.env.manual"

echo "👉 Backend manuel kurulumu başlıyor..."

if [ ! -d "$VENV_DIR" ]; then
  echo "  • Virtualenv oluşturuluyor: $VENV_DIR"
  python3 -m venv "$VENV_DIR"
fi

source "$VENV_DIR/bin/activate"

echo "  • pip güncelleniyor..."
pip install --upgrade pip >/dev/null

echo "  • backend bağımlılıkları kuruluyor..."
pip install -r "$BACKEND_DIR/requirements.txt"

if [ ! -f "$ENV_FILE" ]; then
  cat <<'EOF' > "$ENV_FILE"
# Örnek manuel backend env dosyası
DATABASE_URL=sqlite:///./orders.db
SECRET_KEY=change-me
EOF
  echo "  • $ENV_FILE oluşturuldu (örnek değerlerle)."
fi

echo "  • Uvicorn başlatılıyor (CTRL+C ile durdur)"
cd "$BACKEND_DIR"
UVICORN_OPTS=${UVICORN_OPTS:-"backend.app.main:app --host 0.0.0.0 --port 8080 --reload"}
exec "$VENV_DIR/bin/python" -m uvicorn $UVICORN_OPTS
