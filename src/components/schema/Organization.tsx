"use client";
import { MedicalBusiness, MedicalProcedure, WithContext } from "schema-dts";
import BackgroudImage from "@/assets/header/img_one.webp";
export default function JsonLdSchema() {
  // Default Business Schema Data for a Podiatry Clinic
  const businessSchema: WithContext<MedicalBusiness> = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.example-podiatry-clinic.com/#business",
    name: "Gabinet Podologiczny Zdrowe Stopy",
    description:
      "Specjalistyczny gabinet podologiczny oferujący kompleksowe usługi z zakresu leczenia i pielęgnacji stóp.",
    url: "https://podologjaworze.pl/",
    telephone: "+48 501 408 528",
    image: BackgroudImage.src,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "10:00",
        closes: "17:00",
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
  };

  // Default Medical Schema Data for Podiatry Procedures
  const medicalSchema: WithContext<MedicalProcedure> = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": "https://www.example-podiatry-clinic.com/#medical",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalSchema),
        }}
      />
    </>
  );
}
