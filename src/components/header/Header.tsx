"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { headerSlides } from "./data/headerSlides";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { Phone, Calendar, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Import styled components
import {
  SliderHeader,
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
} from "./styles/slide";

// Types
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

// Slider settings
const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  fadeEffect: {
    crossFade: true,
  },
};

// Main Header Component
export default function Header({ isMobile }: HeaderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInitialRender, setIsInitialRender] = useState(true);

  // After component mounts, mark initial render as complete
  useEffect(() => {
    // Use a small timeout to ensure the component has fully rendered
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SliderHeader>
      <Swiper
        {...sliderSettings}
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        pagination={{
          clickable: true,
          el: ".pagination-container",
          bulletClass: "pagination-bullet",
          bulletActiveClass: "pagination-bullet-active",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="medical-slider"
      >
        {headerSlides.map((slide, index) => (
          <SwiperSlide key={index} className="overflow-hidden">
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
          </SwiperSlide>
        ))}

        {/* Custom pagination dots container */}
        <PaginationContainer>
          <PaginationInner>
            <PaginationDots className="pagination-container" />
          </PaginationInner>
        </PaginationContainer>
      </Swiper>

      {/* Medical decorative elements */}
      <TopGradient />
      <BottomGradient />
    </SliderHeader>
  );
}

// Single Slide Component
function HeaderSlide({
  currentIndex,
  img,
  alt,
  title,
  description,
  isMobile,
  isActive,
  isInitialRender,
}: SlideProps) {
  return (
    <SlideWrapper>
      {/* Background Image - disable transition on initial render */}
      <Image
        priority={currentIndex === 0}
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

      {/* Gradient overlay with medical blue tones */}
      <GradientOverlay />


      {/* Slide Content - disable animation on initial render */}
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
              <Link href="tel:+48501408528" passHref legacyBehavior>
                <PrimaryButton>
                  <Calendar />
                  <span>Umów wizytę</span>
                  <ChevronRight />
                </PrimaryButton>
              </Link>

              <Link href="tel:+48501408528" passHref legacyBehavior>
                <SecondaryButton>
                  <Phone />
                  <span>+48 501 408 528</span>
                </SecondaryButton>
              </Link>
            </ButtonsContainer>
          </ContentBox>
        </ContentContainer>
      </SlideContent>
    </SlideWrapper>
  );
}
