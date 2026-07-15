import React from "react";
import Icon from "@/components/icons/Icon";

interface NavLink {
  title: string;
  slug: string;
}

interface MobileMenuProps {
  $isOpen: boolean;
  $scrolled: boolean;
  navbarLinks: NavLink[];
  onClose: () => void;
  currentPath: string;
}

const SLUG_TO_ICON: Record<
  string,
  | "home"
  | "scroll-text"
  | "footprints"
  | "info"
  | "users"
  | "star"
  | "book"
  | "heart"
  | "phone"
> = {
  "": "home",
  "#about": "scroll-text",
  "#offer": "footprints",
  "o-nas": "info",
  "#team": "users",
  "#reviews": "star",
  blog: "book",
  kontakt: "phone",
};

export const EnhancedMobileMenu: React.FC<MobileMenuProps> = ({
  $isOpen,
  navbarLinks,
  onClose,
  currentPath,
}) => {
  const isActive = (slug: string) => currentPath === slug;

  return (
    <div
      className="absolute top-full left-0 w-full bg-white/[.98] backdrop-blur-md shadow-[0_10px_15px_rgba(0,0,0,0.1)] z-[1000] pt-4 pb-6 overflow-hidden border-t border-[rgba(0,123,167,0.1)] transition-[transform,opacity,max-height] duration-300 ease-in-out"
      style={{
        transform: $isOpen ? "translateY(0)" : "translateY(-20px)",
        opacity: $isOpen ? 1 : 0,
        maxHeight: $isOpen ? 1000 : 0,
        pointerEvents: $isOpen ? "all" : "none",
      }}
    >
      <ul className="w-[90%] mx-auto flex flex-col gap-1 list-none p-0">
        {navbarLinks.map((link, index) => {
          const active = isActive(link.slug);
          const iconName = SLUG_TO_ICON[link.slug] ?? "heart";
          return (
            <li
              key={index}
              onClick={onClose}
              className={`rounded-lg transition-all duration-300 active:scale-[0.98] ${
                active ? "bg-[#007BA7]/10" : "bg-transparent"
              }`}
            >
              <a
                href={`/${link.slug}`}
                className={`relative flex items-center px-4 py-3.5 text-[1.05rem] transition-all duration-300 no-underline ${
                  active
                    ? "font-semibold text-[#007BA7]"
                    : "font-medium text-[#2c3e50]"
                } after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#71809620] after:to-transparent ${
                  active ? "after:opacity-0" : "after:opacity-30"
                }`}
              >
                <span className="inline-flex items-center justify-center mr-3 text-[#007BA7]">
                  <Icon name={iconName} size={18} />
                </span>
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 p-5 bg-[#007BA7]/5 rounded-lg w-[90%] mx-auto">
        <p className="text-[#007BA7] font-semibold mb-2">
          Potrzebujesz konsultacji?
        </p>
        <p className="text-sm text-[#2c3e50] opacity-80">
          Zadzwoń i umów wizytę w gabinecie podologicznym
        </p>
        <a
          href="tel:+48501408528"
          className="flex items-center justify-center w-full bg-[#007BA7] text-white border-0 rounded-md py-3.5 font-semibold mt-3 cursor-pointer transition-all duration-200 no-underline hover:bg-[#4f67bd] hover:scale-[1.02] active:scale-[0.98]"
        >
          <Icon name="phone" size={18} className="mr-2" />
          Umów wizytę
        </a>
      </div>
    </div>
  );
};
