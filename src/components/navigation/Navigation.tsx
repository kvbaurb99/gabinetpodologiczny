"use client";
import { useState, useEffect } from "react";
import {
  Nav,
  NavContainer,
  Logo,
  MenuItems,
  MenuItem,
  SocialsContainer,
  MobileMenuButton,
  MobileMenu,
  LogoContainer,
} from "./style/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FacebookIcon from "@/assets/socials/facebook.svg";
import Image from "next/image";
import { navbarLinks } from "./data/navbarLinks";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Funkcja zamykająca menu mobilne po kliknięciu w link
  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <LogoContainer>
          {/* Tutaj dodaj swoje logo */}
          <Logo>PodoClinic</Logo>
        </LogoContainer>

        {/* Menu na większych ekranach */}
        <MenuItems>
          {navbarLinks.map((link, index) => {
            const isActive = pathname === `/${link.slug}`;
            return (
              <MenuItem key={index} $isActive={isActive}>
                <Link href={`/${link.slug}`}>{link.title}</Link>
              </MenuItem>
            );
          })}
        </MenuItems>

        <div />

        {/* Przycisk menu mobilnego */}
        <MobileMenuButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>

        {/* Menu mobilne */}
        <MobileMenu $isOpen={mobileMenuOpen}>
          {navbarLinks.map((link, index) => {
            const isActive = pathname === `/${link.slug}`;
            return (
              <MenuItem
                key={index}
                $isActive={isActive}
                onClick={handleMobileMenuClick}
              >
                <Link href={`/${link.slug}`}>{link.title}</Link>
              </MenuItem>
            );
          })}
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
}
