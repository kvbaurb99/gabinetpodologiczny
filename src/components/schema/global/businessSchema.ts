import type { WithContext, MedicalBusiness, MedicalProcedure } from "schema-dts";
import BackgroudImage from "@/assets/backgrounds/new_1.webp";

const SITE = "https://podologjaworze.pl";

export const businessSchema: WithContext<MedicalBusiness> = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE}/#business`,
  name: "Gabinet Podologiczny Zdrowe Stopy",
  description:
    "Specjalistyczny gabinet podologiczny oferujący kompleksowe usługi z zakresu leczenia i pielęgnacji stóp.",
  url: `${SITE}/`,
  telephone: "+48 501 408 528",
  image: `${SITE}${BackgroudImage.src}`,
  priceRange: "$$",
  hasMap: "https://maps.google.com/?cid=&q=ul.+Zdrojowa+78,+43-384+Jaworze",
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
    postalCode: "43-384",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.795859234092916,
    longitude: 18.947077466267235,
  },
  areaServed: [
    { "@type": "City", name: "Jaworze" },
    { "@type": "City", name: "Bielsko-Biała" },
    { "@type": "City", name: "Cieszyn" },
    { "@type": "City", name: "Skoczów" },
  ],
};

// Default Medical Schema Data for Podiatry Procedures
export const medicalSchema: WithContext<MedicalProcedure> = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": `${SITE}/#service`,
  name: "Usługi Podologiczne",
  description:
    "Profesjonalne zabiegi podologiczne wykonywane przez certyfikowanych specjalistów.",
  relevantSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Podiatry",
  },
  preparation: [
    "Konsultacja wstępna",
    "Ocena stanu zdrowia stóp",
    "Omówienie planu leczenia",
  ],
  status: "http://schema.org/ActiveActionStatus",
  howPerformed:
    "Zabiegi wykonywane są przy użyciu profesjonalnego sprzętu medycznego w sterylnych warunkach.",
  bodyLocation: "Stopy i paznokcie",
};
