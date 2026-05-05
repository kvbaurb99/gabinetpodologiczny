import { getCategories } from "@/server/getCategories";
import { getArticles } from "@/server/getArticles";
import ArticleCard from "@/components/blog/card/ArticleCard";

export const dynamic = "force-dynamic";

type Props = Promise<{ slug: string }>;

export default async function CategoryPageSingle({
  params,
}: {
  params: Props;
}) {
  const { slug } = await params;
  const categories = await getCategories();
  const articles = await getArticles();
  const category = categories.find((item) => item.slug === slug);
  const filteredArticles = articles.filter(
    (item) => item.category === category?.name
  );
  return (
    <section className="w-[90%] md:w-[80%] mx-auto mt-10 md:mt-16">
      <h1 className="relative inline-block mb-8 font-bold text-[#007BA7] text-[1.55rem] md:text-[2.125rem]">
        Kategoria {category?.name}
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        {filteredArticles.map((article, i) => {
          return (
            <ArticleCard
              key={i}
              title={article.title}
              category={article.category}
              priority
              description={article.overview}
              category_slug={article.category_slug}
              date="12.12.2023"
              alt="test"
              img={article.image}
              slug={article.slug}
            />
          );
        })}
      </div>
    </section>
  );
}
