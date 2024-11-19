import Image, { StaticImageData } from "next/image";

type Props = {
  currentIndex: number;
  img: string | StaticImageData;
  alt: string;
};

export default function Slide({ currentIndex, img, alt }: Props) {
  return (
    <Image
      className="w-full object-cover h-[580px] "
      priority={currentIndex === 0}
      src={img}
      alt={alt}
      width={1440}
      height={500}
    />
  );
}
