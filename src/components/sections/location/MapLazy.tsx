import { lazy, Suspense, useEffect, useRef, useState } from "react";

const Map = lazy(() => import("./Map"));

type Props = {
  api: string;
  center: { lat: number; lng: number };
};

/** Ładuje Google Maps dopiero, gdy sekcja zbliża się do viewportu. */
export default function MapLazy(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full bg-[#f1f5f7]">
      {show && (
        <Suspense fallback={null}>
          <Map {...props} />
        </Suspense>
      )}
    </div>
  );
}
