"use client";

import styled from "styled-components";

// Styled components for the slider
export const SliderHeader = styled.header`
  position: relative;
`;

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 680px;

  @media (min-width: 1280px) {
    height: 720px;
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(15, 23, 42, 0.8),
    rgba(30, 41, 59, 0.6),
    transparent
  );
`;

export const SlideContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
position: relative;
top: 1rem;
  width: 90%; /* Mobile-first: 90% width */
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: flex-start;

  @media (min-width: 768px) {
    width: 80%; /* Larger screens: 80% width */
  }
`;

interface ContentBoxProps {
  $isActive: boolean;
  $isInitialRender: boolean;
}

export const ContentBox = styled.div<ContentBoxProps>`
  max-width: 36rem;
  color: white;

  ${({ $isInitialRender, $isActive }) =>
    !$isInitialRender &&
    `
    transition: all 1000ms;
    transform: ${$isActive ? "translateY(0)" : "translateY(2rem)"};
    opacity: ${$isActive ? "1" : "0"};
  `}
`;

export const Divider = styled.div`
  width: 4rem;
  height: 0.25rem;
  background-color: #007ba7;
  margin-bottom: 1.5rem;
  border-radius: 9999px;
`;

export const SlideTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const SlideDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 2rem;
  color: #f1f5f9;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #007ba7;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 300ms;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #0d9488;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  & svg:last-child {
    margin-left: 0.25rem;
    height: 1rem;
    width: 1rem;
    transition: transform 300ms;
  }

  &:hover svg:last-child {
    transform: translateX(0.25rem);
  }

  & svg:first-child {
    margin-right: 0.5rem;
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: all 300ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  & svg {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Badge = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeInner = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.span`
  color: #007ba7;
  font-size: 0.75rem;
  font-weight: 700;
`;

export const BadgeInfo = styled.div`
  font-size: 0.875rem;
  color: #e2e8f0;
`;

export const BadgeTitle = styled.p`
  font-weight: 600;
`;

export const BadgeDescription = styled.p`
  font-size: 0.75rem;
  opacity: 0.7;
`;

export const TopGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 33.333333%;
  height: 0.25rem;
  background: linear-gradient(to right, #007ba7, transparent);
`;

export const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 33.333333%;
  height: 0.25rem;
  background: linear-gradient(to left, #007ba7, transparent);
`;

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const PaginationInner = styled.div`
  width: 90%; /* Mobile-first: 90% width */
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    width: 80%; /* Larger screens: 80% width */
    padding: 0 2rem;
  }
`;

export const PaginationDots = styled.div`
  display: flex;
  justify-content: center; /* Center the pagination dots */
  gap: 0.5rem;

  & .pagination-bullet {
    width: 12px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  & .pagination-bullet-active {
    width: 24px;
    background-color: #007ba7;
  }
`;

interface BackgroundImageProps {
  $isActive: boolean;
  $isInitialRender: boolean;
}

export const BackgroundImage = styled.img<BackgroundImageProps>`
  object-fit: cover;
  width: 100%;
  height: 100%;

  ${({ $isInitialRender, $isActive }) =>
    !$isInitialRender &&
    `
    transition: transform 7000ms;
    transform: ${$isActive ? "scale(1.05)" : "scale(1)"};
  `}
`;

// For additional CSS that needs to be global
export const GlobalStyles = `
.medical-slider .swiper-slide-active {
  z-index: 2;
}
`;
