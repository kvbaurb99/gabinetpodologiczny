import { useState, useEffect, useRef } from "react";
import { headerSlides } from "./data/headerSlides";
import Icon from "@/components/icons/Icon";

type HeaderProps = {
  isMobile: boolean;
};

type ImgLike = { src: string } | string;

type SlideProps = {
  currentIndex: number;
  img: ImgLike;
  alt: string;
  title?: string;
  description?: string;
  isMobile: boolean;
  isActive: boolean;
  isInitialRender: boolean;
};

const AUTOPLAY_DELAY = 5000;

const resolveSrc = (img: ImgLike): string =>
  typeof img === "string" ? img : img.src;

export default function Header({ isMobile }: HeaderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const autoplayStoppedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (autoplayStoppedRef.current) return;
      setActiveIndex((prev) => (prev + 1) % headerSlides.length);
    }, AUTOPLAY_DELAY);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (index: number) => {
    autoplayStoppedRef.current = true;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setActiveIndex(index);
  };

  return (
    <header className="relative">
      <div className="relative w-full h-[590px] xl:h-[600px] overflow-hidden">
        {headerSlides.map((slide, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 2 : 1,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <HeaderSlide
                currentIndex={index}
                img={slide.src}
                alt={slide.alt}
                title={slide.title}
                description={slide.description}
                isMobile={isMobile}
                isActive={isActive}
                isInitialRender={isInitialRender}
              />
            </div>
          );
        })}

        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="relative bottom-3 w-[90%] md:w-[80%] mx-auto px-4 md:px-8">
            <div className="flex justify-center gap-2">
              {headerSlides.map((_, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleDotClick(index)}
                    aria-label={`Pokaż slajd ${index + 1}`}
                    className="h-1 rounded-sm border-0 p-0 m-0 cursor-pointer transition-all duration-300"
                    style={{
                      width: isActive ? 24 : 12,
                      backgroundColor: isActive
                        ? "#007ba7"
                        : "rgba(255, 255, 255, 0.4)",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-[#007ba7] to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-[#007ba7] to-transparent" />
    </header>
  );
}

function HeaderSlide({
  currentIndex,
  img,
  alt,
  title,
  description,
  isActive,
  isInitialRender,
}: SlideProps) {
  const isFirst = currentIndex === 0;
  return (
    <>
      <img
        src={resolveSrc(img)}
        alt={alt}
        loading={isFirst ? "eager" : "lazy"}
        fetchPriority={isFirst ? "high" : "low"}
        decoding="async"
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: "cover",
          transition: !isInitialRender ? "transform 7000ms" : "none",
          transform: !isInitialRender && isActive ? "scale(1.05)" : "scale(1)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="w-[90%] md:w-[80%] mx-auto flex justify-start relative bottom-4 md:bottom-0">
          <div
            className="max-w-xl text-white"
            style={
              !isInitialRender
                ? {
                    transition: "all 1000ms",
                    transform: isActive ? "translateY(0)" : "translateY(2rem)",
                    opacity: isActive ? 1 : 0,
                  }
                : undefined
            }
          >
            <div className="w-16 h-1 bg-[#007ba7] mb-6 rounded-full" />

            <p className="text-3xl md:text-5xl leading-tight font-bold mb-4">
              {title || "Profesjonalna opieka podologiczna"}
            </p>

            <p className="text-base md:text-lg leading-relaxed opacity-90 mb-8 text-slate-100">
              {description ||
                "Zapewniamy kompleksową opiekę nad zdrowiem Twoich stóp, wykorzystując najnowocześniejsze metody i sprzęt medyczny."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+48501408528">
                <button className="w-full lg:w-auto inline-flex items-center justify-center bg-[#007ba7] hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl group/btn">
                  <Icon name="calendar" size={20} className="mr-2" />
                  <span>Umów wizytę</span>
                  <Icon
                    name="chevron-right"
                    size={16}
                    className="ml-1 transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </button>
              </a>

              <a href="tel:+48501408528">
                <button className="w-full lg:w-auto inline-flex items-center gap-3 justify-center bg-white/10 backdrop-blur-sm text-white border border-white/30 font-medium px-6 py-3 rounded-md transition-all duration-300 hover:bg-white/20">
                  <Icon name="phone" size={20} />
                  <span>+48 501 408 528</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
