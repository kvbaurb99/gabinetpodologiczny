import { DefaultContainer, H2 } from "@/global-styles/global";
import { offer } from "./data/offer";
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
    <StyledSection $bgImage={BackgroundImage.src} id="offer">
      <Overlay>
        <DefaultContainer className="py-12">
          <H2 $white>Schorzenia stóp którymi się zajmujemy:</H2>
          <CardsGrid>
            {offer.map((item, index) => (
              <CardWrapper key={index}>
                <CardInner>
                  <CardFront>
                    <StyledImage
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={140}
                      height={160}
                    />
                    <CardTitle>{item.title}</CardTitle>
                    <span
                      style={{ color: "#007BA7", fontWeight: 500 }}
                      className="relative bottom-6"
                    >
                      Dowiedz się więcej
                    </span>
                  </CardFront>
                  <CardBack>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.overview}</CardDescription>
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
