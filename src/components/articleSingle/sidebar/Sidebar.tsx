import { Article } from "@/types/articles";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  restArticles: Article[];
};

export default function Sidebar({ restArticles }: Props) {
  return (
    <aside className="col-span-12 xl:col-span-4 sticky top-32 h-fit">
      <h4 className="font-semibold text-xl xl:text-2xl">
        Przeczytaj pozostałe artykuły
      </h4>
      <div className="flex flex-col gap-4 mt-10">
        {restArticles.map((item, i) => {
          return (
            <div
              key={i}
              className="flex gap-4 border-b border-gray-200 pb-4 flex-col xl:flex-row"
            >
              <Link
                className="min-w-24 max-w-24 h-24"
                href={`/blog/${item.slug}`}
              >
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  priority
                  alt={item.title}
                  className="rounded-lg w-full h-full shadow-md object-cover shadow-black/20"
                />
              </Link>
              <div>
                <Link href={`/blog/${item.slug}`}>
                  <h5 className="font-semibold line-clamp-2">{item.title}</h5>
                </Link>
                <p className="text-sm text-gray-500 line-clamp-3">
                  {item.overview}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
