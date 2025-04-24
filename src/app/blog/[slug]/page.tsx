import ArticleSchema from "@/components/schema/article/Article";
import ArticleStyles from "@/global-styles/article/article";
import { getArticle } from "@/server/getArticle";
import { getArticles } from "@/server/getArticles";
import LogoImage from "@/assets/logo.svg";
import Sidebar from "@/components/articleSingle/sidebar/Sidebar";
import ArticleSingle from "@/components/articleSingle/ArticleSingle";

type Props = Promise<{ slug: string }>;

export const dynamic = "force-dynamic";

export default async function BlogPageSingle({ params }: { params: Props }) {
  const { slug } = await params;
  const article = await getArticle({
    slug,
  });
  const articles = await getArticles();
  const restArticles = articles.filter((item) => item.slug !== slug);
  return (
    <>
      <ArticleSchema
        title={article.title}
        description={article.overview}
        articleSlug={article.slug}
        imageUrl={article.image}
        authorName="Gabinet Podologiczny Jaworze"
        organizationName="Gabinet Podologiczny Jaworze"
        organizationLogo={LogoImage.src}
      />
      <ArticleStyles />
      <div className="mt-6 xl:mt-16 flex flex-col xl:grid xl:grid-cols-12 gap-12 w-[90%] xl:w-[80%] mx-auto">
        <ArticleSingle
          title={article.title}
          category={article.category}
          category_slug={article.category_slug}
          image={article.image}
          content={article.content}
        />
        <Sidebar restArticles={restArticles} />
      </div>
    </>
  );
}
