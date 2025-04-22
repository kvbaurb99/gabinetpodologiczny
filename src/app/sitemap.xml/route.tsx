import { getArticles } from "@/server/getArticles";

export async function GET() {
  const articles = await getArticles();

  const sitemapIndex = articles
    .map((article) => {
      const date = new Date();
      const offset = date.getTimezoneOffset() * 60000; // offest in ms
      const localISOTime = new Date(date.getTime() - offset).toISOString();

      return `
    <url>
      <loc>https://podologjaworze.pl/blog/${article.slug}</loc>
      <lastmod>${localISOTime}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
  `;
    })
    .join("\n");

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapIndex}
  </urlset>
`;

  return new Response(xml, {
    headers: {
      "content-type": "application/xml;charset=UTF-8",
    },
  });
}
