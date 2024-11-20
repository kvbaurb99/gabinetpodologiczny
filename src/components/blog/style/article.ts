"use client";
import styled from "styled-components";

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ArticleCard = styled.article`
  background: white;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ArticleCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ContentWrapper = styled.div`
  padding: 1.5rem;
`;

export const ArticleTitle = styled.h3`
font-weight: 500;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ArticleDescription = styled.p`
  margin-bottom: 1.25rem;
  display: -webkit-box;
  font-size: 0.875rem;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #4b5563;
`;

export const ReadMoreButton = styled.button`
  background: transparent;
  color: #000;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0.25rem;
    left: 0;
    width: 0;
    height: 2px;
    background: #2563eb;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #1e40af;

    &::after {
      width: 100%;
    }
  }
`;
