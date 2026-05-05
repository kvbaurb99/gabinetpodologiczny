import type { APIRoute } from "astro";
import { promises as fs } from "fs";
import path from "path";

export const GET: APIRoute = async () => {
  try {
    const articlesPath = path.join(process.cwd(), "src/data/articles.json");
    const articlesJson = await fs.readFile(articlesPath, "utf-8");
    const articles = JSON.parse(articlesJson);

    return new Response(JSON.stringify(articles), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Nie udało się załadować artykułów" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
