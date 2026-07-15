import type { APIRoute } from "astro";
import { promises as fs } from "fs";
import path from "path";
import { getArticles } from "@/server/getArticles";
import { getCategories } from "@/server/getCategories";

export const GET: APIRoute = async () => {
  let articles: Awaited<ReturnType<typeof getArticles>> = [];
  let categories: Awaited<ReturnType<typeof getCategories>> = [];
  try {
    [articles, categories] = await Promise.all([
      getArticles(),
      getCategories(),
    ]);
  } catch {}

  // lastmod = mtime of underlying data file (sensowny sygnał dla crawlerów)
  let articlesLastMod = new Date().toISOString();
  let categoriesLastMod = articlesLastMod;
  try {
    const articlesStat = await fs.stat(
      path.join(process.cwd(), "src/data/articles.json")
    );
    articlesLastMod = articlesStat.mtime.toISOString();
  } catch {}
  try {
    const categoriesStat = await fs.stat(
      path.join(process.cwd(), "src/data/categories.json")
    );
    categoriesLastMod = categoriesStat.mtime.toISOString();
  } catch {}

  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const urls = [
    { loc: "https://podologjaworze.pl/", lastmod: articlesLastMod },
    { loc: "https://podologjaworze.pl/kontakt", lastmod: articlesLastMod },
    { loc: "https://podologjaworze.pl/blog", lastmod: articlesLastMod },
    {
      loc: "https://podologjaworze.pl/kategorie",
      lastmod: categoriesLastMod,
    },
    ...articles.map((a) => ({
      loc: `https://podologjaworze.pl/blog/${a.slug}`,
      lastmod: articlesLastMod,
    })),
    ...categories.map((c) => ({
      loc: `https://podologjaworze.pl/kategorie/${c.slug}`,
      lastmod: categoriesLastMod,
    })),
  ];

  const body = urls
    .map(
      ({ loc, lastmod }) =>
        `  <url>\n    <loc>${escape(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  return new Response(xml, {
    headers: { "content-type": "application/xml;charset=UTF-8" },
  });
};
