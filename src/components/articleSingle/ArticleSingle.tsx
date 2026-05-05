import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  content: string;
  category_slug: string;
  category: string;
};

export default function ArticleSingle({
  title,
  image,
  content,
  category,
  category_slug,
}: Props) {
  return (
    <article className="col-span-12 xl:col-span-8">
      <figure className="h-[220px] xl:h-[480px] relative">
        <Image
          src={image}
          fill
          priority
          alt={title}
          className="w-full h-full rounded-xl shadow-md shadow-black/10  object-cover"
        />
        <Link prefetch={false} href={`/kategorie/${category_slug}`}>
          <span className="absolute top-4 left-4 bg-[#007BA7] text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </Link>
      </figure>
      <h1 className="mt-4 xl:mt-6 text-2xl xl:text-4xl font-bold xl:leading-snug">
        {title}
      </h1>
      <div data-article-content dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
