"use client";
import { SectionWrapper } from "@/global-styles/global";
import dynamic from "next/dynamic";
import { SectionTitle } from "../reviews/style/reviews";
import { Clock, Phone } from "lucide-react";
import {
  ContactItem,
  HoursContainer,
  HoursRow,
  InfoContainer,
  InfoHeader,
  InfoSection,
  InfoTitle,
  LocationContentWrapper,
  MapContainer,
  MapWrapper,
} from "./styles/style";

const MapComponentWithNoSSR = dynamic(() => import("./Map"), { ssr: false });

type Props = {
  api: string;
};

export default function Location({ api }: Props) {
  const location = { lat: 49.795859234092916, lng: 18.947077466267235 };

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
            <ContactItem href="tel:+48501408528">
              <Phone size={16} />
              +48 501 408 528
            </ContactItem>
            <ContactItem href="tel:+48509614723">
              <Phone size={16} />
              +48 509 614 723
            </ContactItem>
          </InfoSection>
        </InfoContainer>
      </LocationContentWrapper>
    </SectionWrapper>
  );
}
