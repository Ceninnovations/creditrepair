# Sharing this project with ngrok

ngrok gives a server running **on your own computer** a temporary public
`https://…` URL that anyone can open — handy for showing the SMC search tool or
the app to someone without deploying it.

> Run this **on your laptop**, not in a cloud/CI container. ngrok's whole point
> is to expose *your* local machine.

## One-time setup

1. Make a free account at <https://ngrok.com>.
2. Install ngrok:
   - **macOS:** `brew install ngrok`
   - **Windows:** `choco install ngrok` (or download from <https://ngrok.com/download>)
   - **Linux:** see <https://ngrok.com/download>
3. Add your authtoken (found at
   <https://dashboard.ngrok.com/get-started/your-authtoken>):
   ```bash
   ngrok config add-authtoken <YOUR_TOKEN>
   ```

## Start a public tunnel

From the repo root:

```bash
# Expose the SMC customer search tool (default)
./tools/ngrok/start.sh search

# Expose the Next.js credit-repair app (run `npm run dev` first)
./tools/ngrok/start.sh app
```

The script starts the right local server and opens the tunnel. ngrok prints a
`Forwarding  https://xxxx.ngrok-free.app -> http://localhost:…` line — that
https URL is the one you share. Press `Ctrl+C` to stop.

## Notes

- Free ngrok URLs change every restart and show an interstitial warning page on
  first visit. That's normal.
- **The search tool loads the CSV in the visitor's own browser.** The public URL
  serves only the empty search app — your customer data is *not* uploaded or
  shared unless you hand someone the CSV file too. Still, only share the URL with
  people you trust.
- Prefer running ngrok by hand? Use the config directly:
  ```bash
  ngrok start --config tools/ngrok/ngrok.yml search
  ```
