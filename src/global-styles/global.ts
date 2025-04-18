"use client";
import styled from "styled-components";

type SectionProps = {
  $fullWidth?: boolean;
  $smallerMargin?: boolean;
};

type H2Props = {
  $white?: boolean;
};

export const SectionWrapper = styled.section<SectionProps>`
  width: ${(props) => (props.$fullWidth ? "100%" : "80%")};
  background-color: ${(props) =>
    props.$fullWidth ? "#F5F6F8" : "transparent"};
  padding: ${(props) => (props.$fullWidth ? "4rem 0" : "0 0")};
  margin: 0 auto;
  margin-top: 4rem;
  @media (max-width: 768px) {
    width: ${(props) => (props.$fullWidth ? "100%" : "90%")};
    margin-top: ${(props) => (props.$smallerMargin ? "0.5rem" : "2rem")};
  }
`;

export const DefaultContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const H2 = styled.h2<H2Props>`
  color: ${(props) => (props.$white ? "#fff" : "#007BA7")};
  font-size: 2.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const P = styled.p`
  color: #747474;
  font-size: 1.15rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  margin-top: 1.25rem;
  background-color: #007BA7;
  color: #fff;
  padding: 0.575rem 1.15rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b7389;
  }
`;
