import { Article } from "@/types/articles";
import { permanentRedirect } from "next/navigation";

export async function getArticles(): Promise<Article[]> {
  const res = await fetch("https://podologjaworze.pl/api/articles");
  if (!res.ok) {
    permanentRedirect("/");
  }
  const articles = await res.json();
  return articles;
}
