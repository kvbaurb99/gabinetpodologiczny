import Mask from "@/components/multi/Mask";
import AboutsUs from "@/components/sections/aboutUs/AboutsUs";

export default function AboutUsPage() {
  return (
    <>
      <Mask title="Dowiedz się o nas więcej" />
      <AboutsUs
        title="Gabinet Podologiczny Zdrowe Stopy - Twój Specjalista od Pielęgnacji Stóp"
        description="Witaj w gabinecie podologicznym Zdrowe Stopy, gdzie profesjonalizm łączy się z indywidualnym podejściem do każdego pacjenta. Nasz zespół doświadczonych podologów specjalizuje się w kompleksowej diagnostyce i leczeniu wszelkich dolegliwości stóp. Oferujemy szeroki zakres zabiegów, od podstawowej pielęgnacji po specjalistyczne procedury medyczne. "
      />
      <AboutsUs
        reverse
        title="Profesjonalne Zabiegi Podologiczne w Gabinecie Zdrowe Stopy"
        description="Poszukujesz skutecznego rozwiązania problemów z stopami? Gabinet podologiczny Zdrowe Stopy to miejsce, gdzie każdy pacjent otrzymuje kompleksową opiekę i indywidualnie dobrany plan terapii. Specjalizujemy się w leczeniu wrastających paznokci, usuwaniu odcisków i modzeli oraz profesjonalnej pielęgnacji stóp diabetycznych. "
      />
    </>
  );
}
