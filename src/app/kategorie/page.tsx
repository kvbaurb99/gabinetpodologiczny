import { SectionWrapper } from "@/global-styles/global";
import { MainTitle } from "@/components/sections/reviews/style/reviews";
import { getCategories } from "@/server/getCategories";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CategoryPage() {
  const categories = await getCategories();
  return (
    <>
      <SectionWrapper className="min-h-screen">
        <MainTitle>Kategorie artykułów podologicznych</MainTitle>
        <div className="flex flex-wrap items-center gap-2 xl:gap-4">
          {categories.map((category, i) => {
            return (
              <Link href={`/kategorie/${category.slug}`} key={i}>
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
      </SectionWrapper>
    </>
  );
}
