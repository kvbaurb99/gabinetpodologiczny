import type { Article } from "@/types/articles";

type Props = {
  slug: string;
};

export async function getArticle({ slug }: Props): Promise<Article | null> {
  const res = await fetch(`https://podologjaworze.pl/api/articles/${slug}`);
  if (!res.ok) return null;
  return (await res.json()) as Article;
}
