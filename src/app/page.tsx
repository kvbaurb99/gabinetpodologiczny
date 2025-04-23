import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
import { mobileDetectFunction } from "@/utils/mobileDetectFunction";
import AboutsUs from "@/components/sections/aboutUs/AboutsUs";
import Reviews from "@/components/sections/reviews/Reviews";
import BlogSection from "@/components/sections/blog/BlogSection";
import { getArticles } from "@/server/getArticles";
import Location from "@/components/sections/location/Location";
const Offer = dynamic(() => import("@/components/sections/offer/Offer"));
const Team = dynamic(() => import("@/components/sections/team/Team"));

export default async function Home() {
  const isMobile = await mobileDetectFunction();
  const articles = await getArticles();
  const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

  return (
    <>
      <Header isMobile={isMobile} />
      <AboutsUs
        main
        title="Gabinet Podologiczny Zdrowe Stopy - Twój Specjalista od Pielęgnacji Stóp"
        description="Witaj w gabinecie podologicznym Zdrowe Stopy, gdzie profesjonalizm łączy się z indywidualnym podejściem do każdego pacjenta. Specjalizujemy się w kompleksowej diagnostyce i leczeniu wszelkich dolegliwości stóp. Oferujemy szeroki zakres zabiegów, od podstawowej pielęgnacji po specjalistyczne procedury medyczne. "
      />
      <AboutsUs
        reverse
        title="Profesjonalne Zabiegi Podologiczne w Gabinecie Zdrowe Stopy"
        description="Poszukujesz skutecznego rozwiązania problemów z stopami? Gabinet podologiczny Zdrowe Stopy to miejsce, gdzie każdy pacjent otrzymuje kompleksową opiekę i indywidualnie dobrany plan terapii. Specjalizujemy się w leczeniu wrastających paznokci, usuwaniu odcisków i modzeli oraz profesjonalnej pielęgnacji stóp diabetycznych. "
      />
      <Offer isMobile={isMobile} />
      <Team />
      <Reviews />
      <Location api={String(mapsApiKey)} />
      <BlogSection articles={articles.slice(0, 3)} />
    </>
  );
}
