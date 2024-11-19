"use client";
import Image from "next/image";
import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
`;

export const AboutImage = styled(Image)`
  width: 560px;
  height: 360px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


export const AboutTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
