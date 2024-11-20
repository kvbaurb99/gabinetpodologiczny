"use client";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const ReviewCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  height: 300px; // Stała wysokość karty
  display: flex;
  flex-direction: column;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-shrink: 0;
`;

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #eff6ff;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const AvatarLetter = styled.span`
  color: #2563eb;
  font-weight: 600;
  font-size: 1.125rem;
`;

export const UserInfo = styled.div`
  margin-left: 1rem;
`;

export const UserName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ReviewContent = styled.p`
  color: #4b5563;
  line-height: 1.5;
  flex-grow: 1;
  margin-bottom: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const ReviewDate = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
  flex-shrink: 0;
`;

export const StyledSwiper = styled(Swiper)`
  margin-top: 3rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 48px;
`;

export const PaginationDot = styled.span<{ $isActive?: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${({ $isActive }) => ($isActive ? "#0369a1" : "#e2e8f0")};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? "#0369a1" : "#94a3b8")};
  }
`;
