"use client";

import Image from "next/image";
import styled from "styled-components";
import { Button, P } from "@/global-styles/global";

type AboutUsProps = {
  $reverse?: boolean;
};

export const AboutContainer = styled.div<AboutUsProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    gap: 1.5rem;
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Figure = styled.figure`
  width: 50%;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(79, 103, 189, 0.15);
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 280px;
  }
`;

export const AboutImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AboutTitle = styled.h1`
  color: #007BA7;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  line-height: 1.35;
  @media (max-width: 768px) {
    font-size: 1.675rem;
  }
`;

export const AboutTitleH2 = styled.h2`
  color: #007BA7;
  font-size: 2.25rem;
  line-height: 1.35;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  @media (max-width: 768px) {
    font-size: 1.675rem;
  }
`;

export const StyledDescription = styled(P)`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
`;

export const StyledButton = styled(Button)`
  margin-top: 0.5rem;
  padding: 0.75rem 1.5rem;
  max-width: fit-content;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(79, 103, 189, 0.3);
  }
`;
