"use client";
import { useState, useEffect } from "react";
import { EnhancedMobileMenu } from "./MobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoImage from "@/assets/logo.svg";
import { navbarLinks } from "./data/navbarLinks";
import { Menu, XIcon } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const path = pathname.split("/")[1] || "";
    setCurrentCategory(path);
  }, [pathname]);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-[1000] bg-white py-3 md:py-3 transition-all duration-300 ease-in-out shadow-[0_4px_12px_rgba(43,103,119,0.15)] backdrop-blur-md">
      <div className="w-[90%] lg:w-[80%] max-w-[1400px] mx-auto flex justify-between items-center">
        <Link prefetch={false} href={"/"}>
          <Image
            src={LogoImage}
            alt="Zdrowe Stopy Logo"
            width={240}
            priority
            height={160}
            className="h-[50px] xl:h-[58px] object-cover w-[200px] lg:w-[245px] relative top-0.5"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-10 items-center list-none m-0 p-0">
          {navbarLinks.map((link, index) => {
            const isActive = currentCategory === link.slug;
            return (
              <li
                key={index}
                onClick={() => setCurrentCategory(link.slug)}
                className="relative group/nav-item"
              >
                <Link
                  prefetch={false}
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
                </Link>
              </li>
            );
          })}
        </ul>
        {mobileMenuOpen ? (
          <XIcon
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden cursor-pointer"
            size={24}
            color="#2c3e50"
          />
        ) : (
          <Menu
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden cursor-pointer"
            size={24}
            color="#2c3e50"
          />
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
