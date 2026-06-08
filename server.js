const { createServer } = require("http");
const { existsSync, statSync, createReadStream } = require("fs");
const { extname, join, normalize } = require("path");

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "127.0.0.1";
const outDir = join(__dirname, "out");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function resolveFile(requestUrl) {
  const urlPath = decodeURIComponent((requestUrl || "/").split("?")[0]);
  const safePath = normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
  let filePath = join(outDir, safePath);

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    const indexPath = join(filePath, "index.html");
    const htmlPath = `${filePath}.html`;
    filePath = existsSync(indexPath) ? indexPath : htmlPath;
  }

  if (!existsSync(filePath) && !extname(filePath)) {
    filePath = `${filePath}.html`;
  }

  if (!existsSync(filePath)) {
    filePath = join(outDir, "404.html");
  }

  return filePath;
}

createServer((req, res) => {
  const filePath = resolveFile(req.url);

  if (!existsSync(filePath)) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const contentType = mimeTypes[extname(filePath)] || "application/octet-stream";
  res.writeHead(filePath.endsWith("404.html") ? 404 : 200, {
    "Content-Type": contentType,
  });
  createReadStream(filePath).pipe(res);
}).listen(port, hostname, () => {
  console.log(`Serving static export from ${outDir} on http://${hostname}:${port}`);
});
