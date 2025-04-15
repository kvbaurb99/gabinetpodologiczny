import type { Swiper as SwiperType } from "swiper";
import { reviews } from "../../../../../src/components/sections/reviews/data/reviews";
import Reviews from "../../../../../src/components/sections/reviews/Reviews.tsx";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

// Mock Swiper and its modules
jest.mock("swiper/react", () => ({
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock("swiper/modules", () => ({
  Pagination: {},
  Navigation: {},
  Autoplay: {},
}));

jest.mock("next/image", () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
));

describe("index() index method", () => {
  let mockSwiper: Partial<SwiperType>;

  beforeEach(() => {
    mockSwiper = {
      slideToLoop: jest.fn(),
      slidePrev: jest.fn(),
      slideNext: jest.fn(),
    };
  });

  describe("Happy Paths", () => {
    test("should render the correct number of review slides", () => {
      render(<Reviews />);
      const reviewSlides = screen.getAllByText(/Review Content/i);
      expect(reviewSlides.length).toBe(reviews.length);
    });

    test("should render the correct user information for each review", () => {
      render(<Reviews />);
      reviews.forEach((review) => {
        expect(screen.getByText(review.name)).toBeInTheDocument();
        expect(screen.getByText(review.content)).toBeInTheDocument();
        expect(screen.getByText(review.date)).toBeInTheDocument();
      });
    });

    test("should navigate to the next slide when the next button is clicked", () => {
      render(<Reviews />);
      const nextButton = screen.getByLabelText("Next slide");
      fireEvent.click(nextButton);
      expect(mockSwiper.slideNext).toHaveBeenCalled();
    });

    test("should navigate to the previous slide when the previous button is clicked", () => {
      render(<Reviews />);
      const prevButton = screen.getByLabelText("Previous slide");
      fireEvent.click(prevButton);
      expect(mockSwiper.slidePrev).toHaveBeenCalled();
    });
  });

  describe("Edge Cases", () => {
    test("should handle dot click navigation correctly", () => {
      render(<Reviews />);
      const dots = screen.getAllByRole("button");
      fireEvent.click(dots[1]);
      expect(mockSwiper.slideToLoop).toHaveBeenCalledWith(3); // Assuming slidesPerView is 3
    });

    test("should handle no swiper instance gracefully", () => {
      render(<Reviews />);
      const prevButton = screen.getByLabelText("Previous slide");
      const nextButton = screen.getByLabelText("Next slide");
      fireEvent.click(prevButton);
      fireEvent.click(nextButton);
      // No errors should occur, and no calls to slidePrev or slideNext should be made
      expect(mockSwiper.slidePrev).not.toHaveBeenCalled();
      expect(mockSwiper.slideNext).not.toHaveBeenCalled();
    });
  });
});
