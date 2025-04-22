import ArticleCard from "@/components/blog/card/ArticleCard";
import { SectionWrapper } from "@/global-styles/global";
import TestImage from "@/assets/header/img_one.webp";
import { getArticles } from "@/server/getArticles";

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const articles = await getArticles();
  return (
    <>
      <SectionWrapper>
        <h1 className="mt-36 font-bold text-2xl xl:text-3xl">
          Artykuły podologiczne
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-10">
          {articles.map((article, i) => {
            return (
              <ArticleCard
                key={i}
                title={article.title}
                category={article.category}
                description={article.overview}
                date="12.12.2023"
                alt="test"
                img={article.image || TestImage}
                slug={article.slug}
              />
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
