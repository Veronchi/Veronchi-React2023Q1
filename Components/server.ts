import express from 'express';
import { createServer } from 'vite';
import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Request, Response } from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = path.resolve(__dirname, 'index.html');

const PORT = process.env.PORT || 3001;

async function initServer() {
  const app = express();
  const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response) => {
    const url = req.originalUrl;

    try {
      const template = fs.readFileSync(html, 'utf8');
      const transformHtml = await vite.transformIndexHtml(url, template);
      const [start, end] = transformHtml.split('<!--app-->');

      const appRender = (await vite.ssrLoadModule('./src/entry-server.tsx')).render;

      res.write(start);
      const stream = appRender(url, {
        onShellReady() {
          stream.pipe(res);
        },
        onAllReady() {
          res.write(end);
          res.end();
        },
        onError: (err: Error) => {
          console.log(err.message);
        },
      });
    } catch (err) {
      console.log(err);
    }
  });

  return app;
}

initServer().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
  });
});
