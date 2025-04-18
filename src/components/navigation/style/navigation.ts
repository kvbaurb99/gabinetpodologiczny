"use client";
import styled from "styled-components";

type NavProps = {
  $scrolled: boolean;
};

type LinkProps = {
  $isActive: boolean;
};

type MobileMenuProps = {
  $isOpen: boolean;
  $scrolled: boolean;
};

// Główny kontener nawigacji
export const Nav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${(props) =>
    props.$scrolled ? "#ffffff" : "rgba(255, 255, 255, 0.9)"};
  padding: ${(props) => (props.$scrolled ? "0.8rem 0" : "1.5rem 0")};
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.$scrolled
      ? "0 4px 12px rgba(43, 103, 119, 0.15)"
      : "0 2px 8px rgba(43, 103, 119, 0.08)"};
  backdrop-filter: blur(8px);
  @media (max-width: 768px) {
    padding: ${(props) => (props.$scrolled ? "0.5rem 0" : "0.8rem 0")};
  }
`;

// Kontener dla zawartości nawigacji
export const NavContainer = styled.div`
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

// Logo
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #007ba7;
  letter-spacing: 0.6px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Lista elementów menu
export const MenuItems = styled.ul`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Pojedynczy element menu
export const MenuItem = styled.li<LinkProps>`
  position: relative;

  a {
    font-size: 1.05rem;
    font-weight: ${(props) => (props.$isActive ? "600" : "500")};
    color: ${(props) => (props.$isActive ? "#007BA7" : "#2c3e50")};
    text-decoration: none;
    position: relative;
    padding: 0.5rem 0;
    transition: all 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: ${(props) => (props.$isActive ? "100%" : "0")};
      height: 1.5px;
      background-color: #007ba7;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #4f67bd;

      &::after {
        width: 100%;
      }
    }
  }

  // Style dla menu mobilnego
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 1rem 0;

    a {
      font-size: 1.1rem;
      display: block;
      padding: 0.8rem 0;
    }
  }
`;

// Kontener dla ikon social media
export const SocialsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Przycisk menu mobilnego
export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;

  span {
    width: 100%;
    height: 2px;
    background-color: #2c3e50;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Menu mobilne
export const MobileMenu = styled.div<MobileMenuProps>`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  background-color: #fff;
  backdrop-filter: blur(8px);
  left: 0;
  width: 100%;
  padding: 2rem 0;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;
