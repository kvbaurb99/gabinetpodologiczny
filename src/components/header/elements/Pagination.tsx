import ArrowHeader from "@/assets/svg/ArrowHeader";

export default function Pagination() {
  return (
    <>
      <button className="swiper-button-prev-new absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <ArrowHeader direction="left" />
      </button>
      <button className="swiper-button-next-new absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <ArrowHeader direction="right" />
      </button>
    </>
  );
}
