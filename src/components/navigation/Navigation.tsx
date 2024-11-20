"use client";
import {
  LinkItem,
  LinksList,
  NavigationContainer,
  NavigationWrapper,
} from "./style/navigation";
import { navbarLinks } from "./data/navbarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FacebookIcon from "@/assets/socials/facebook.svg";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <NavigationWrapper>
      <NavigationContainer>
        <span>Wrzuć logo</span>
        <LinksList>
          {navbarLinks.map((link, index) => {
            const isActive = pathname === `/${link.slug}`;
            return (
              <LinkItem key={index} $isActive={isActive}>
                <Link href={`/${link.slug}`}>{link.title}</Link>
              </LinkItem>
            );
          })}
        </LinksList>
        <Image
          width={23}
          height={23}
          priority
          src={FacebookIcon}
          alt="Facebook"
          className="hover:-translate-y-1 duration-150"
        />
      </NavigationContainer>
    </NavigationWrapper>
  );
}
