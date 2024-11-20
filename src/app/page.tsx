import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
import AboutsUs from "@/components/sections/aboutUs/AboutsUs";

// Dynamic imports
const Offer = dynamic(() => import("@/components/sections/offer/Offer"));
const Team = dynamic(() => import("@/components/sections/team/Team"));
const Articles = dynamic(
  () => import("@/components/sections/articles/Articles")
);
const Reviews = dynamic(() => import("@/components/sections/reviews/Reviews"));

export default function Home() {
  return (
    <>
      <Header />
      <AboutsUs main />
      <AboutsUs reverse />
      <Offer />
      <Team />
      <Reviews />
      <Articles />
    </>
  );
}
