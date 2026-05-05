import { useState, useRef, useEffect } from "react";
import { reviews } from "./data/reviews";
import GoogleIcon from "@/assets/socials/google.svg";
import FacebookIcon from "@/assets/socials/facebook-circle.svg";

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
    <section
      id="reviews"
      className="w-full bg-[#F5F6F8] py-12 md:py-16 mt-10 md:mt-16"
    >
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h2 className="relative inline-block mb-8 font-bold text-[#007BA7] text-2xl md:text-[2.125rem] md:mb-8">
          Co mówią nasi pacjenci
        </h2>
        <div className="relative">
          <div className="overflow-hidden px-2 pt-4 pb-8 [--spv:1] sm:[--spv:2] lg:[--spv:3]">
            <div
              className="flex will-change-transform"
              style={{
                transform: `translate3d(calc(${-currentIndex} * 100% / var(--spv)), 0, 0)`,
                transition: isTransitioning
                  ? `transform ${TRANSITION_MS}ms ease`
                  : "none",
              }}
            >
              {[...reviews, ...reviews].map((review, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 box-border px-[15px] basis-[calc(100%/var(--spv))]"
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-7 h-[300px] md:h-[320px] flex flex-col transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-sm bg-gradient-to-br from-sky-100 to-sky-200">
                        <span className="text-[#0284c7] font-bold text-xl">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">
                          {review.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              width={16}
                              height={16}
                              style={{
                                color:
                                  i < review.rating ? "#FCD34D" : "#E2E8F0",
                              }}
                            >
                              <use href="#i-star" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed flex-grow mb-5 text-base overflow-hidden line-clamp-4">
                      {review.content}
                    </p>
                    <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                      <div className="text-slate-500 text-sm">
                        {review.date}
                      </div>
                      <div className="transition-transform duration-200 hover:scale-110">
                        <img
                          src={
                            review.type === "facebook"
                              ? FacebookIcon.src
                              : GoogleIcon.src
                          }
                          alt={
                            review.type === "facebook" ? "Facebook" : "Google"
                          }
                          width={22}
                          height={22}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="hidden sm:flex absolute top-1/2 -left-4 z-10 w-12 h-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md text-[#0284c7] border-0 cursor-pointer transition-all duration-200 hover:bg-sky-50 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="hidden sm:flex absolute top-1/2 -right-4 z-10 w-12 h-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md text-[#0284c7] border-0 cursor-pointer transition-all duration-200 hover:bg-sky-50 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &#10095;
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {[...Array(numberOfDots)].map((_, index) => {
              const isActive = currentDotIndex === index;
              return (
                <span
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="w-10 h-2 rounded-2xl cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? "#0284c7" : "#e2e8f0",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
