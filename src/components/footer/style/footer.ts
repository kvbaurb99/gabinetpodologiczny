"use client";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #000; // bg-gray-900
  color: white;
  padding: 3rem 0;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LogoContainer = styled.div`
  height: 4rem;
  width: 8rem;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
`;

export const Description = styled.p`
  color: #9ca3af; // text-gray-400
  font-size: 0.875rem;
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.375rem;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MenuItem = styled.li`
  a {
    color: #9ca3af;
    transition: color 0.3s;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #9ca3af;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Copyright = styled.div`
  border-top: 1px solid #1f2937; // border-gray-800
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
`;
