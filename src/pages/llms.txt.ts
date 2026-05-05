import type { APIRoute } from "astro";
import { getArticles } from "@/server/getArticles";
import { getCategories } from "@/server/getCategories";

export const GET: APIRoute = async () => {
  const [articles, categories] = await Promise.all([
    getArticles().catch(() => []),
    getCategories().catch(() => []),
  ]);

  const content = `# Gabinet Podologiczny Zdrowe Stopy

> Specjalistyczny gabinet podologiczny w Jaworzu (województwo śląskie). Kompleksowa diagnostyka i leczenie schorzeń stóp — od pielęgnacji profilaktycznej po specjalistyczne procedury medyczne. Obsługujemy pacjentów z Jaworza, Bielska-Białej, Cieszyna i Skoczowa.

## Kontakt i lokalizacja

- Nazwa: Gabinet Podologiczny Zdrowe Stopy
- Adres: ul. Zdrojowa 78, 43-384 Jaworze, Polska
- Telefon: +48 501 408 528, +48 509 614 723
- Godziny otwarcia:
  - Poniedziałek - Czwartek: 8:40 - 17:00
  - Piątek: 8:40 - 15:00
  - Sobota - Niedziela: zamknięte
- Strona: https://podologjaworze.pl

## Zespół

- Jolanta Cięciara — Dyplomowana Podolożka. 8 lat doświadczenia w leczeniu schorzeń stóp. Absolwentka kursu podologii klinicznej. Stale rozwija kompetencje na międzynarodowych szkoleniach.
- Wiktoria Cięciara — Podolożka i Kosmetolog. Łączy podologię z kosmetologią, oferując holistyczne podejście do pacjenta.

## Oferta — schorzenia, którymi się zajmujemy

- Pedicure podologiczny — kompleksowy zabieg pielęgnacyjny z oceną stanu stóp, usuwaniem zrogowaceń i pielęgnacją paznokci.
- Odciski i modzele — bezpieczne usuwanie zgrubień i zrogowaceń skóry, zapobieganie nawrotom.
- Pękające pięty — oczyszczanie, usuwanie zrogowaciałego naskórka i preparaty regenerujące.
- Brodawki wirusowe (kurzajki) — nowoczesne metody usuwania połączone ze wzmacnianiem odporności skóry.
- Paznokcie zmienione chorobowo — diagnostyka grzybicy, frezowanie płytki, indywidualny plan terapii.
- Wrastające paznokcie — leczenie konserwatywne lub klamry ortonyksyjne; natychmiastowa ulga w bólu.

## Najczęstsze pytania (FAQ)

- Czym zajmuje się podolog? — diagnostyka, leczenie i profilaktyka chorób stóp (wrastające paznokcie, odciski, modzele, grzybica, pękające pięty, deformacje).
- Jak długo trwa pierwsza wizyta? — zazwyczaj 45-60 minut: wywiad, diagnoza, plan leczenia.
- Czy potrzebne jest skierowanie? — nie, wizyty bez skierowania.
- Jak często odwiedzać podologa? — przy przewlekłych problemach lub cukrzycy co 4-6 tygodni; profilaktycznie co 2-3 miesiące.
- Czy diabetycy mogą korzystać z gabinetu? — tak, oferujemy specjalistyczną opiekę dla osób z cukrzycą.
- Metody płatności — gotówka i karta płatnicza.

## Główne strony

- [Strona główna](https://podologjaworze.pl/): oferta, zespół, kontakt, lokalizacja na mapie.
- [Blog podologiczny](https://podologjaworze.pl/blog): artykuły o pielęgnacji i leczeniu stóp.
- [Kategorie artykułów](https://podologjaworze.pl/kategorie): tematy uporządkowane wg problemów.
${
  categories.length > 0
    ? `\n## Kategorie tematyczne\n\n${categories
        .map(
          (c) =>
            `- [${c.name}](https://podologjaworze.pl/kategorie/${c.slug})`
        )
        .join("\n")}\n`
    : ""
}${
    articles.length > 0
      ? `\n## Artykuły blogowe\n\n${articles
          .map(
            (a) =>
              `- [${a.title}](https://podologjaworze.pl/blog/${a.slug}): ${a.overview}`
          )
          .join("\n")}\n`
      : ""
  }
## Obszar działania

Jaworze, Bielsko-Biała, Cieszyn, Skoczów oraz okolice (woj. śląskie).
`;

  return new Response(content, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};
