import type { APIRoute } from "astro";
import { promises as fs } from "fs";
import path from "path";

export const GET: APIRoute = async () => {
  try {
    const categoriesPath = path.join(process.cwd(), "src/data/categories.json");
    const categoriesJson = await fs.readFile(categoriesPath, "utf-8");
    const categories = JSON.parse(categoriesJson);

    return new Response(JSON.stringify(categories), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Nie udało się załadować kategorii" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
