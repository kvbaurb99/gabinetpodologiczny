import React from "react";
import { Article } from "@/types/articles";
import ArticleCard from "@/components/blog/card/ArticleCard";

type Props = {
  articles: Article[];
  lazy?: boolean;
};

export default function BlogSection({ articles, lazy }: Props) {
  return (
    <section
      id="blog"
      className="w-[90%] md:w-[80%] mx-auto mt-10 md:mt-16"
    >
      <h2 className="relative inline-block mb-8 font-bold text-[#007BA7] text-[1.55rem] md:text-[2.125rem]">
        Artykuły podologiczne
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            slug={article.slug}
            lazy={lazy}
            category={article.category}
            category_slug={article.category_slug}
            alt={article.title}
            img={article.image}
            date={article.date}
            description={article.overview}
          />
        ))}
      </div>
    </section>
  );
}
