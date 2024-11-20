import { Autoplay, EffectFade, Navigation } from "swiper/modules";

export const sliderSettings = {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  speed: 800,
  loop: true,
  slidesPerView: 1,
  modules: [EffectFade, Autoplay, Navigation],
  effect: "fade",
  navigation: {
    prevEl: ".swiper-button-prev-new",
    nextEl: ".swiper-button-next-new",
  },
};
