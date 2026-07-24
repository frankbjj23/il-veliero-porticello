import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const repository =
  process.env.GITHUB_REPOSITORY ?? "frankbjj23/il-veliero-porticello";
const [owner, repo] = repository.split("/");
const siteOrigin = `https://${owner}.github.io`;
const sitePrefix = `/${repo}`;
const outputDirectory = new URL("../pages-dist/", import.meta.url);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(new URL("../dist/client/", import.meta.url), outputDirectory, {
  recursive: true,
});

const { default: worker } = await import("../dist/server/index.js");
const response = await worker.fetch(
  new Request(`${siteOrigin}/`),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Static render failed with status ${response.status}`);
}

let html = await response.text();

html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*\brel=["']modulepreload["'][^>]*>/gi, "")
  .replace(
    /https?:\/\/localhost(?::\d+)?\//g,
    `${siteOrigin}${sitePrefix}/`,
  )
  .replace(/\b(href|src)="\/(?!\/)/g, `$1="${sitePrefix}/`);

await Promise.all([
  writeFile(new URL("index.html", outputDirectory), html, "utf8"),
  writeFile(new URL("404.html", outputDirectory), html, "utf8"),
  writeFile(new URL(".nojekyll", outputDirectory), "", "utf8"),
]);

console.log(`GitHub Pages export ready at ${siteOrigin}${sitePrefix}/`);
