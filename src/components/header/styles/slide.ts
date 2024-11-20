"use client";
import styled from "styled-components";
import Image from "next/image";

export const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 580px;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 580px;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.4),
    transparent
  );
`;

export const ContentWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 70%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TextContent = styled.div`
  color: white;
  max-width: 42rem;
`;

export const Title = styled.h2`
  font-size: 2.375rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.25;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;
`;

export const Button = styled.button`
  font-weight: 500;
  background-color: white;
  color: black;
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c8e3e7;
  }
`;
