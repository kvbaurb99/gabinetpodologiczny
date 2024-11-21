import Image from "next/image";
import MaskImage from "@/assets/header/pedicure-process-home-salon-pedicure-foot-care-treatment-nail-process-professional-pedicures-master-blue-gloves-make-pedicure.jpg";

type Props = {
  title: string;
};

export default function Mask({ title }: Props) {
  return (
    <div className="relative w-full h-[360px]">
      <Image
        src={MaskImage}
        alt="Mask"
        layout="fill"
        className="object-cover"
        priority
      />
      <div className="absolute top-0 left-0 bg-blue-700/50 w-full h-full text-white flex justify-center items-center">
        <h1 className="text-5xl tracking-wide font-bold">{title}</h1>
      </div>
    </div>
  );
}
