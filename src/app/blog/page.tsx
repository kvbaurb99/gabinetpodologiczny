import Mask from "@/components/multi/Mask";
import AboutsUs from "@/components/sections/aboutUs/AboutsUs";
import Articles from "@/components/sections/articles/Articles";
import Reviews from "@/components/sections/reviews/Reviews";

export default function BlogPage() {
  return (
    <>
      <Mask title="Artykuły i Wskazówki Podologiczne" />
      <Articles withoutTitle />
      <AboutsUs
        main
        title="Zdrowe Stopy - Kompleksowa Pielęgnacja Stóp"
        description="Poszukujesz sprawdzonego gabinetu podologicznego, gdzie Twoje stopy otrzymają fachową opiekę? Oferujemy kompleksowe usługi w zakresie diagnostyki i leczenia schorzeń stóp. Specjalizujemy się w usuwaniu odcisków, modzeli oraz problemów z wrastającymi paznokciami."
      />
      <AboutsUs
        reverse
        title="Profilaktyka i Leczenie Stóp - Sprawdzone Metody Podologiczne"
        description="Zdrowe stopy to podstawa komfortowego życia, dlatego tak ważna jest
            ich odpowiednia pielęgnacja i profilaktyka. W naszym gabinecie
            podologicznym oferujemy nie tylko profesjonalne zabiegi, ale również
            fachowe porady dotyczące codziennej pielęgnacji stóp."
      />
      <Reviews />
    </>
  );
}
