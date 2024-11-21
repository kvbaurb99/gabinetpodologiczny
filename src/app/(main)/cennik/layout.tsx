import type { PropsWithChildren } from "react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cennik",
    description: "",
    alternates: {
      canonical: `https://podojaworze.pl/cennik`,
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}
