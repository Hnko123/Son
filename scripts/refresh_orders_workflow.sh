#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(readlink -f "$SCRIPT_DIR/..")"
BACKEND_DIR="$REPO_ROOT/app/backend"
FRONTEND_DIR="$REPO_ROOT/app/frontend"
BACKEND_HOST="${BACKEND_HOST:-localhost}"
BACKEND_PORT="${BACKEND_PORT:-8080}"

echo "👉 Cleaning backend order cache files..."
export WORKFLOW_REPO_ROOT="$REPO_ROOT/app"
python3 - <<'PY'
from pathlib import Path
import os

ROOT = Path(os.environ["WORKFLOW_REPO_ROOT"])
BACKEND = ROOT / "backend"
FRONTEND = ROOT / "frontend"

PATHS = [
    BACKEND / "data" / "orders_cache.json",
    BACKEND / "data" / "manual_orders.json",
    FRONTEND / "public" / "data" / "etsy_orders.json",
]

for path in PATHS:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("[]", encoding="utf-8")
    print(f"  • Cleared {path.relative_to(ROOT)}")
PY

echo "👉 Removing frontend build cache (.next)..."
rm -rf "$FRONTEND_DIR/.next"
echo "  • Removed $FRONTEND_DIR/.next"

echo "👉 Triggering backend refresh cron endpoint..."
TMP_RESPONSE=$(mktemp)
cleanup_response() {
  rm -f "$TMP_RESPONSE"
}
trap cleanup_response EXIT

trigger_refresh() {
  local endpoint="$1"
  local status
  status=$(curl -sS -o "$TMP_RESPONSE" -w "%{http_code}" -X POST "http://$BACKEND_HOST:$BACKEND_PORT$endpoint" \
    -H "Content-Type: application/json") || true
  echo "  • $endpoint -> HTTP $status"
  if [[ "$status" == "000" ]]; then
    echo "    ⚠️ Backend unreachable at http://$BACKEND_HOST:$BACKEND_PORT$endpoint"
    return 1
  fi
  if [[ "$status" -ge 200 && "$status" -lt 300 ]]; then
    cat "$TMP_RESPONSE"
    return 0
  fi
  return 2
}

if trigger_refresh "/api/orders/refresh-cron"; then
  :
elif trigger_refresh "/api/orders/refresh"; then
  echo "  • Fallback to /api/orders/refresh succeeded"
else
  echo "  ✖️ Both refresh endpoints failed; check backend logs/port and rerun."
  exit 1
fi

trap - EXIT
cleanup_response

echo "👉 Rebuilding frontend..."
(cd "$FRONTEND_DIR" && npm install && npm run build)

echo "✅ Orders refresh workflow completed."
