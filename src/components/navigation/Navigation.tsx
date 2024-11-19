import {
  LinkItem,
  LinksList,
  NavigationContainer,
  NavigationWrapper,
} from "./style/navigation";
import { navbarLinks } from "./data/navbarLinks";
import Link from "next/link";

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationContainer>
        <span>Wrzuć logo</span>
        <LinksList>
          {navbarLinks.map((link, index) => (
            <LinkItem key={index}>
              <Link href={`/${link.slug}`}>{link.title}</Link>
            </LinkItem>
          ))}
        </LinksList>
      </NavigationContainer>
    </NavigationWrapper>
  );
}
