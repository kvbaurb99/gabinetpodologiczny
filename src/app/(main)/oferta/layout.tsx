import type { PropsWithChildren } from "react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Oferta",
    description: "",
    alternates: {
      canonical: `https://podojaworze.pl/oferta`,
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}
