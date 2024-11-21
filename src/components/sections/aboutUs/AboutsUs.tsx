import { Button, P, SectionWrapper } from "@/global-styles/global";
import about_src from "@/assets/backgrounds/clinic.webp";
import about_src_2 from "@/assets/backgrounds/Office_Rm_1111.webp";
import {
  AboutContainer,
  AboutImage,
  AboutTitle,
  AboutTitleH2,
  Figure,
} from "./style/aboutUs";
import Link from "next/link";

type Props = {
  main?: boolean;
  reverse?: boolean;
  title: string;
  description: string;
};

export default function AboutsUs({ reverse, main, title, description }: Props) {
  return (
    <SectionWrapper>
      <AboutContainer $reverse={reverse}>
        <div className="w-1/2">
          {!main ? (
            <AboutTitleH2>{title}</AboutTitleH2>
          ) : (
            <AboutTitle>{title}</AboutTitle>
          )}
          <P>{description}</P>
          <Link href={!reverse ? "/o-nas" : "/kontakt"}>
            <Button>Dowiedz się więcej</Button>
          </Link>
        </div>
        <Figure>
          <AboutImage
            priority={!reverse}
            width={360}
            height={360}
            src={!reverse ? about_src : about_src_2}
            alt="Gabinet zdrowe stopy"
            title="Gabinet zdrowe stopy"
          />
        </Figure>
      </AboutContainer>
    </SectionWrapper>
  );
}
