"use client";

import { useState, useEffect, useRef } from "react";
import { headerSlides } from "./data/headerSlides";
import { Phone, Calendar, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import {
  SliderHeader,
  SliderTrack,
  SlideWrapper,
  GradientOverlay,
  SlideContent,
  ContentContainer,
  ContentBox,
  Divider,
  SlideTitle,
  SlideDescription,
  ButtonsContainer,
  PrimaryButton,
  SecondaryButton,
  TopGradient,
  BottomGradient,
  PaginationContainer,
  PaginationInner,
  PaginationDots,
  PaginationBullet,
} from "./styles/slide";

type HeaderProps = {
  isMobile: boolean;
};

type SlideProps = {
  currentIndex: number;
  img: string | StaticImageData;
  alt: string;
  title?: string;
  description?: string;
  isMobile: boolean;
  isActive: boolean;
  isInitialRender: boolean;
};

const AUTOPLAY_DELAY = 5000;

export default function Header({ isMobile }: HeaderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const autoplayStoppedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (autoplayStoppedRef.current) return;
      setActiveIndex((prev) => (prev + 1) % headerSlides.length);
    }, AUTOPLAY_DELAY);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (index: number) => {
    autoplayStoppedRef.current = true;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setActiveIndex(index);
  };

  return (
    <SliderHeader>
      <SliderTrack>
        {headerSlides.map((slide, index) => (
          <SlideWrapper key={index} $isActive={activeIndex === index}>
            <HeaderSlide
              currentIndex={index}
              img={slide.src}
              alt={slide.alt}
              title={slide.title}
              description={slide.description}
              isMobile={isMobile}
              isActive={activeIndex === index}
              isInitialRender={isInitialRender}
            />
          </SlideWrapper>
        ))}

        <PaginationContainer>
          <PaginationInner>
            <PaginationDots>
              {headerSlides.map((_, index) => (
                <PaginationBullet
                  key={index}
                  type="button"
                  $isActive={activeIndex === index}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Pokaż slajd ${index + 1}`}
                />
              ))}
            </PaginationDots>
          </PaginationInner>
        </PaginationContainer>
      </SliderTrack>

      <TopGradient />
      <BottomGradient />
    </SliderHeader>
  );
}

function HeaderSlide({
  currentIndex,
  img,
  alt,
  title,
  description,
  isActive,
  isInitialRender,
}: SlideProps) {
  return (
    <>
      <Image
        priority={currentIndex === 0}
        fetchPriority={currentIndex === 0 ? "high" : "low"}
        src={img}
        alt={alt}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          transition: !isInitialRender ? "transform 7000ms" : "none",
          transform: !isInitialRender && isActive ? "scale(1.05)" : "scale(1)",
        }}
      />

      <GradientOverlay />

      <SlideContent>
        <ContentContainer>
          <ContentBox $isActive={isActive} $isInitialRender={isInitialRender}>
            <Divider />

            <SlideTitle>
              {title || "Profesjonalna opieka podologiczna"}
            </SlideTitle>

            <SlideDescription>
              {description ||
                "Zapewniamy kompleksową opiekę nad zdrowiem Twoich stóp, wykorzystując najnowocześniejsze metody i sprzęt medyczny."}
            </SlideDescription>

            <ButtonsContainer>
              <Link href="tel:+48501408528" passHref>
                <PrimaryButton>
                  <Calendar />
                  <span>Umów wizytę</span>
                  <ChevronRight />
                </PrimaryButton>
              </Link>

              <Link href="tel:+48501408528" passHref>
                <SecondaryButton>
                  <Phone />
                  <span>+48 501 408 528</span>
                </SecondaryButton>
              </Link>
            </ButtonsContainer>
          </ContentBox>
        </ContentContainer>
      </SlideContent>
    </>
  );
}
