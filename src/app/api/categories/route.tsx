import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Funkcja obsługująca żądanie GET
export async function GET() {
  try {
    const categoriesPath = path.join(process.cwd(), "src/data/categories.json");
    const categoriesJson = await fs.readFile(categoriesPath, "utf-8");
    const categories = JSON.parse(categoriesJson);

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: "Nie udało się załadować kategorii" },
      { status: 500 }
    );
  }
}
