"use client";
import { H2 } from "@/global-styles/global";
import styled from "styled-components";
import { Swiper } from "swiper/react";

// Styled Components
export const ReviewsContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 1rem;
`;

export const ReviewCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05),
    0 4px 6px -2px rgba(0, 0, 0, 0.03);
  padding: 1.75rem;
  height: 320px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08),
      0 10px 10px -5px rgba(0, 0, 0, 0.03);
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Avatar = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
`;

export const AvatarLetter = styled.span`
  color: #0284c7;
  font-weight: 700;
  font-size: 1.25rem;
`;

export const UserInfo = styled.div`
  margin-left: 1rem;
`;

export const UserName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.35rem;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ReviewContent = styled.p`
  color: #475569;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1.25rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 1rem;
`;

export const ReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.75rem;
  border-top: 1px solid #f1f5f9;
`;

export const ReviewDate = styled.div`
  color: #64748b;
  font-size: 0.875rem;
`;

export const SourceIcon = styled.div`
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledSwiper = styled(Swiper)`
  padding: 1rem 0.5rem 2rem 0.5rem;
`;

export const NavigationButton = styled.button<{ $direction: "prev" | "next" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) =>
    $direction === "prev" ? "left: -1rem;" : "right: -1rem;"}
  z-index: 10;
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  color: #0284c7;

  &:hover {
    background: #f0f9ff;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const PaginationDot = styled.span<{ $isActive?: boolean }>`
  width: 2.5rem;
  height: 0.5rem;
  background-color: ${({ $isActive }) => ($isActive ? "#0284c7" : "#e2e8f0")};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? "#0284c7" : "#94a3b8")};
  }
`;

export const SectionTitle = styled(H2)`
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  font-weight: 700;
`;
