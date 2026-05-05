import type { CSSProperties } from "react";

type IconName =
  | "star"
  | "calendar"
  | "chevron-right"
  | "phone"
  | "menu"
  | "x"
  | "home"
  | "info"
  | "heart"
  | "users"
  | "book"
  | "scroll-text"
  | "footprints"
  | "clock";

type Props = {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
};

export default function Icon({
  name,
  size = 24,
  className,
  style,
  ariaLabel,
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      <use href={`#i-${name}`} />
    </svg>
  );
}
