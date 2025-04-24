import type { PropsWithChildren } from "react";
import OGImage from "@/assets/header/img_one.webp";

export async function generateMetadata() {
  return {
    title: "Kategorie artykułów podologicznych - Zdrowe Stopy Podolog Jaworze",
    description: "",
    keywords: "",
    alternates: {
      canonical: `https://podologjaworze.pl/kategorie`,
    },
    publisher: `https://podologjaworze.pl`,
    openGraph: {
      title: "Kategorie artykułów podologicznych",
      description: "",
      url: `https://podologjaworze.pl/kategorie`,
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
