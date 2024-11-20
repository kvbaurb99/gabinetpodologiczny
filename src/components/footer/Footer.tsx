// Footer.js
import React from "react";
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

const menuItems = [
  { title: "Strona główna", href: "#" },
  { title: "O nas", href: "#" },
  { title: "Oferta", href: "#" },
  { title: "Cennik", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Kontakt", href: "#" },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <GridContainer>
          {/* Column 1: Logo and Description */}
          <Column>
            <LogoContainer>
              <span>LOGO</span>
            </LogoContainer>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

          {/* Column 4: Follow Us */}
          <Column>
            <Title>Obserwuj nas</Title>
            <SocialLinks>Facebook</SocialLinks>
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
