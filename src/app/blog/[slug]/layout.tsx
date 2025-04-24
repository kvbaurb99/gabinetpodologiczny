import type { PropsWithChildren } from "react";
import { getArticle } from "@/server/getArticle";

type Props = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Props }) {
  const { slug } = await params;
  const article = await getArticle({ slug });

  return {
    title: article.title,
    description: article.overview,
    keywords: "",
    alternates: {
      canonical: `https://podologjaworze.pl/blog/${article.slug}`,
    },
    publisher: `https://podologjaworze.pl`,
    openGraph: {
      title: article.title,
      description: article.overview,
      url: `https://podologjaworze.pl/blog/${article.slug}`,
      siteName: "Podolog Jaworze",
      images: [
        {
          url: article.image,
          width: 800,
          height: 600,
        },
      ],
      locale: "pl-PL",
      type: "article",
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}
