"use client";
import dynamic from "next/dynamic";
import { Clock, Phone } from "lucide-react";

const MapComponentWithNoSSR = dynamic(() => import("./Map"), { ssr: false });

type Props = {
  api: string;
};

const dayHours = [
  { day: "Poniedziałek", hours: "8:40 - 17:00" },
  { day: "Wtorek", hours: "8:40 - 17:00" },
  { day: "Środa", hours: "8:40 - 17:00" },
  { day: "Czwartek", hours: "8:40 - 17:00" },
  { day: "Piątek", hours: "8:40 - 15:00" },
  { day: "Sobota", hours: "Zamknięte" },
  { day: "Niedziela", hours: "Zamknięte" },
];

export default function Location({ api }: Props) {
  const location = { lat: 49.795859234092916, lng: 18.947077466267235 };

  return (
    <section className="w-[90%] md:w-[80%] mx-auto mt-10 md:mt-16">
      <h2 className="relative inline-block mb-8 font-bold text-[#007BA7] text-[1.55rem] md:text-[2.125rem]">
        Gdzie nas znaleźć?
      </h2>
      <div className="flex flex-col md:flex-row md:items-stretch gap-8 w-full mb-8 md:mb-16">
        <div className="w-full h-[360px] rounded-[10px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:flex-[2] md:h-auto md:flex">
          <div className="w-full h-full">
            <MapComponentWithNoSSR api={api} center={location} />
          </div>
        </div>

        <div className="flex flex-col gap-6 p-6 bg-[#f9f9f9] rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:flex-1">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2 [&_svg]:text-[#007ba7]">
              <Clock size={24} />
              <h3 className="text-[1.2rem] md:text-[1.4rem] font-semibold text-[#333]">
                Godziny otwarcia
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              {dayHours.map(({ day, hours }) => (
                <div
                  key={day}
                  className="flex justify-between pb-2 border-b border-[#eaeaea] last:border-b-0"
                >
                  <span className="font-medium">{day}</span>
                  <span className="text-[#666]">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2 [&_svg]:text-[#007ba7]">
              <Phone size={24} />
              <h3 className="text-[1.2rem] md:text-[1.4rem] font-semibold text-[#333]">
                Kontakt
              </h3>
            </div>
            <a
              href="tel:+48501408528"
              className="flex items-center gap-2 no-underline text-[#333] transition-colors duration-200 hover:text-[#007ba7]"
            >
              <Phone size={16} />
              +48 501 408 528
            </a>
            <a
              href="tel:+48509614723"
              className="flex items-center gap-2 no-underline text-[#333] transition-colors duration-200 hover:text-[#007ba7]"
            >
              <Phone size={16} />
              +48 509 614 723
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
