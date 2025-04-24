
import { Category } from "@/types/category";
import { permanentRedirect } from "next/navigation";

export async function getCategories(): Promise<Category[]> {
  const res = await fetch("https://podologjaworze.pl/api/categories");
  if (!res.ok) {
    permanentRedirect("/");
  }
  const categories = await res.json();
  return categories;
}
