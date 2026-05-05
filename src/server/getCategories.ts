import type { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  const res = await fetch("https://podologjaworze.pl/api/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return (await res.json()) as Category[];
}
