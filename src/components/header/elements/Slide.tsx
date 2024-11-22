import Image, { StaticImageData } from "next/image";
import {
  SlideContainer,
  StyledImage,
  Overlay,
  ContentWrapper,
  TextContent,
  Title,
  Description,
  Button,
} from "../styles/slide";
import PhoneIcon from "@/assets/contactIcons/phone.svg";
import Link from "next/link";

type Props = {
  currentIndex: number;
  img: string | StaticImageData;
  alt: string;
  title?: string;
  description?: string;
  isMobile: boolean;
};

export default function Slide({
  currentIndex,
  img,
  alt,
  title,
  description,
  isMobile,
}: Props) {
  return (
    <SlideContainer>
      <StyledImage
        priority={currentIndex === 0}
        src={img}
        alt={alt}
        width={isMobile ? 360 : 1440}
        height={500}
      />
      <Overlay />
      <ContentWrapper>
        <TextContent>
          <Title>{title || "Profesjonalna opieka podologiczna"}</Title>
          <Description>
            {description ||
              "Zapewniamy kompleksową opiekę nad zdrowiem Twoich stóp, wykorzystując najnowocześniejsze metody i sprzęt medyczny."}
          </Description>
          <div className="flex items-center gap-7 mt-6">
            <Button>Umów wizytę już dziś</Button>
          </div>
        </TextContent>
      </ContentWrapper>
    </SlideContainer>
  );
}
