"use client";

import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { DefaultContainer, H2, SectionWrapper } from "@/global-styles/global";
import { Star } from "lucide-react";
import { reviews } from "./data/reviews";
import GoogleIcon from "@/assets/socials/google.svg";
import FacebookIcon from "@/assets/socials/facebook-circle.svg";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import {
  Avatar,
  AvatarLetter,
  NavigationButton,
  PaginationContainer,
  PaginationDot,
  RatingContainer,
  ReviewCard,
  ReviewContent,
  ReviewDate,
  ReviewFooter,
  ReviewHeader,
  SectionTitle,
  SourceIcon,
  StyledSwiper,
  UserInfo,
  UserName,
} from "./style/reviews";

const Reviews = () => {
  const [realIndex, setRealIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const totalSlides = reviews.length;
  const slidesPerView = 3;
  const numberOfDots = Math.ceil(totalSlides / slidesPerView);

  const handleDotClick = (index: number) => {
    if (swiper) {
      const targetIndex = index * slidesPerView;
      swiper.slideToLoop(targetIndex);
    }
  };

  const getCurrentDotIndex = (realIndex: number) => {
    return Math.floor(realIndex / slidesPerView);
  };

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <SectionWrapper $fullWidth id="reviews">
      <DefaultContainer>
        <SectionTitle>Co mówią nasi pacjenci</SectionTitle>
          <StyledSwiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            onSwiper={setSwiper}
            onRealIndexChange={(swiper) => {
              setRealIndex(swiper.realIndex);
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard>
                  <ReviewHeader>
                    <Avatar>
                      <AvatarLetter>{review.name.charAt(0)}</AvatarLetter>
                    </Avatar>
                    <UserInfo>
                      <UserName>{review.name}</UserName>
                      <RatingContainer>
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            fill={index < review.rating ? "#FCD34D" : "#E2E8F0"}
                            stroke={
                              index < review.rating ? "#FCD34D" : "#E2E8F0"
                            }
                          />
                        ))}
                      </RatingContainer>
                    </UserInfo>
                  </ReviewHeader>
                  <ReviewContent>{review.content}</ReviewContent>
                  <ReviewFooter>
                    <ReviewDate>{review.date}</ReviewDate>
                    <SourceIcon>
                      <Image
                        src={
                          review.type === "facebook" ? FacebookIcon : GoogleIcon
                        }
                        alt={review.type === "facebook" ? "Facebook" : "Google"}
                        width={22}
                        height={22}
                        loading="lazy"
                      />
                    </SourceIcon>
                  </ReviewFooter>
                </ReviewCard>
              </SwiperSlide>
            ))}
          </StyledSwiper>

          <NavigationButton
            $direction="prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            &#10094;
          </NavigationButton>
          <NavigationButton
            $direction="next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            &#10095;
          </NavigationButton>

          <PaginationContainer>
            {[...Array(numberOfDots)].map((_, index) => (
              <PaginationDot
                key={index}
                $isActive={getCurrentDotIndex(realIndex) === index}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </PaginationContainer>
      </DefaultContainer>
    </SectionWrapper>
  );
};

export default Reviews;
