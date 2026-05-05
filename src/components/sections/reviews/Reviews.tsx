"use client";

import { useState, useRef, useEffect } from "react";
import { DefaultContainer, SectionWrapper } from "@/global-styles/global";
import { Star } from "lucide-react";
import { reviews } from "./data/reviews";
import GoogleIcon from "@/assets/socials/google.svg";
import FacebookIcon from "@/assets/socials/facebook-circle.svg";
import Image from "next/image";
import {
  Avatar,
  AvatarLetter,
  CarouselTrack,
  CarouselViewport,
  NavigationButton,
  PaginationContainer,
  PaginationDot,
  RatingContainer,
  ReviewCard,
  ReviewContent,
  ReviewDate,
  ReviewFooter,
  ReviewHeader,
  ReviewsContainer,
  SectionTitle,
  SlideItem,
  SourceIcon,
  UserInfo,
  UserName,
} from "./style/reviews";

const DOT_GROUP_SIZE = 3;
const AUTOPLAY_DELAY = 15000;
const TRANSITION_MS = 500;

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoplayStoppedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalSlides = reviews.length;
  const numberOfDots = Math.ceil(totalSlides / DOT_GROUP_SIZE);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (autoplayStoppedRef.current) return;
      setCurrentIndex((prev) => prev + 1);
    }, AUTOPLAY_DELAY);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (currentIndex >= totalSlides) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - totalSlides);
      }, TRANSITION_MS);
      return () => clearTimeout(timer);
    }
    if (currentIndex < 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + totalSlides);
      }, TRANSITION_MS);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    if (!isTransitioning) {
      const raf1 = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true));
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [isTransitioning]);

  const stopAutoplay = () => {
    autoplayStoppedRef.current = true;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handlePrev = () => {
    stopAutoplay();
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    stopAutoplay();
    setCurrentIndex((prev) => prev + 1);
  };

  const handleDotClick = (index: number) => {
    stopAutoplay();
    setCurrentIndex(index * DOT_GROUP_SIZE);
  };

  const normalizedIndex =
    ((currentIndex % totalSlides) + totalSlides) % totalSlides;
  const currentDotIndex = Math.floor(normalizedIndex / DOT_GROUP_SIZE);

  return (
    <SectionWrapper $fullWidth id="reviews">
      <DefaultContainer>
        <SectionTitle>Co mówią nasi pacjenci</SectionTitle>
        <ReviewsContainer>
          <CarouselViewport>
            <CarouselTrack
              style={{
                transform: `translate3d(calc(${-currentIndex} * 100% / var(--spv)), 0, 0)`,
                transition: isTransitioning
                  ? `transform ${TRANSITION_MS}ms ease`
                  : "none",
              }}
            >
              {[...reviews, ...reviews].map((review, idx) => (
                <SlideItem key={idx}>
                  <ReviewCard>
                    <ReviewHeader>
                      <Avatar>
                        <AvatarLetter>{review.name.charAt(0)}</AvatarLetter>
                      </Avatar>
                      <UserInfo>
                        <UserName>{review.name}</UserName>
                        <RatingContainer>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill={i < review.rating ? "#FCD34D" : "#E2E8F0"}
                              stroke={
                                i < review.rating ? "#FCD34D" : "#E2E8F0"
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
                            review.type === "facebook"
                              ? FacebookIcon
                              : GoogleIcon
                          }
                          alt={
                            review.type === "facebook" ? "Facebook" : "Google"
                          }
                          width={22}
                          height={22}
                          loading="lazy"
                        />
                      </SourceIcon>
                    </ReviewFooter>
                  </ReviewCard>
                </SlideItem>
              ))}
            </CarouselTrack>
          </CarouselViewport>

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
                $isActive={currentDotIndex === index}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </PaginationContainer>
        </ReviewsContainer>
      </DefaultContainer>
    </SectionWrapper>
  );
};

export default Reviews;
