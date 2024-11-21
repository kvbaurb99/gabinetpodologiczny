import type { PropsWithChildren } from "react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Aktualności",
    description: "",
    alternates: {
      canonical: `https://podojaworze.pl/kontakt`,
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}
