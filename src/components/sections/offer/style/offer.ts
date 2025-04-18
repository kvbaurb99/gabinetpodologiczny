"use client";
import Image from "next/image";
import styled from "styled-components";

export const StyledSection = styled.section<{ $bgImage: string }>`
  height: 800px;
  width: 100%;
  background: url(${(props) => props.$bgImage}) no-repeat center center;
  background-size: cover;
  margin-top: 2rem;
  position: relative;
  background-attachment: fixed;
  @media (max-width: 768px) {
    background: url(${(props) => props.$bgImage}) repeat center center;
    height: 2250px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 123, 167, 0.6);
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardWrapper = styled.div`
  height: 300px;
  perspective: 1000px;
`;

export const CardInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transition: all 0.5s;
  transform-style: preserve-3d;

  ${CardWrapper}:hover & {
    transform: rotateY(180deg);
  }
`;

export const CardSide = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-color: white;
  border-radius: 0.25rem;
  backface-visibility: hidden;
  box-shadow: 0 8px 30px rgb(0, 0, 0, 0.12);
`;

export const CardFront = styled(CardSide)`
  justify-content: center;
  gap: 2rem;
`;

export const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  gap: 1rem;
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const CardDescription = styled.p`
  padding: 0 1.5rem;
  text-align: center;
  color: #747474;
`;

export const StyledImage = styled(Image)`
  // Możesz dodać dodatkowe style dla obrazka jeśli potrzebujesz
`;
