import Image from "next/image";

type Props = {
  title: string;
  image: string;
  content: string;
};

export default function ArticleSingle({ title, image, content }: Props) {
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
      </figure>
      <h1 className="mt-4 xl:mt-6 text-2xl xl:text-4xl font-bold xl:leading-snug">
        {title}
      </h1>
      <div data-article-content dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
