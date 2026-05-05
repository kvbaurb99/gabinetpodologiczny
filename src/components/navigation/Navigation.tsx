import { useState, useEffect } from "react";
import { EnhancedMobileMenu } from "./MobileMenu";
import LogoImage from "@/assets/logo.svg";
import { navbarLinks } from "./data/navbarLinks";
import Icon from "@/components/icons/Icon";


export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const path = window.location.pathname.split("/")[1] || "";
    setCurrentCategory(path);
  }, []);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-[1000] bg-white py-3 md:py-3 transition-all duration-300 ease-in-out shadow-[0_4px_12px_rgba(43,103,119,0.15)] backdrop-blur-md">
      <div className="w-[90%] lg:w-[80%] max-w-[1400px] mx-auto flex justify-between items-center">
        <a href="/">
          <img
            src={LogoImage.src}
            alt="Zdrowe Stopy Logo"
            width={240}
            height={160}
            fetchPriority="high"
            decoding="async"
            className="h-[50px] xl:h-[58px] object-cover w-[200px] lg:w-[245px] relative top-0.5"
          />
        </a>

        <ul className="hidden lg:flex gap-10 items-center list-none m-0 p-0">
          {navbarLinks.map((link, index) => {
            const isActive = currentCategory === link.slug;
            return (
              <li
                key={index}
                onClick={() => setCurrentCategory(link.slug)}
                className="relative group/nav-item"
              >
                <a
                  href={`/${link.slug}`}
                  className={`block py-2 transition-all duration-300 hover:text-[#4f67bd] text-[1.05rem] ${
                    isActive
                      ? "font-semibold text-[#007BA7]"
                      : "font-medium text-[#2c3e50]"
                  }`}
                >
                  {link.title}
                  <span
                    className={`absolute left-0 bottom-0 h-[1.5px] bg-[#007ba7] transition-[width] duration-300 group-hover/nav-item:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        {mobileMenuOpen ? (
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Zamknij menu"
            className="xl:hidden cursor-pointer text-[#2c3e50] bg-transparent border-0 p-0"
          >
            <Icon name="x" size={24} />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Otwórz menu"
            className="lg:hidden cursor-pointer text-[#2c3e50] bg-transparent border-0 p-0"
          >
            <Icon name="menu" size={24} />
          </button>
        )}
        <div className="hidden xl:block" />

        <EnhancedMobileMenu
          $isOpen={mobileMenuOpen}
          $scrolled={scrolled}
          navbarLinks={navbarLinks}
          onClose={handleMobileMenuClick}
          currentPath={currentCategory}
        />
      </div>
    </nav>
  );
}
