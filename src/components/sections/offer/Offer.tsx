import {
  DefaultContainer,
  H2,
  P,
  SectionWrapper,
} from "@/global-styles/global";
import BackgroundImage from "@/assets/backgrounds/csm_2024_Podiatry_Header_1920_900px_cf1ef4ccad.webp";

export default function Offer() {
  return (
    <section
      className="h-[650px] w-full bg-no-repeat bg-cover mt-12 relative bg-fixed"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500/60 backdrop-blur-sm">
        <DefaultContainer className="py-12">
          <H2 $white>Schorzenia stóp którymi się zajmujemy:</H2>
          <P>Do dokończenia (potrzeba zdjęć i szczegółów oferty)</P>
        </DefaultContainer>
      </div>
    </section>
  );
}
