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
};

export default function Slide({
  currentIndex,
  img,
  alt,
  title,
  description,
}: Props) {
  return (
    <SlideContainer>
      <StyledImage
        priority={currentIndex === 0}
        src={img}
        alt={alt}
        width={1440}
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
            <div className=" items-center rounded gap-5 hidden">
              <Image
                src={PhoneIcon}
                priority
                alt="Telefon"
                width={22}
                height={22}
              />
              <Link
                href="tel:+48501408528"
                className="flex flex-col gap-0.5 font-medium"
              >
                <span>Zadzwoń</span>
                <p>+48 501 408 528</p>
              </Link>
            </div>
          </div>
        </TextContent>
      </ContentWrapper>
    </SlideContainer>
  );
}
