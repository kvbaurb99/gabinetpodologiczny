// Footer.js
import LogoImage from "@/assets/logo.svg";

import {
  FooterWrapper,
  Container,
  GridContainer,
  Column,
  LogoContainer,
  Description,
  Title,
  MenuList,
  MenuItem,
  ContactInfo,
  SocialLinks,
  Copyright,
} from "./style/footer";
import Image from "next/image";

const menuItems = [
  { title: "Strona główna", href: "#" },
  { title: "O nas", href: "#about" },
  { title: "Oferta", href: "#offer" },
  { title: "Zespół", href: "#team" },
  { title: "Opinie", href: "#reviews" },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <GridContainer>
          {/* Column 1: Logo and Description */}
          <Column>
            <Image
              src={LogoImage}
              alt="Zdrowe Stopy Logo"
              width={240}
              quality={100}
              loading="lazy"
              height={160}
              className="object-cover h-[80px]"
            />
            <Description>
              Gabinet Podologiczny Zdrowe Stopy - Twoja kompleksowa opieka
              podologiczna w profesjonalnych warunkach. Specjalizujemy się w
              diagnostyce i leczeniu schorzeń stóp, zapewniając najwyższy
              standard usług i indywidualne podejście do każdego pacjenta.
            </Description>
          </Column>

          {/* Column 2: Menu */}
          <Column>
            <Title>Menu</Title>
            <MenuList>
              {menuItems.map((item, index) => (
                <MenuItem key={index}>
                  <a href={item.href}>{item.title}</a>
                </MenuItem>
              ))}
            </MenuList>
          </Column>

          {/* Column 3: Contact */}
          <Column>
            <Title>Kontakt</Title>
            <ContactInfo>
              <p>ul. Zdrojowa 78</p>
              <p>43-384 Jaworze</p>
              <p>Tel: +48 501 408 528</p>
            </ContactInfo>
          </Column>
        </GridContainer>

        {/* Copyright */}
        <Copyright>
          <p>
            &copy; {new Date().getFullYear()} Zdrowe Stopy. Wszelkie prawa
            zastrzeżone.
          </p>
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
