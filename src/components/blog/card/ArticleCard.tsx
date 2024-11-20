import { StaticImageData } from "next/image";
import React from "react";

type Props = {
  img: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
  slug: string;
};

export default function ArticleCard({}: Props) {
  return <div>ArticleCard</div>;
}
