import about_src from "@/assets/backgrounds/clinic.webp";
import about_src_2 from "@/assets/sections/aboutUs/testowe.webp";
import Link from "next/link";
import Image from "next/image";

type Props = {
  main?: boolean;
  reverse?: boolean;
  title: string;
  description: string;
};

export default function AboutUs({ reverse, main, title, description }: Props) {
  return (
    <section
      id="about"
      className="w-[90%] md:w-[80%] mx-auto mt-2 md:mt-16"
    >
      <div
        className={`flex items-center justify-between gap-12 py-8 max-md:flex-col-reverse max-md:gap-6 ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="w-1/2 max-md:w-full flex flex-col">
          {!main ? (
            <h2 className="text-[#007BA7] text-2xl max-md:text-[1.675rem] md:text-4xl font-bold mb-4 relative leading-[1.35]">
              {title}
            </h2>
          ) : (
            <h1 className="text-[#007BA7] text-[1.675rem] md:text-[2.5rem] font-bold mb-4 relative leading-[1.35]">
              {title}
            </h1>
          )}
          <p className="mb-6 text-[1.1rem] leading-[1.8] text-[#747474]">
            {description}
          </p>
          <Link prefetch={false} href={"/"}>
            <button className="mt-2 max-w-fit font-semibold transition-all duration-300 max-md:text-sm bg-[#007BA7] text-white px-6 py-3 rounded-md cursor-pointer hover:bg-[#3b7389] hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(79,103,189,0.3)]">
              Dowiedz się więcej
            </button>
          </Link>
        </div>
        <figure className="w-1/2 h-[400px] max-md:w-full max-md:h-[240px] overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(79,103,189,0.15)] relative m-0">
          <Image
            priority={!reverse}
            fill
            src={!reverse ? about_src : about_src_2}
            loading={!reverse ? "eager" : "lazy"}
            alt="Gabinet zdrowe stopy"
            title="Gabinet zdrowe stopy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
          />
        </figure>
      </div>
    </section>
  );
}
