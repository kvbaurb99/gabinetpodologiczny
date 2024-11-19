"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./elements/Slide";
import { EffectFade, Autoplay } from "swiper/modules";
import { headerSlides } from "./data/headerSlides";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export default function Header() {
  return (
    <header>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        speed={800}
        loop
        slidesPerView={1}
        modules={[EffectFade, Autoplay]}
        effect="fade"
      >
        {headerSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide currentIndex={index} img={slide.src} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
