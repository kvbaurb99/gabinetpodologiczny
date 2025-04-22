import { Article } from "@/types/articles";
import { permanentRedirect } from "next/navigation";

type Props = {
  slug: string;
};

export async function getArticle({ slug }: Props): Promise<Article> {
  const res = await fetch(`https://podologjaworze.pl/api/articles/${slug}`);
  if (!res.ok) {
    permanentRedirect("/blog");
  }
  const articles = await res.json();
  return articles;
}
