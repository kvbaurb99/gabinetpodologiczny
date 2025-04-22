import { metadata } from "@/meta/home";
import dynamic from "next/dynamic";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { geistMono, geistSans } from "@/lib/fonts";
import Navigation from "@/components/navigation/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
// Dynamic imports
const Footer = dynamic(() => import("@/components/footer/Footer"));

// Meta data is imported from the meta folder
export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta
          name="google-site-verification"
          content="fCwJ7xTv5BKEE8tlBRT2-9Mo2OaospF0DB3PV4THWE8"
        />
      </head>
      <GoogleTagManager gtmId="GTM-TKSW436G" />
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
      <Analytics />
    </html>
  );
}
