import type { PropsWithChildren } from "react";
import OGImage from "@/assets/header/img_one.webp";

export async function generateMetadata() {
  return {
    title: "Artykuły podologiczne - Podolog Jaworze",
    description: "",
    keywords: "",
    alternates: {
      canonical: `https://podologjaworze.pl/blog`,
    },
    publisher: `https://podologjaworze.pl`,
    openGraph: {
      title: "Artykuły podologiczne - Podolog Jaworze",
      description: "",
      url: `https://podologjaworze.pl/blog`,
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
