import type { Article } from "@/types/articles";
import { promises as fs } from "fs";
import path from "path";

// Dzisiejsza data w Polsce (YYYY-MM-DD) — artykuł z późniejszą datą czeka na publikację
const todayInPoland = () =>
  new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Warsaw" });

export const isPublished = (article: Article) =>
  article.date <= todayInPoland();

export async function getArticles(): Promise<Article[]> {
  try {
    const file = path.join(process.cwd(), "src/data/articles.json");
    const json = await fs.readFile(file, "utf-8");
    // Najnowsze na górze — kolejność widoczna na blogu i na stronie głównej
    return (JSON.parse(json) as Article[])
      .filter(isPublished)
      .sort((a, b) => b.date.localeCompare(a.date));
  } catch {
    return [];
  }
}

// Linki do artykułów, które jeszcze się nie ukazały, zamienia na zwykły tekst
export const unlinkUnpublished = (content: string, published: Article[]) => {
  const slugs = new Set(published.map((article) => article.slug));
  return content.replace(
    /<a href="\/blog\/([^"#]+)[^"]*">(.*?)<\/a>/g,
    (link, slug: string, text: string) => (slugs.has(slug) ? link : text)
  );
};
