import ArticleCard from "@/components/blog/card/ArticleCard";
import TestImage from "@/assets/header/img_one.webp";
import { getArticles } from "@/server/getArticles";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const articles = await getArticles();
  return (
    <section className="w-[90%] md:w-[80%] mx-auto mt-10 md:mt-16">
      <h1 className="relative inline-block mb-8 font-bold text-[#007BA7] text-[1.55rem] md:text-[2.125rem]">
        Artykuły podologiczne
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        {articles.map((article, i) => {
          return (
            <ArticleCard
              key={i}
              title={article.title}
              priority
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
    </section>
  );
}
