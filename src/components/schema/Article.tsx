// components/ArticleSchema.tsx
import { Article, BreadcrumbList, WithContext } from "schema-dts";

interface ArticleSchemaProps {
  title: string;
  description: string;
  articleSlug: string;
  imageUrl: string;
  authorName: string;
  authorUrl?: string;
  organizationName: string;
  organizationLogo: string;
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  articleSlug,
  imageUrl,
  authorName,
  authorUrl,
  organizationName,
  organizationLogo,
}) => {
  // Full article URL
  const articleUrl = `https://podologjaworze.pl/blog/${articleSlug}`;

  // Article Schema
  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: imageUrl,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: organizationName,
      logo: {
        "@type": "ImageObject",
        url: organizationLogo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://podologjaworze.pl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `https://podologjaworze.pl/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://podologjaworze.pl/${articleSlug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default ArticleSchema;
