import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://ilvelieroporticello.com/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the completed Il Veliero site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Il Veliero \| Bar, Panineria e Drinkerìa a Porticello<\/title>/i,
  );
  assert.match(html, /Il mare,/);
  assert.match(html, /Il nostro menu/);
  assert.match(html, /Lascia una recensione Google/);
  assert.match(html, /href="tel:\+393276204411"/);
  assert.match(html, /Frank Smith III, web developer del New Jersey/);
  assert.match(
    html,
    /href="https:\/\/franksmithlll\.com\/"/,
  );
  assert.match(html, /src="\/terrace-hero\.jpg"/);
  assert.match(html, /src="\/il-veliero-qr-v2\.png"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"BarOrPub"/);
  assert.match(html, /Via Francesco Zizzo, 41/);
  assert.match(
    html,
    /name="google-site-verification" content="-UIvYsLhHlD7jd9KyLcBDToGOufzDD-ieMM0np-AHdU"/,
  );
  assert.doesNotMatch(html, /codex-preview|Building your site|Starter Project/i);
});

test("GitHub Pages export uses custom-domain root asset paths", async () => {
  await execFileAsync(
    process.execPath,
    ["scripts/export-github-pages.mjs"],
    { cwd: projectRoot },
  );

  const [html, cname, assetFiles] = await Promise.all([
    readFile(new URL("../pages-dist/index.html", import.meta.url), "utf8"),
    readFile(new URL("../pages-dist/CNAME", import.meta.url), "utf8"),
    readdir(new URL("../pages-dist/assets", import.meta.url)),
  ]);

  assert.equal(cname.trim(), "ilvelieroporticello.com");
  assert.match(html, /href="\/assets\/index-[^"]+\.css"/);
  assert.match(html, /src="\/terrace-hero\.jpg"/);
  assert.match(html, /src="\/il-veliero-qr-v2\.png"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"BarOrPub"/);
  assert.match(
    html,
    /name="google-site-verification" content="-UIvYsLhHlD7jd9KyLcBDToGOufzDD-ieMM0np-AHdU"/,
  );
  assert.doesNotMatch(html, /\/il-veliero-porticello\//);
  assert.ok(assetFiles.some((file) => /^index-.+\.css$/.test(file)));

  const robots = await readFile(new URL("../pages-dist/robots.txt", import.meta.url), "utf8");
  assert.match(robots, /Sitemap: https:\/\/ilvelieroporticello\.com\/sitemap\.xml/);

  const sitemap = await readFile(new URL("../pages-dist/sitemap.xml", import.meta.url), "utf8");
  assert.match(sitemap, /<loc>https:\/\/ilvelieroporticello\.com\/<\/loc>/);
});
