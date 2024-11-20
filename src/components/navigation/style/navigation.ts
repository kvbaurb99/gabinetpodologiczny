"use client";
import styled from "styled-components";

type LinkProps = {
  $isActive: boolean;
};

export const NavigationWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 2rem 0;
  box-shadow: 0 2px 4px rgba(43, 103, 119, 0.15), 0 4px 8px rgba(0, 0, 0, 0.08);
`;

export const NavigationContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinksList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const LinkItem = styled.li<LinkProps>`
  transition: color 0.3s ease;
  color: ${(props) =>
    props.$isActive
      ? "rgb(79, 103, 189)"
      : "#000"}; // Kolor aktywnego linku zmieniony na jasny błękit
  &:hover {
    color: rgb(79, 103, 189); // Kolor hover zmieniony na jasny błękit
  }
`;
