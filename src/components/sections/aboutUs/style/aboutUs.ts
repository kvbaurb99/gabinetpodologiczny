"use client";
import Image from "next/image";
import styled from "styled-components";

type AboutUsProps = {
  $reverse?: boolean;
};

export const AboutContainer = styled.div<AboutUsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
`;

export const Figure = styled.figure`
  width: 50%;
  height: 360px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AboutImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AboutTitle = styled.h1`
  color: rgb(79, 103, 189);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const AboutTitleH2 = styled.h2`
  color: rgb(79, 103, 189);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
