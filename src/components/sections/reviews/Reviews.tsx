"use client";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { DefaultContainer, H2, SectionWrapper } from "@/global-styles/global";
import { Star } from "lucide-react";
import { reviews } from "./data/reviews";
import GoogleIcon from "@/assets/socials/google.svg";
import FacebookIcon from "@/assets/socials/facebook-circle.svg";
import {
  Avatar,
  AvatarLetter,
  RatingContainer,
  ReviewCard,
  ReviewContent,
  ReviewDate,
  ReviewHeader,
  StyledSwiper,
  UserInfo,
  UserName,
  PaginationContainer,
  PaginationDot,
} from "./style/reviews";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

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

  return (
    <SectionWrapper $fullWidth>
      <DefaultContainer>
        <H2 className="text-center mb-12">Opinie i doświadczenia pacjentów</H2>
        <div className="relative">
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
                        {[...Array(review.rating)].map((_, index) => (
                          <Star
                            key={index}
                            size={14}
                            fill="#FCD34D"
                            stroke="#FCD34D"
                          />
                        ))}
                      </RatingContainer>
                    </UserInfo>
                  </ReviewHeader>
                  <ReviewContent>{review.content}</ReviewContent>
                  <div className="flex justify-between items-center">
                    <ReviewDate>{review.date}</ReviewDate>
                    <Image
                      src={
                        review.type === "facebook" ? FacebookIcon : GoogleIcon
                      }
                      alt="Google"
                      width={20}
                      loading="lazy"
                      height={20}
                    />
                  </div>
                </ReviewCard>
              </SwiperSlide>
            ))}
          </StyledSwiper>

          <PaginationContainer>
            {[...Array(numberOfDots)].map((_, index) => (
              <PaginationDot
                key={index}
                $isActive={getCurrentDotIndex(realIndex) === index}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </PaginationContainer>
        </div>
      </DefaultContainer>
    </SectionWrapper>
  );
};

export default Reviews;
