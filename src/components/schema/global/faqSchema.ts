// FAQ — te same pytania renderuje sekcja <Faq />, więc schema zawsze odpowiada widocznej treści
import type { WithContext, FAQPage } from "schema-dts";

export type FaqItem = { question: string; answer: string };

export const buildFaqSchema = (
  items: FaqItem[],
  id: string
): WithContext<FAQPage> => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": id,
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const homeFaq: FaqItem[] = [
  {
    question: "Czym zajmuje się podolog?",
    answer:
      "Podolog to specjalista zajmujący się diagnostyką, leczeniem i profilaktyką chorób stóp. Podolog pomaga w przypadku takich problemów jak: wrastające paznokcie, odciski, modzele, grzybica paznokci, pękające pięty czy deformacje stóp.",
  },
  {
    question: "Jak długo trwa pierwsza wizyta?",
    answer:
      "Pierwsza wizyta trwa zazwyczaj od 45 do 60 minut. Obejmuje wywiad, diagnozę problemu oraz plan leczenia.",
  },
  {
    question: "Czy potrzebuję skierowania na wizytę?",
    answer:
      "Nie, nie potrzebujesz skierowania. Wizytę umawiasz bezpośrednio, dzwoniąc do gabinetu pod numer +48 501 408 528 lub +48 509 614 723.",
  },
  {
    question: "Jak wygląda zabieg usuwania odcisków?",
    answer:
      "Zabieg usuwania odcisków polega na bezbolesnym usunięciu zrogowaciałego naskórka przy użyciu specjalistycznych frezów. Na zakończenie aplikujemy preparat łagodzący, który przyspiesza regenerację skóry.",
  },
  {
    question: "Co to jest pedicure leczniczy i czym różni się od zwykłego pedicure?",
    answer:
      "Pedicure leczniczy to zabieg wykonywany przez podologa, który koncentruje się na problemach zdrowotnych stóp, a nie tylko na ich wyglądzie. Obejmuje diagnostykę, usuwanie zmian chorobowych i stosowanie preparatów leczniczych. W przeciwieństwie do zwykłego pedicure, używamy profesjonalnych narzędzi medycznych i stosujemy się do zasad sterylności.",
  },
  {
    question: "Jak często powinno się odwiedzać podologa?",
    answer:
      "Częstotliwość wizyt zależy od indywidualnych potrzeb. Osoby z przewlekłymi problemami stóp, cukrzycą lub sportowcy powinni odwiedzać podologa regularnie co 4-6 tygodni. Dla profilaktyki zalecana jest wizyta co 2-3 miesiące.",
  },
  {
    question: "Czy osoby chorujące na cukrzycę mogą korzystać z usług podologa?",
    answer:
      "Tak, osoby z cukrzycą powinny regularnie odwiedzać podologa, ponieważ są bardziej narażone na problemy ze stopami. Nasz gabinet oferuje specjalistyczną opiekę podologiczną dla diabetyków, uwzględniającą szczególne potrzeby tej grupy pacjentów.",
  },
  {
    question: "Czy przyjmujecie pacjentów z Bielska-Białej?",
    answer:
      "Tak. Gabinet mieści się w Jaworzu przy ul. Zdrojowej 78, tuż za zachodnią granicą Bielska-Białej. Duża część naszych pacjentów przyjeżdża z Bielska i okolicznych miejscowości.",
  },
  {
    question: "Jakie są metody płatności?",
    answer: "Akceptujemy płatności gotówką oraz kartą płatniczą.",
  },
];

export const faqSchema = buildFaqSchema(homeFaq, "https://podologjaworze.pl/#faq");
