import type { Category } from "@/types/category";
import { promises as fs } from "fs";
import path from "path";

export async function getCategories(): Promise<Category[]> {
  try {
    const file = path.join(process.cwd(), "src/data/categories.json");
    const json = await fs.readFile(file, "utf-8");
    return JSON.parse(json) as Category[];
  } catch {
    return [];
  }
}
