import Image from "next/image";

type Props = {
  title: string;
  image: string;
  content: string;
};

export default function ArticleSingle({ title, image, content }: Props) {
  return (
    <article className="col-span-12 xl:col-span-8">
      <Image
        src={image}
        width={640}
        height={360}
        priority
        alt={title}
        className="w-full rounded-xl shadow-md shadow-black/20 h-[220px] xl:h-[480px] object-cover"
      />
      <h1 className="mt-4 xl:mt-6 text-2xl xl:text-4xl font-bold xl:leading-snug">
        {title}
      </h1>
      <div data-article-content dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
