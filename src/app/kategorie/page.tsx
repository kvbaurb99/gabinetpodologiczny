import { getCategories } from "@/server/getCategories";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CategoryPage() {
  const categories = await getCategories();
  return (
    <section className="w-[90%] md:w-[80%] mx-auto mt-10 md:mt-16 min-h-screen">
      <h1 className="relative inline-block mb-8 font-bold text-[#007BA7] text-[1.55rem] md:text-[2.125rem]">
        Kategorie artykułów podologicznych
      </h1>
      <div className="flex flex-wrap items-center gap-2 xl:gap-4">
        {categories.map((category, i) => {
          return (
            <Link prefetch={false} href={`/kategorie/${category.slug}`} key={i}>
              <button
                key={i}
                className="bg-blue-600/60 text-white font-semibold px-4 xl:px-6 py-2.5 xl:py-3 rounded-full shadow-md shadow-black/20 hover:scale-95 duration-150 text-sm xl:text-base"
              >
                {category.name}
              </button>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
