import type { PropsWithChildren } from "react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "O nas",
    description: "",
    alternates: {
      canonical: `https://podojaworze.pl/o-nas`,
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}
