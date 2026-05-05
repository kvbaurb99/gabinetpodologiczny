import type { Article } from "@/types/articles";
import { promises as fs } from "fs";
import path from "path";

type Props = {
  slug: string;
};

export async function getArticle({ slug }: Props): Promise<Article | null> {
  try {
    const file = path.join(process.cwd(), "src/data/articles.json");
    const json = await fs.readFile(file, "utf-8");
    const articles = JSON.parse(json) as Article[];
    return articles.find((a) => a.slug === slug) ?? null;
  } catch {
    return null;
  }
}
