import {
  DefaultContainer,
  H2,
} from "@/global-styles/global";
import { offer } from "./data/offer";
import OfferImage from "@/assets/sections/offer/poladolog-ikonka-1.png";
import BackgroundImage from "@/assets/backgrounds/csm_2024_Podiatry_Header_1920_900px_cf1ef4ccad.webp";
import {
  CardBack,
  CardDescription,
  CardFront,
  CardInner,
  CardsGrid,
  CardTitle,
  CardWrapper,
  Overlay,
  StyledImage,
  StyledSection,
} from "./style/offer";

export default function Offer() {
  return (
    <StyledSection $bgImage={BackgroundImage.src}>
      <Overlay>
        <DefaultContainer className="py-12">
          <H2 $white>Schorzenia stóp którymi się zajmujemy:</H2>
          <CardsGrid>
            {offer.map((item, index) => (
              <CardWrapper key={index}>
                <CardInner>
                  <CardFront>
                    <StyledImage
                      src={OfferImage}
                      alt="Podolog"
                      width={150}
                      height={160}
                    />
                    <CardTitle>{item.title}</CardTitle>
                  </CardFront>
                  <CardBack>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>
                      Poszukujesz skutecznego rozwiązania problemów z stopami?
                      Gabinet podologiczny Zdrowe Stopy to miejsce, gdzie każdy
                      pacjent otrzymuje kompleksową opiekę i indywidualnie
                      dobrany plan terapii.
                    </CardDescription>
                  </CardBack>
                </CardInner>
              </CardWrapper>
            ))}
          </CardsGrid>
        </DefaultContainer>
      </Overlay>
    </StyledSection>
  );
}
