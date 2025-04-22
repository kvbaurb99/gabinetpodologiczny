import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Funkcja obsługująca żądanie GET
export async function GET() {
  try {
    const articlesPath = path.join(process.cwd(), 'src/data/articles.json');
    const articlesJson = await fs.readFile(articlesPath, 'utf-8');
    const articles = JSON.parse(articlesJson);
    
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json(
      { error: 'Nie udało się załadować artykułów' },
      { status: 500 }
    );
  }
}