import React from "react";

type Props = {};

export default function TopDetails({}: Props) {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto mt-10 md:mt-16">
      <h1 className="text-[2rem] font-semibold mb-4">Skontaktuj się z nami</h1>
      <p className="text-[#747474] text-base md:text-[1.15rem]">
        Jeśli masz pytania dotyczące naszej oferty, chcesz umówić się na wizytę
        lub dowiedzieć się więcej o naszej klinice, skontaktuj się z nami.
      </p>
    </section>
  );
}
