import type { Article } from "@/types/articles";
import { promises as fs } from "fs";
import path from "path";

export async function getArticles(): Promise<Article[]> {
  try {
    const file = path.join(process.cwd(), "src/data/articles.json");
    const json = await fs.readFile(file, "utf-8");
    return JSON.parse(json) as Article[];
  } catch {
    return [];
  }
}
