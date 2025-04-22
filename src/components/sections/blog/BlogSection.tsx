import { SectionWrapper } from "@/global-styles/global";
import React from "react";
import { SectionTitle } from "../reviews/style/reviews";
import { Article } from "@/types/articles";
import ArticleCard from "@/components/blog/card/ArticleCard";

type Props = {
  articles: Article[];
};

export default function BlogSection({ articles }: Props) {
  return (
    <SectionWrapper id="blog">
      <SectionTitle>Artykuły podologiczne</SectionTitle>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            slug={article.slug}
            category={article.category}
            alt={article.title}
            img={article.image}
            date={article.date}
            description={article.overview}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
