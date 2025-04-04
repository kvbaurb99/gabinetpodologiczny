"use client";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #000; // bg-gray-900
  color: white;
  padding: 3rem 0;
  margin-top: 4rem;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
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
  color: #9CA3AF; // text-gray-400
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
    color: #9CA3AF;
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
  color: #9CA3AF;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Copyright = styled.div`
  border-top: 1px solid #1F2937; // border-gray-800
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
  color: #9CA3AF;
  font-size: 0.875rem;
`;
