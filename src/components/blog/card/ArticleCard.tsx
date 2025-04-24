import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  img: string | StaticImageData;
  alt: string;
  category: string;
  category_slug: string;
  title: string;
  description: string;
  slug: string;
  date: string;
};

export default function ArticleCard({
  img,
  alt,
  title,
  description,
  category,
  slug,
  date,
  category_slug,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-50 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={img}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />

        <Link href={`/blog/${slug}`} className="block">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
        {/* Category Tag */}
        <Link href={`/kategorie/${category_slug}`}>
          <span className="absolute top-4 left-4 bg-[#007BA7] text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </Link>
      </div>

      {/* Content Section */}
      <div className="p-6 relative">
        {/* Decorative Accent Line */}
        <div className="absolute top-0 left-6 w-16 h-1 bg-indigo-200 rounded-full" />
        <Link href={`/blog/${slug}`} className="block">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#007BA7] transition-colors duration-300">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{description}</p>

        {/* Read More with Icon */}
        <div className="flex items-center gap-2">
          <Link href={`/blog/${slug}`} className="block">
            <span className="inline-block text-[#007BA7] font-medium text-sm group-hover:underline">
              Czytaj więcej →
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-100 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent pointer-events-none" />
    </div>
  );
}
