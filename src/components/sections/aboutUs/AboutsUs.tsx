import { P, SectionWrapper } from "@/global-styles/global";
import Image from "next/image";
import about_src from "@/assets/sections/aboutUs/about_us.png";
import { AboutContainer, AboutImage, AboutTitle } from "./style/aboutUs";

export default function AboutsUs() {
  return (
    <SectionWrapper>
      <AboutContainer>
        <div>
          <AboutTitle>Gabinet podologiczny Zdrowe Stopy</AboutTitle>
          <P>
            Szukasz profesjonalnej pomocy? Zmagasz się z nieprzyjemnymi
            dolegliwościami podologicznymi? Jesteś w dobrym miejscu.{" "}
          </P>
        </div>
        <AboutImage src={about_src} alt="image" />
      </AboutContainer>
    </SectionWrapper>
  );
}
