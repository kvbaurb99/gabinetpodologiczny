  // FAQ Schema
  import type { WithContext, FAQPage } from "schema-dts";
  export const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.example-podiatry-clinic.com/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czym zajmuje się podolog?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Podolog to specjalista zajmujący się diagnostyką, leczeniem i profilaktyką chorób stóp. Podolog pomaga w przypadku takich problemów jak: wrastające paznokcie, odciski, modzele, grzybica paznokci, pękające pięty czy deformacje stóp.",
        },
      },
      {
        "@type": "Question",
        name: "Jak długo trwa pierwsza wizyta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pierwsza wizyta trwa zazwyczaj od 45 do 60 minut. Obejmuje wywiad, diagnozę problemu oraz plan leczenia.",
        },
      },
      {
        "@type": "Question",
        name: "Czy potrzebuję skierowanie na wizytę?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nie, nie potrzebujesz skierowania. Możesz umówić się na wizytę bezpośrednio, dzwoniąc do naszej recepcji lub rezerwując termin online.",
        },
      },
      {
        "@type": "Question",
        name: "Jak wygląda zabieg usuwania odcisków?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zabieg usuwania odcisków polega na bezbolesnym usunięciu zrogowaciałego naskórka przy użyciu specjalistycznych frezów. Na zakończenie aplikujemy preparat łagodzący, który przyspiesza regenerację skóry.",
        },
      },
      {
        "@type": "Question",
        name: "Co to jest pedicure leczniczy i czym różni się od zwykłego pedicure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pedicure leczniczy to zabieg wykonywany przez podologa, który koncentruje się na problemach zdrowotnych stóp, a nie tylko na ich wyglądzie. Obejmuje diagnostykę, usuwanie zmian chorobowych i stosowanie preparatów leczniczych. W przeciwieństwie do zwykłego pedicure, używamy profesjonalnych narzędzi medycznych i stosujemy się do zasad sterylności.",
        },
      },
      {
        "@type": "Question",
        name: "Jak często powinno się odwiedzać podologa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Częstotliwość wizyt zależy od indywidualnych potrzeb. Osoby z przewlekłymi problemami stóp, cukrzycą lub sportowcy powinni odwiedzać podologa regularnie co 4-6 tygodni. Dla profilaktyki zalecana jest wizyta co 2-3 miesiące.",
        },
      },
      {
        "@type": "Question",
        name: "Czy osoby chorujące na cukrzycę mogą korzystać z usług podologa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, osoby z cukrzycą powinny regularnie odwiedzać podologa, ponieważ są bardziej narażone na problemy ze stopami. Nasz gabinet oferuje specjalistyczną opiekę podologiczną dla diabetyków, uwzględniającą szczególne potrzeby tej grupy pacjentów.",
        },
      },
      {
        "@type": "Question",
        name: "Jakie są metody płatności?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Akceptujemy płatności gotówką oraz kartą płatniczą.",
        },
      },
    ],
  };