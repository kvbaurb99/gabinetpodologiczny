import type { PropsWithChildren } from "react";
import OGImage from "@/assets/header/img_one.webp";
import { getCategories } from "@/server/getCategories";

type Props = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Props }) {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((item) => item.slug === slug);
  return {
    title: `Kategoria ${category?.name} - Zdrowe Stopy Podolog Jaworze`,
    description: "",
    keywords: "",
    alternates: {
      canonical: `https://podologjaworze.pl/kategorie/${slug}`,
    },
    publisher: `https://podologjaworze.pl`,
    openGraph: {
      title: `Kategoria ${category?.name} - Zdrowe Stopy Podolog Jaworze`,
      description: "",
      url: `https://podologjaworze.pl/kategorie/${slug}`,
      siteName: "Podolog Jaworze",
      images: [
        {
          url: OGImage.src,
          width: 800,
          height: 600,
        },
      ],
      locale: "pl-PL",
      type: "website",
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}
