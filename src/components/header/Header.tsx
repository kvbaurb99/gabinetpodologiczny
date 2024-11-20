"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./elements/Slide";
import { headerSlides } from "./data/headerSlides";
import { sliderSettings } from "./sliderSettings/settings";
import Pagination from "./elements/Pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function Header() {
  return (
    <header className="relative">
      <Swiper {...sliderSettings}>
        {headerSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              currentIndex={index}
              img={slide.src}
              alt={slide.alt}
              title={slide.title}
              description={slide.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Pagination />
    </header>
  );
}
