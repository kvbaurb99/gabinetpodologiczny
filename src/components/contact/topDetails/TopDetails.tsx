import { H1, P, SectionWrapper } from "@/global-styles/global";
import React from "react";

type Props = {};

export default function TopDetails({}: Props) {
  return (
    <SectionWrapper>
      <H1>Skontaktuj się z nami</H1>
      <P>
        Jeśli masz pytania dotyczące naszej oferty, chcesz umówić się na wizytę
        lub dowiedzieć się więcej o naszej klinice, skontaktuj się z nami.
      </P>
    </SectionWrapper>
  );
}
