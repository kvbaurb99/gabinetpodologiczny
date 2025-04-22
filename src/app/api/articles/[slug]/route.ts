import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

// Funkcja obsługująca żądanie GET dla pojedynczego artykułu
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const articlesPath = path.join(process.cwd(), "src/data/articles.json");
    const articlesJson = await fs.readFile(articlesPath, "utf-8");
    const articles = JSON.parse(articlesJson);

    const article = articles.find((article: any) => article.slug === slug);

    if (!article) {
      return NextResponse.json(
        { error: "Artykuł nie został znaleziony" },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json(
      { error: "Nie udało się załadować artykułu" },
      { status: 500 }
    );
  }
}
