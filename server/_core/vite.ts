import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

const BASE_URL = "https://veda-care.replit.app";

const OG_CONFIGS: Record<string, { title: string; description: string; image: string }> = {
  quiz: {
    title: "VEDA｜猜猜您現在的狀態",
    description: "CARE｜30秒解鎖專屬報告",
    image: `${BASE_URL}/quiz-hero.png`,
  },
  home: {
    title: "VEDA｜找到身體的減法",
    description: "CARE｜科研級精準解方",
    image: `${BASE_URL}/preview.png`,
  },
};

function getOgConfig(urlPath: string) {
  if (urlPath.startsWith("/awareness-check") || urlPath.startsWith("/quiz")) {
    return OG_CONFIGS.quiz;
  }
  return OG_CONFIGS.home;
}

function injectOgTags(html: string, urlPath: string): string {
  const og = getOgConfig(urlPath);
  return html
    .replace(/<meta property="og:title"[^>]*>/g,
      `<meta property="og:title" content="${og.title}" />`)
    .replace(/<meta property="og:description"[^>]*>/g,
      `<meta property="og:description" content="${og.description}" />`)
    .replace(/<meta property="og:image"[^>]*>/g,
      `<meta property="og:image" content="${og.image}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/g,
      `<meta name="twitter:title" content="${og.title}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/g,
      `<meta name="twitter:description" content="${og.description}" />`)
    .replace(/<meta name="twitter:image"[^>]*>/g,
      `<meta name="twitter:image" content="${og.image}" />`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      template = injectOgTags(template, req.path);
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    let html = fs.readFileSync(indexPath, "utf-8");
    html = injectOgTags(html, req.path);
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  });
}
