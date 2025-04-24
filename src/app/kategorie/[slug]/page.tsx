import { SectionWrapper } from "@/global-styles/global";
import { SectionTitle } from "@/components/sections/reviews/style/reviews";
import { getCategories } from "@/server/getCategories";
import { getArticles } from "@/server/getArticles";
import ArticleCard from "@/components/blog/card/ArticleCard";

export const dynamic = "force-dynamic";

type CategoryParams = {
  params: {
    slug: string;
  };
};

export default async function CategoryPageSingle({ params }: CategoryParams) {
  const { slug } = params;

  const [categories, articles] = await Promise.all([
    getCategories(),
    getArticles(),
  ]);

  const category = categories.find((item) => item.slug === slug);
  const filteredArticles = articles.filter(
    (item) => item.category === category?.name
  );

  return (
    <SectionWrapper>
      <SectionTitle>Kategoria {category?.name}</SectionTitle>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        {filteredArticles.map((article) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            category={article.category}
            category_slug={article.category_slug}
            description={article.overview}
            date="12.12.2023"
            alt="test"
            img={article.image}
            slug={article.slug}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
