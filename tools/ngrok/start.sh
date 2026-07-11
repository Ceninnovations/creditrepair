#!/usr/bin/env bash
#
# One-command ngrok launcher for the creditrepair project.
#
#   ./tools/ngrok/start.sh search   # expose the SMC search tool  (default)
#   ./tools/ngrok/start.sh app      # expose the Next.js app
#
# Run this on YOUR OWN computer — not inside a cloud/CI container.
# ngrok gives your local server a public https:// URL anyone can open.

set -euo pipefail

TARGET="${1:-search}"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
CONFIG="$REPO_ROOT/tools/ngrok/ngrok.yml"

# --- 1. ngrok installed? -----------------------------------------------------
if ! command -v ngrok >/dev/null 2>&1; then
  cat <<'EOF'
ngrok is not installed. Install it, then run this again:

  macOS:    brew install ngrok
  Windows:  choco install ngrok      (or download from https://ngrok.com/download)
  Linux:    see https://ngrok.com/download

EOF
  exit 1
fi

# --- 2. authtoken reminder ---------------------------------------------------
# ngrok refuses to open tunnels without a token. We can't reliably detect
# whether one is configured across versions, so just remind up front.
echo "Note: ngrok needs a one-time authtoken. If it errors with 'authentication"
echo "failed', get your token at https://dashboard.ngrok.com/get-started/your-authtoken"
echo "and run once:  ngrok config add-authtoken <YOUR_TOKEN>"
echo

# --- 3. start the right local server, then tunnel it -------------------------
cleanup() { [ -n "${SERVER_PID:-}" ] && kill "$SERVER_PID" 2>/dev/null || true; }
trap cleanup EXIT

case "$TARGET" in
  search)
    echo "Starting the SMC search tool on http://localhost:8080 ..."
    node "$REPO_ROOT/tools/smc-search/serve.mjs" 8080 &
    SERVER_PID=$!
    sleep 1
    echo "Opening a public tunnel to it. Share the https:// URL ngrok prints below."
    ngrok start --config "$CONFIG" search
    ;;
  app)
    echo "Make sure the Next.js app is running (npm run dev) on http://localhost:3000."
    echo "Opening a public tunnel to it. Share the https:// URL ngrok prints below."
    ngrok start --config "$CONFIG" app
    ;;
  *)
    echo "Unknown target '$TARGET'. Use 'search' or 'app'."
    exit 1
    ;;
esac
