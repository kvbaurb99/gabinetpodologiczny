import { H2, SectionWrapper } from "@/global-styles/global";
import articles from "@/data/articles.json";
import TestImage from "@/assets/header/img_one.jpg";
import Image from "next/image";
import {
  ArticlesGrid,
  ArticleCard,
  ImageWrapper,
  ContentWrapper,
  ArticleTitle,
  ArticleDescription,
  ReadMoreButton,
} from "../../blog/style/article";
import Link from "next/link";

export default function Articles() {
  return (
    <SectionWrapper>
      <H2>Artykuły i Wskazówki Podologiczne</H2>
      <ArticlesGrid>
        {articles.map((article, index) => (
          <ArticleCard key={index}>
            <Link href={`/blog/${article.slug}`}>
              <ImageWrapper>
                <Image
                  src={TestImage}
                  alt={article.title}
                  width={360}
                  height={360}
                  loading="lazy"
                />
              </ImageWrapper>
            </Link>
            <ContentWrapper>
              <Link href={`/blog/${article.slug}`}>
                <ArticleTitle>{article.title}</ArticleTitle>
              </Link>
              <ArticleDescription>{article.content}</ArticleDescription>
              <Link href={`/blog/${article.slug}`}>
                <ReadMoreButton>Czytaj więcej</ReadMoreButton>
              </Link>
            </ContentWrapper>
          </ArticleCard>
        ))}
      </ArticlesGrid>
    </SectionWrapper>
  );
}
