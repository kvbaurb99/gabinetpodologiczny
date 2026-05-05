import type { Article } from "@/types/articles";

export async function getArticles(): Promise<Article[]> {
  const res = await fetch("https://podologjaworze.pl/api/articles");
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  return (await res.json()) as Article[];
}
