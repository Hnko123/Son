#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FRONTEND_DIR="$REPO_ROOT/frontend"
ENV_FILE="$FRONTEND_DIR/.env.local"

echo "👉 Frontend manuel kurulumu başlıyor..."

cd "$FRONTEND_DIR"

if [ ! -f "$ENV_FILE" ]; then
  cat <<'EOF' > "$ENV_FILE"
NEXT_PUBLIC_API_URL=http://localhost:8080/api
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=development-key
EOF
  echo "  • $ENV_FILE oluşturuldu."
fi

echo "  • npm install çalıştırılıyor..."
npm install

echo "  • npm run dev başlatılıyor (CTRL+C ile durdur)"
exec npm run dev
