import type { APIRoute } from "astro";
import { promises as fs } from "fs";
import path from "path";

interface ArticleRecord {
  slug: string;
  [key: string]: unknown;
}

export const GET: APIRoute = async ({ params }) => {
  try {
    const { slug } = params;
    const articlesPath = path.join(process.cwd(), "src/data/articles.json");
    const articlesJson = await fs.readFile(articlesPath, "utf-8");
    const articles: ArticleRecord[] = JSON.parse(articlesJson);

    const article = articles.find((a) => a.slug === slug);

    if (!article) {
      return new Response(
        JSON.stringify({ error: "Artykuł nie został znaleziony" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(article), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Nie udało się załadować artykułu" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
