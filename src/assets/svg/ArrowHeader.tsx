"use client";

type ArrowHeaderProps = {
  direction: "left" | "right";
};

export default function ArrowHeader({ direction }: ArrowHeaderProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        stroke={"#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d={direction === "right" ? "m8 2 10 10-10 10" : "m16 2-10 10 10 10"}
      ></path>
    </svg>
  );
}
