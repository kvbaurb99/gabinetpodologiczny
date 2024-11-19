import { metadata } from "@/meta/home";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import StyledComponentsRegistry from "@/lib/registry";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          <main>
            <Navigation />
            {children}
            <Footer />
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
