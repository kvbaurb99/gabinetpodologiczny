import ArticleSchema from "@/components/schema/Article";
import ArticleStyles from "@/global-styles/article/article";
import { getArticle } from "@/server/getArticle";
import { getArticles } from "@/server/getArticles";
import LogoImage from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      <div className="mt-32 flex flex-col xl:grid xl:grid-cols-12 gap-12 w-[90%] xl:w-[80%] mx-auto">
        <article className="col-span-12 xl:col-span-8">
          <Image
            src={article.image}
            width={640}
            height={360}
            priority
            alt={article.title}
            className="w-full rounded-xl shadow-md shadow-black/20 h-[220px] xl:h-[480px] object-cover"
          />
          <h1 className="mt-4 xl:mt-6 text-2xl xl:text-4xl font-bold xl:leading-snug">
            {article.title}
          </h1>
          <div
            data-article-content
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
        <aside className="col-span-12 xl:col-span-4 sticky top-32 h-fit">
          <h4 className="font-semibold text-2xl">
            Przeczytaj pozostałe artykuły
          </h4>
          <div className="flex flex-col gap-4 mt-10">
            {restArticles.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-4 border-b border-gray-200 pb-4 flex-col xl:flex-row"
                >
                  <Link className="min-w-24 max-w-24 h-24" href={`/blog/${item.slug}`}>
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      priority
                      alt={item.title}
                      className="rounded-lg w-full h-full shadow-md object-cover shadow-black/20"
                    />
                  </Link>
                  <div>
                    <Link href={`/blog/${item.slug}`}>
                      <h5 className="font-semibold line-clamp-2">
                        {item.title}
                      </h5>
                    </Link>
                    <p className="text-sm text-gray-500 line-clamp-3">
                      {item.overview}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </>
  );
}
