import type { APIRoute } from "astro";
import { getArticles } from "@/server/getArticles";
import { getCategories } from "@/server/getCategories";
import { services } from "@/data/services";

export const GET: APIRoute = async () => {
  let articles: Awaited<ReturnType<typeof getArticles>> = [];
  let categories: Awaited<ReturnType<typeof getCategories>> = [];
  try {
    [articles, categories] = await Promise.all([
      getArticles(),
      getCategories(),
    ]);
  } catch {}

  // lastmod: daty wpisane przy treści (mtime plików na Vercelu to czas builda, nie zmiany treści)
  const PAGES_LASTMOD = "2026-10-25";
  const articleDates = articles
    .map((a) => a.updated ?? a.date)
    .filter(Boolean)
    .sort();
  const blogLastMod = articleDates[articleDates.length - 1] ?? PAGES_LASTMOD;

  const urls = [
    { loc: "https://podologjaworze.pl/", lastmod: PAGES_LASTMOD },
    { loc: "https://podologjaworze.pl/podolog-bielsko-biala", lastmod: PAGES_LASTMOD },
    { loc: "https://podologjaworze.pl/o-nas", lastmod: PAGES_LASTMOD },
    { loc: "https://podologjaworze.pl/kontakt", lastmod: PAGES_LASTMOD },
    ...services.map((service) => ({
      loc: `https://podologjaworze.pl/${service.slug}`,
      lastmod: service.updated,
    })),
    { loc: "https://podologjaworze.pl/blog", lastmod: blogLastMod },
    { loc: "https://podologjaworze.pl/kategorie", lastmod: blogLastMod },
    ...articles.map((a) => ({
      loc: `https://podologjaworze.pl/blog/${a.slug}`,
      lastmod: a.updated ?? (a.date || blogLastMod),
    })),
    ...categories
      .filter((c) => articles.some((a) => a.category_slug === c.slug))
      .map((c) => ({
        loc: `https://podologjaworze.pl/kategorie/${c.slug}`,
        lastmod: blogLastMod,
      })),
    {
      loc: "https://podologjaworze.pl/polityka-prywatnosci",
      lastmod: "2025-11-27",
    },
  ];

  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

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
