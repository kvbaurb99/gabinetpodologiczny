import { SectionWrapper } from "@/global-styles/global";
import { MainTitle, SectionTitle } from "@/components/sections/reviews/style/reviews";
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
    <>
      <SectionWrapper>
        <MainTitle>Kategoria {category?.name}</MainTitle>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
          {filteredArticles.map((article, i) => {
            return (
              <ArticleCard
                key={i}
                title={article.title}
                category={article.category}
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
      </SectionWrapper>
    </>
  );
}
