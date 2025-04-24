import ArticleCard from "@/components/blog/card/ArticleCard";
import { SectionWrapper } from "@/global-styles/global";
import TestImage from "@/assets/header/img_one.webp";
import { getArticles } from "@/server/getArticles";
import { SectionTitle } from "@/components/sections/reviews/style/reviews";

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const articles = await getArticles();
  return (
    <>
      <SectionWrapper>
        <SectionTitle>Artykuły podologiczne</SectionTitle>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
          {articles.map((article, i) => {
            return (
              <ArticleCard
                key={i}
                title={article.title}
                category={article.category}
                category_slug={article.category_slug}
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
