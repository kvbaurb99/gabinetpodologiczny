import {
  DefaultContainer,
  H2,
  P,
  SectionWrapper,
} from "@/global-styles/global";
import BackgroundImage from "@/assets/backgrounds/test.jpg";
import Image from "next/image";

export default function Offer() {
  return (
    <section
      className="h-[650px] w-full bg-no-repeat bg-cover mt-12 relative bg-fixed"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-blue-400/60">
        <DefaultContainer className="py-12">
          <H2 $white>Schorzenia stóp którymi się zajmujemy:</H2>
        </DefaultContainer>
      </div>
    </section>
  );
}
