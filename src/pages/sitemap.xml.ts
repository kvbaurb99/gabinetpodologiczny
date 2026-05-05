import type { APIRoute } from "astro";
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

  const date = new Date();
  const offset = date.getTimezoneOffset() * 60000;
  const localISOTime = new Date(date.getTime() - offset).toISOString();

  const sitemapIndexCategories = categories
    .map(
      (category) => `
  <url>
    <loc>https://podologjaworze.pl/kategorie/${category.slug}</loc>
    <lastmod>${localISOTime}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`
    )
    .join("\n");

  const sitemapIndexArticles = articles
    .map(
      (article) => `
    <url>
      <loc>https://podologjaworze.pl/blog/${article.slug}</loc>
      <lastmod>${localISOTime}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
      <loc>https://podologjaworze.pl</loc>
      <lastmod>${localISOTime}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
      <url>
      <loc>https://podologjaworze.pl/blog</loc>
      <lastmod>${localISOTime}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
          <url>
      <loc>https://podologjaworze.pl/kategorie</loc>
      <lastmod>${localISOTime}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    ${sitemapIndexArticles}
    ${sitemapIndexCategories}
  </urlset>
`;

  return new Response(xml, {
    headers: { "content-type": "application/xml;charset=UTF-8" },
  });
};
