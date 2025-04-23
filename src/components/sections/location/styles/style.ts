"use client"
import styled from "styled-components"

export const LocationContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 360px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex: 2;
    height: auto; /* Usunięcie stałej wysokości */
    display: flex; /* Dodanie flex dla dzieci */
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const InfoTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const HoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HoursRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eaeaea;

  &:last-child {
    border-bottom: none;
  }

  span:first-child {
    font-weight: 500;
  }

  span:last-child {
    color: #666;
  }
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #333;
  transition: color 0.2s ease;

  &:hover {
    color: #007ba7;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.5rem;

  svg {
    color: #007ba7;
  }
`;

// Styl dla komponentu mapy aby wypełnił rodzica
export const MapWrapper = styled.div`
  width: 100%;
  height: 100%; /* Wypełnij cały dostępny obszar */
`;