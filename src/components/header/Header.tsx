"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { headerSlides } from "./data/headerSlides";
import { EffectFade, Pagination } from "swiper/modules";
import { sliderSettings } from "./sliderSettings/settings";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Typy
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
};

// Komponent Header
export default function Header({ isMobile }: HeaderProps) {
  return (
    <header className="relative">
      <Swiper
        {...sliderSettings}
        modules={[Pagination, EffectFade]}
        effect="fade"
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        className="podology-slider"
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
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </header>
  );
}

// Komponent pojedynczego slajdu
function HeaderSlide({
  currentIndex,
  img,
  alt,
  title,
  description,
  isMobile,
}: SlideProps) {
  return (
    <div className="relative w-full h-[650px]">
      {/* Obraz w tle */}
      <Image
        priority={currentIndex === 0}
        src={img}
        alt={alt}
        width={isMobile ? 360 : 1920}
        height={650}
        className="object-cover w-full h-full"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* Zawartość slajdu */}
      <div className="absolute inset-0 w-[80%] mx-auto h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {title || "Profesjonalna opieka podologiczna"}
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            {description ||
              "Zapewniamy kompleksową opiekę nad zdrowiem Twoich stóp, wykorzystując najnowocześniejsze metody i sprzęt medyczny."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              style={{
                backgroundColor: "rgb(79, 103, 189)",
              }}
              className="inline-flex items-center justify-center text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Umów wizytę
            </Link>

            <Link
              href="/uslugi"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-medium py-3 px-6 rounded-md transition-all duration-300"
            >
              Poznaj nasze usługi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
