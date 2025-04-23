"use client";

import { SectionWrapper } from "@/global-styles/global";
import dynamic from "next/dynamic";
import { SectionTitle } from "../reviews/style/reviews";
import styled from "styled-components";
import { Clock, Phone } from "lucide-react";

const MapComponentWithNoSSR = dynamic(() => import("./Map"), { ssr: false });

type Props = {
  api: string;
};

const LocationContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const MapContainer = styled.div`
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

const InfoContainer = styled.div`
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

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const HoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HoursRow = styled.div`
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

const ContactItem = styled.a`
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

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.5rem;

  svg {
    color: #007ba7;
  }
`;

// Styl dla komponentu mapy aby wypełnił rodzica
const MapWrapper = styled.div`
  width: 100%;
  height: 100%; /* Wypełnij cały dostępny obszar */
`;

export default function Location({ api }: Props) {
  const location = { lat: 49.79600891129703, lng: 18.946997424298008 };

  return (
    <SectionWrapper>
      <SectionTitle>Gdzie nas znaleźć?</SectionTitle>
      <LocationContentWrapper>
        <MapContainer>
          <MapWrapper>
            <MapComponentWithNoSSR api={api} center={location} />
          </MapWrapper>
        </MapContainer>

        <InfoContainer>
          <InfoSection>
            <InfoHeader>
              <Clock size={24} />
              <InfoTitle>Godziny otwarcia</InfoTitle>
            </InfoHeader>
            <HoursContainer>
              <HoursRow>
                <span>Poniedziałek</span>
                <span>10:00 - 17:00</span>
              </HoursRow>
              <HoursRow>
                <span>Wtorek</span>
                <span>10:00 - 17:00</span>
              </HoursRow>
              <HoursRow>
                <span>Środa</span>
                <span>10:00 - 17:00</span>
              </HoursRow>
              <HoursRow>
                <span>Czwartek</span>
                <span>10:00 - 17:00</span>
              </HoursRow>
              <HoursRow>
                <span>Piątek</span>
                <span>10:00 - 17:00</span>
              </HoursRow>
              <HoursRow>
                <span>Sobota</span>
                <span>Zamknięte</span>
              </HoursRow>
              <HoursRow>
                <span>Niedziela</span>
                <span>Zamknięte</span>
              </HoursRow>
            </HoursContainer>
          </InfoSection>

          <InfoSection>
            <InfoHeader>
              <Phone size={24} />
              <InfoTitle>Kontakt</InfoTitle>
            </InfoHeader>
            <ContactItem href="tel:+48123456789">
              <Phone size={16} />
              +48 501 408 528
            </ContactItem>
            <ContactItem href="tel:+48987654321">
              <Phone size={16} />
              +48 509 614 723
            </ContactItem>
          </InfoSection>
        </InfoContainer>
      </LocationContentWrapper>
    </SectionWrapper>
  );
}
