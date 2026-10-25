import type { WithContext, MedicalBusiness, Place } from "schema-dts";
import BackgroudImage from "@/assets/backgrounds/new_1.webp";
import { services } from "@/data/services";

const SITE = "https://podologjaworze.pl";

export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100081916855170";

// Profile zewnętrzne (wizytówka Google, Booksy, ZnanyLekarz) — dopisywać pełne URL-e
const SAME_AS: string[] = [FACEBOOK_URL];

export const areaServed: Place[] = [
  { "@type": "City", name: "Jaworze" },
  { "@type": "City", name: "Bielsko-Biała" },
  { "@type": "City", name: "Jasienica" },
  { "@type": "City", name: "Skoczów" },
  { "@type": "City", name: "Cieszyn" },
  { "@type": "City", name: "Czechowice-Dziedzice" },
];

export const businessSchema: WithContext<MedicalBusiness> = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE}/#business`,
  name: "Gabinet Podologiczny Zdrowe Stopy",
  alternateName: "Zdrowe Stopy Jaworze",
  description:
    "Gabinet podologiczny w Jaworzu koło Bielska-Białej. Leczenie wrastających paznokci, grzybicy paznokci, odcisków, modzeli, brodawek wirusowych, pękających pięt oraz opieka nad stopą cukrzycową.",
  medicalSpecialty: "https://schema.org/Podiatric",
  url: `${SITE}/`,
  telephone: "+48 501 408 528",
  logo: {
    "@type": "ImageObject",
    url: `${SITE}/favicon.png`,
    width: { "@type": "QuantitativeValue", value: 478 },
    height: { "@type": "QuantitativeValue", value: 479 },
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+48 501 408 528",
      contactType: "customer service",
      availableLanguage: "Polish",
    },
    {
      "@type": "ContactPoint",
      telephone: "+48 509 614 723",
      contactType: "customer service",
      availableLanguage: "Polish",
    },
  ],
  image: `${SITE}${BackgroudImage.src}`,
  priceRange: "$$",
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Gabinet+Podologiczny+Zdrowe+Stopy+Zdrojowa+78+Jaworze",
  ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
      ],
      opens: "08:40",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["https://schema.org/Friday"],
      opens: "08:40",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["https://schema.org/Saturday", "https://schema.org/Sunday"],
      closes: "00:00",
      opens: "00:00",
      description: "Zamknięte",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Zdrojowa 78",
    addressLocality: "Jaworze",
    addressRegion: "śląskie",
    postalCode: "43-384",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.795859234092916,
    longitude: 18.947077466267235,
  },
  areaServed,
  employee: [
    {
      "@type": "Person",
      name: "Jolanta Cięciara",
      jobTitle: "Dyplomowana podolożka",
      url: `${SITE}/o-nas`,
    },
    {
      "@type": "Person",
      name: "Wiktoria Cięciara",
      jobTitle: "Podolożka, kosmetolog",
      url: `${SITE}/o-nas`,
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Zabiegi podologiczne",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${SITE}/${service.slug}#service`,
        name: service.name,
        url: `${SITE}/${service.slug}`,
      },
    })),
  },
};
