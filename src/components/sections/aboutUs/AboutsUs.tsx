import { Button, P, SectionWrapper } from "@/global-styles/global";
import about_src from "@/assets/backgrounds/clinic.webp";
import about_src_2 from "@/assets/backgrounds/Office_Rm_1111.webp";
import Link from "next/link";
import {
  AboutContainer,
  ContentContainer,
  Figure,
  AboutImage,
  AboutTitle,
  AboutTitleH2,
  StyledDescription,
  StyledButton
} from "./style/aboutUs";

type Props = {
  main?: boolean;
  reverse?: boolean;
  title: string;
  description: string;
};

export default function AboutUs({ reverse, main, title, description }: Props) {
  return (
    <SectionWrapper>
      <AboutContainer $reverse={reverse}>
        <ContentContainer>
          {!main ? (
            <AboutTitleH2>{title}</AboutTitleH2>
          ) : (
            <AboutTitle>{title}</AboutTitle>
          )}
          <StyledDescription>{description}</StyledDescription>
          <Link href={!reverse ? "/o-nas" : "/kontakt"}>
            <StyledButton>Dowiedz się więcej</StyledButton>
          </Link>
        </ContentContainer>
        <Figure>
          <AboutImage
            priority={!reverse}
            width={600}
            height={400}
            src={!reverse ? about_src : about_src_2}
            alt="Gabinet zdrowe stopy"
            title="Gabinet zdrowe stopy"
          />
        </Figure>
      </AboutContainer>
    </SectionWrapper>
  );
}