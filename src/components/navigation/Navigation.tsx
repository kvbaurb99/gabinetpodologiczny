"use client";
import { useState, useEffect } from "react";
import {
  Nav,
  NavContainer,
  Logo,
  MenuItems,
  MenuItem,
  LogoContainer,
} from "./style/navigation";
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

  // Efekt obsługujący zmianę wyglądu nawigacji podczas scrollowania
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

  // Update current category based on pathname when component mounts
  useEffect(() => {
    const path = pathname.split("/")[1] || "";
    setCurrentCategory(path);
  }, [pathname]);

  // Funkcja zamykająca menu mobilne po kliknięciu w link
  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Nav>
      <NavContainer>
        <Link href={"/"}>
          <Image
            src={LogoImage}
            alt="Zdrowe Stopy Logo"
            width={240}
            quality={100}
            priority
            height={160}
            className="h-[50px] xl:h-[58px] object-cover w-[200px] lg:w-[245px] relative top-0.5"
          />
        </Link>

        {/* Menu na większych ekranach */}
        <MenuItems>
          {navbarLinks.map((link, index) => {
            const isActive = currentCategory === link.slug;
            return (
              <MenuItem
                onClick={() => setCurrentCategory(link.slug)}
                key={index}
                $isActive={isActive}
              >
                <Link href={`/${link.slug}`}>{link.title}</Link>
              </MenuItem>
            );
          })}
        </MenuItems>
        {mobileMenuOpen ? (
          <XIcon
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden"
            size={24}
            color="#2c3e50"
          />
        ) : (
          <Menu
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            size={24}
            color="#2c3e50"
          />
        )}
        <div className="hidden xl:block" />

        {/* Enhanced Mobile Menu */}
        <EnhancedMobileMenu
          $isOpen={mobileMenuOpen}
          $scrolled={scrolled}
          navbarLinks={navbarLinks}
          onClose={handleMobileMenuClick}
          currentPath={currentCategory}
        />
      </NavContainer>
    </Nav>
  );
}
