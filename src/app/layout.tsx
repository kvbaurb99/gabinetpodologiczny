import { metadata } from "@/meta/home";
import dynamic from "next/dynamic";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { geistMono, geistSans } from "@/lib/fonts";

// Dynamic imports
const Footer = dynamic(() => import("@/components/footer/Footer"));
const Navigation = dynamic(() => import("@/components/navigation/Navigation"));

// Meta data is imported from the meta folder
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
