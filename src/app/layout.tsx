import { metadata } from "@/meta/home";
import "./globals.css";
import { geistMono, geistSans } from "@/lib/fonts";
import Navigation from "@/components/navigation/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import JsonLdSchema from "@/components/schema/global/Organization";
import Footer from "@/components/footer/Footer";


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
        <JsonLdSchema />
      </head>
      <GoogleTagManager gtmId="GTM-TKSW436G" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <Navigation />
          {children}
          <Footer />
        </main>
      </body>
      <Analytics />
    </html>
  );
}
