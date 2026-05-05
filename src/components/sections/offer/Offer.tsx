import Image from "next/image";
import { offer } from "./data/offer";
import BackgroundImage from "@/assets/backgrounds/csm_2024_Podiatry_Header_1920_900px_cf1ef4ccad.webp";

type Props = {
  isMobile: boolean;
};

export default function Offer({ isMobile }: Props) {
  return (
    <section
      id="offer"
      className="h-[800px] max-md:h-[2250px] w-full mt-8 relative bg-cover bg-center bg-no-repeat bg-fixed max-md:bg-repeat"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-[#007ba7]/60">
        <div className="w-[90%] md:w-[80%] mx-auto py-12">
          <h2 className="text-white text-2xl md:text-[2.125rem] font-bold mb-4">
            Schorzenia stóp którymi się zajmujemy:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
            {offer.map((item, index) => (
              <div
                key={index}
                className="h-[300px] [perspective:1000px] group/card"
              >
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover/card:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 py-8 bg-white rounded shadow-[0_8px_30px_rgba(0,0,0,0.12)] [backface-visibility:hidden]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={isMobile ? 120 : 140}
                      height={160}
                      style={{ height: "auto" }}
                    />
                    <h3 className="font-semibold text-lg leading-7">
                      {item.title}
                    </h3>
                    <span
                      style={{ color: "#007BA7", fontWeight: 500 }}
                      className="relative bottom-6"
                    >
                      Dowiedz się więcej
                    </span>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center gap-4 py-8 bg-white rounded shadow-[0_8px_30px_rgba(0,0,0,0.12)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="font-semibold text-lg leading-7">
                      {item.title}
                    </h3>
                    <p className="px-6 text-center text-[#747474]">
                      {item.overview}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
