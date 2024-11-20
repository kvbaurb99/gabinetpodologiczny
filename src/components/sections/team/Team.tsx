import { H2, P, SectionWrapper } from "@/global-styles/global";
import ImageOne from "@/assets/sections/aboutUs/about_us.png";
import ImageTwo from "@/assets/sections/aboutUs/about_us_2.jpg";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Wiktoria Cięciara",
    role: "Podolog",
    description:
      "Specjalistka z 5-letnim doświadczeniem w dziedzinie podologii. Absolwentka Uniwersytetu Medycznego, gdzie zdobyła gruntowną wiedzę z zakresu schorzeń stóp. Regularnie poszerza swoje kompetencje na międzynarodowych szkoleniach i konferencjach.",
    image: ImageOne,
    alt: "Wiktoria - Podolog",
  },
  {
    id: 2,
    name: "Jolanta Cięciara",
    role: "Podolog",
    description:
      "Ekspertka w dziedzinie podologii z 8-letnim stażem. Specjalizuje się w kompleksowym leczeniu schorzeń stóp oraz profilaktyce przeciwgrzybiczej. Prowadzi również konsultacje dla pacjentów z cukrzycą.",
    image: ImageTwo,
    alt: "Jola - Podolog",
  },
];

export default function Team() {
  return (
    <SectionWrapper>
      <H2> Oto nasz zespół:</H2>
    </SectionWrapper>
  );
}
