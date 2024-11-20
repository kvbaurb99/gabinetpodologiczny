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

type Props = {
  main?: boolean;
  reverse?: boolean;
};

export default function AboutsUs({ reverse, main }: Props) {
  return (
    <SectionWrapper>
      <AboutContainer $reverse={reverse}>
        <div className="w-1/2">
          {!main ? (
            <AboutTitleH2>
              {reverse ? "Przejście 2" : "Przejście 1"}
            </AboutTitleH2>
          ) : (
            <AboutTitle>
              {reverse ? "Przejście 2" : "Gabinet podologiczny"}
            </AboutTitle>
          )}
          <P>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </P>
          <Button>Dowiedz się więcej</Button>
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
