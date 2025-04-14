import { Metadata } from "next";
import OGImage from "@/assets/header/img_one.webp";

export const metadata: Metadata = {
  title: "Zdrowe Stopy Jaworze | Profesjonalna Pielęgnacja Stóp",
  description:
    "Specjalistyczny gabinet podologiczny w Jaworzu. Oferujemy kompleksową pielęgnację stóp, leczenie grzybicy, wrastających paznokci oraz usuwanie odcisków. Umów wizytę już dziś!",
  keywords:
    "podolog Jaworze, Zdrowe stopy Jaworze, gabinet podologiczny Jaworze, podologia Jaworze, pielęgnacja stóp Jaworze, leczenie stóp, ulica Zdrojowa, wrastające paznokcie, odciski, modzele, grzybica paznokci, pedicure leczniczy, halluksy, płaskostopie, opieka podologiczna, stopy cukrzycowe, diagnostyka stóp, wkładki ortopedyczne, usuwanie odcisków, problemy stóp, profesjonalna podologia, podolog województwo śląskie, Zdrowe stopy, podolog Bielsko-Biała okolice",
  publisher: "https://podologjaworze.pl",
  authors: {
    name: "https://podojaworze.pl",
  },
  alternates: {
    canonical: "https://podologjaworze.pl",
  },
  openGraph: {
    url: "https://podojaworze.pl",
    title: "Zdrowe Stopy Jaworze | Profesjonalna Pielęgnacja Stóp",
    siteName: "Zdrowe Stopy Jaworze",
    images: [
      {
        url: OGImage.src,
        width: 1200,
        height: 630,
        alt: "Zdrowe Stopy Jaworze | Profesjonalna Pielęgnacja Stóp",
      },
    ],
    description:
      "Specjalistyczny gabinet podologiczny z Jaworza. Oferujemy kompleksową pielęgnację stóp, leczenie grzybicy, wrastających paznokci oraz usuwanie odcisków. Umów wizytę już dziś!",
  },
  robots: {
    index: false,
    follow: false,
  },
};
