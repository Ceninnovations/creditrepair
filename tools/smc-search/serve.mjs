// Tiny zero-dependency static server for the SMC search tool.
// Usage: node serve.mjs [port]   (default 8080)
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, normalize } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = Number(process.argv[2]) || 8080;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
};

const server = createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (path === '/') path = '/index.html';
    // Prevent path traversal — resolve inside this directory only.
    const filePath = normalize(join(__dirname, path));
    if (!filePath.startsWith(__dirname)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    const ext = filePath.slice(filePath.lastIndexOf('.'));
    const data = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404).end('Not found');
  }
});

server.listen(port, () => {
  console.log(`SMC search tool running at http://localhost:${port}`);
});
