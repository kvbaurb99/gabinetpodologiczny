import type { ImageMetadata } from "astro";
import Pedicure from "@/assets/sections/offer/poladolog-ikonka-1.png";
import Modzele from "@/assets/sections/offer/modzele.png";
import Pekajace from "@/assets/sections/offer/pekajace.png";
import Brodawki from "@/assets/sections/offer/brodawki.png";
import Paznokcie from "@/assets/sections/offer/zmienno.png";
import Wrastajace from "@/assets/sections/offer/wrastajace.png";

export type ServiceSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Service = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  image: ImageMetadata;
  // Data ostatniej merytorycznej zmiany treści — trafia do sitemap.xml
  updated: string;
  sections: ServiceSection[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "wrastajace-paznokcie",
    name: "Wrastające paznokcie",
    metaTitle:
      "Wrastające paznokcie – leczenie u podologa | Jaworze, Bielsko-Biała",
    metaDescription:
      "Leczenie wrastających paznokci bez operacji: odbarczenie, tamponada, klamry ortonyksyjne. Gabinet podologiczny Zdrowe Stopy w Jaworzu, kilkanaście minut od Bielska-Białej.",
    h1: "Wrastające paznokcie – leczenie u podologa w Jaworzu",
    lead: "Wrastający paznokieć potrafi boleć przy każdym kroku. W większości przypadków da się go wyleczyć bez zabiegu chirurgicznego – metodami podologicznymi, które przynoszą ulgę już na pierwszej wizycie i korygują kształt płytki na przyszłość. Przyjmujemy pacjentów z Jaworza, Bielska-Białej i okolic.",
    image: Wrastajace,
    updated: "2026-10-25",
    sections: [
      {
        heading: "Skąd bierze się wrastający paznokieć?",
        paragraphs: [
          "Wrastanie paznokcia (wrastający paznokieć, łac. unguis incarnatus) polega na wbijaniu się bocznej krawędzi płytki w wał paznokciowy. Najczęściej dotyczy palucha, ale może pojawić się na każdym palcu.",
          "Problem rzadko ma jedną przyczynę. Zwykle nakłada się na siebie kilka czynników:",
        ],
        list: [
          "nieprawidłowe obcinanie paznokci – zbyt krótko lub z zaokrąglaniem rogów,",
          "za ciasne lub zbyt wąskie obuwie, które dociska wały paznokciowe,",
          "wrodzony, mocno zakrzywiony (tzw. trąbkowaty) kształt płytki,",
          "urazy palców, np. podczas biegania, gry w piłkę czy górskich wędrówek,",
          "nadmierna potliwość stóp, która rozmiękcza skórę wokół paznokcia,",
          "zmiany chorobowe płytki, np. pogrubienie przy grzybicy.",
        ],
      },
      {
        heading: "Objawy – kiedy zgłosić się do podologa?",
        paragraphs: [
          "Na początku pojawia się zaczerwienienie i ból przy ucisku bocznej krawędzi paznokcia. Jeśli problem nie zostanie rozwiązany, wał paznokciowy puchnie, może pojawić się wysięk, a z czasem tzw. ziarnina (dziki naskórek), która krwawi przy dotyku.",
          "Im wcześniej trafisz do gabinetu, tym prostsze i krótsze jest leczenie. Nie warto wycinać rogu paznokcia na własną rękę – to zwykle zostawia ostry kolec płytki, który wrasta jeszcze głębiej.",
          "Jeśli palec jest mocno obrzęknięty, gorący, pojawia się ropa, gorączka albo zaczerwienienie rozchodzi się na stopę, najpierw skontaktuj się z lekarzem – może być potrzebne leczenie stanu zapalnego. Podolog zajmie się paznokciem, gdy infekcja zostanie opanowana.",
        ],
      },
      {
        heading: "Jak leczymy wrastające paznokcie w gabinecie Zdrowe Stopy",
        paragraphs: [
          "Każdą wizytę zaczynamy od oceny palca i ustalenia, dlaczego paznokieć wrasta. Od tego zależy dobór metody. Stosujemy leczenie zachowawcze – bez skalpela i bez usuwania płytki:",
        ],
        list: [
          "odbarczenie wału paznokciowego – delikatne usunięcie fragmentu płytki, który wbija się w skórę, co daje ulgę w bólu zwykle od razu po zabiegu,",
          "tamponada – założenie specjalnego materiału pod krawędź płytki, który odsuwa ją od wału i pozwala skórze się wygoić,",
          "klamry ortonyksyjne – korekcja kształtu płytki przy paznokciach nawracających lub mocno zakrzywionych; klamra stopniowo „prostuje” paznokieć tak, by rósł prawidłowo,",
          "zalecenia domowe – jak obcinać paznokcie, jakie obuwie wybierać i jak pielęgnować palec między wizytami.",
        ],
      },
      {
        heading: "Ile wizyt potrzeba?",
        paragraphs: [
          "Przy świeżym, niewielkim wrastaniu często wystarczy jedna lub dwie wizyty. Korekcja klamrą ortonyksyjną to proces rozłożony na kilka miesięcy – paznokieć musi odrosnąć w nowym kształcie, a klamrę co kilka tygodni kontrolujemy i w razie potrzeby wymieniamy. Dokładny plan omawiamy na pierwszej wizycie.",
        ],
      },
      {
        heading: "Jak zapobiegać nawrotom?",
        paragraphs: [
          "Paznokcie u stóp obcinaj prosto, nie za krótko, bez zaokrąglania rogów. Wybieraj buty z szerokim noskiem, a do sportu – obuwie dopasowane rozmiarem. Jeśli wrastanie wraca mimo to, warto rozważyć korekcję klamrą, która usuwa przyczynę, a nie tylko skutek.",
        ],
      },
    ],
    faq: [
      {
        question: "Czy leczenie wrastającego paznokcia boli?",
        answer:
          "Zabiegi podologiczne są przeprowadzane tak, by były jak najmniej odczuwalne. Najbardziej boli sam wrastający paznokieć – po odbarczeniu większość pacjentów odczuwa wyraźną ulgę od razu po wizycie.",
      },
      {
        question: "Czy wrastający paznokieć trzeba operować?",
        answer:
          "W większości przypadków nie. Metody podologiczne – odbarczenie, tamponada i klamry ortonyksyjne – pozwalają wyleczyć wrastanie bez zabiegu chirurgicznego. O konsultacji z chirurgiem decydujemy tylko wtedy, gdy wymaga tego stan palca.",
      },
      {
        question: "Czy można przyjść z wrastającym paznokciem u dziecka?",
        answer:
          "Tak. Wrastające paznokcie często pojawiają się u nastolatków, zwłaszcza uprawiających sport. Metody zachowawcze są bezpieczne także dla dzieci.",
      },
      {
        question: "Jak umówić wizytę?",
        answer:
          "Wizyty umawiamy telefonicznie pod numerem +48 501 408 528 lub +48 509 614 723. Gabinet mieści się w Jaworzu przy ul. Zdrojowej 78 – to kilkanaście minut samochodem z Bielska-Białej.",
      },
    ],
  },
  {
    slug: "grzybica-paznokci",
    name: "Grzybica i paznokcie zmienione chorobowo",
    metaTitle:
      "Grzybica paznokci stóp – leczenie u podologa | Jaworze, Bielsko-Biała",
    metaDescription:
      "Pogrubione, kruche, przebarwione paznokcie? Podolog oczyści i opracuje płytkę oraz dobierze terapię. Gabinet Zdrowe Stopy w Jaworzu – dla pacjentów z Bielska-Białej i okolic.",
    h1: "Grzybica paznokci i paznokcie zmienione chorobowo – podolog Jaworze",
    lead: "Zgrubiałe, żółte, kruszące się albo odchodzące od łożyska paznokcie to częsty problem, który rzadko mija sam. Podolog nie tylko poprawi wygląd płytki, ale przede wszystkim przygotuje ją do skutecznego leczenia i pomoże zatrzymać rozwój zmian.",
    image: Paznokcie,
    updated: "2026-10-25",
    sections: [
      {
        heading: "Jak wyglądają paznokcie zmienione chorobowo?",
        paragraphs: [
          "Najczęstszą przyczyną zmian jest grzybica paznokci (onychomikoza), ale podobnie mogą wyglądać paznokcie po urazach, zmienione przez łuszczycę albo nadmierny ucisk obuwia. Niepokojące objawy to:",
        ],
        list: [
          "żółte, brązowe lub białe przebarwienia płytki,",
          "pogrubienie paznokcia i trudność w jego obcinaniu,",
          "kruszenie się i rozwarstwianie płytki,",
          "odchodzenie paznokcia od łożyska,",
          "nieprzyjemny zapach, ból przy ucisku obuwia.",
        ],
      },
      {
        heading: "Dlaczego warto przyjść do podologa?",
        paragraphs: [
          "Preparaty przeciwgrzybicze z apteki często nie działają, bo nie są w stanie przeniknąć przez grubą, zmienioną płytkę. Podolog mechanicznie usuwa zmienioną część paznokcia, dzięki czemu leczenie dociera tam, gdzie powinno.",
          "Ważna jest też diagnostyka. Nie każde zmienione chorobowo paznokcie to grzybica – dlatego zanim zaczniemy terapię, oceniamy płytkę i, gdy to potrzebne, kierujemy na badanie mykologiczne lub do dermatologa. Leczenie dopasowane do przyczyny jest szybsze i skuteczniejsze.",
        ],
      },
      {
        heading: "Jak wygląda zabieg w gabinecie Zdrowe Stopy",
        paragraphs: [],
        list: [
          "wywiad i ocena paznokci – od kiedy trwa problem, czy dotyczy jednego czy kilku palców, czy towarzyszą mu zmiany skóry stóp,",
          "frezowanie płytki – bezbolesne ścienienie i usunięcie zmienionych fragmentów paznokcia,",
          "oczyszczenie przestrzeni pod płytką i wałów paznokciowych,",
          "aplikacja preparatów leczniczych i zalecenia do stosowania w domu,",
          "plan kolejnych wizyt kontrolnych.",
        ],
      },
      {
        heading: "Ile trwa leczenie?",
        paragraphs: [
          "Paznokcie u stóp rosną powoli – zdrowa płytka palucha odrasta w całości nawet przez kilkanaście miesięcy. Dlatego leczenie grzybicy paznokci wymaga cierpliwości i regularności. Wizyty kontrolne co kilka tygodni pozwalają na bieżąco usuwać zmienione fragmenty i ocenić, czy terapia działa.",
        ],
      },
      {
        heading: "Jak chronić się przed nawrotem grzybicy?",
        paragraphs: [],
        list: [
          "dokładnie osuszaj stopy, także przestrzenie między palcami,",
          "na basenie, w saunie i w hotelach używaj własnych klapek,",
          "zmieniaj skarpety codziennie, wybieraj przewiewne obuwie,",
          "dezynfekuj buty, w których chodziłeś w trakcie infekcji,",
          "nie pożyczaj cudzych przyborów do pielęgnacji paznokci.",
        ],
      },
    ],
    faq: [
      {
        question: "Czy grzybica paznokci przejdzie sama?",
        answer:
          "Zwykle nie. Grzybica paznokci ma tendencję do powolnego rozwoju i przenoszenia się na kolejne palce, dlatego warto zacząć leczenie jak najwcześniej.",
      },
      {
        question: "Czy frezowanie paznokcia boli?",
        answer:
          "Nie. Frezowanie obejmuje zmienioną, martwą część płytki i jest wykonywane tak, by nie podrażnić łożyska paznokcia.",
      },
      {
        question: "Czy podolog wystawia receptę na leki przeciwgrzybicze?",
        answer:
          "Nie – podolog nie jest lekarzem. Jeśli potrzebne jest leczenie doustne lub badanie mykologiczne, kierujemy do dermatologa. Opracowanie płytki w gabinecie znacząco zwiększa skuteczność takiego leczenia.",
      },
    ],
  },
  {
    slug: "odciski-i-modzele",
    name: "Odciski i modzele",
    metaTitle: "Usuwanie odcisków i modzeli – podolog Jaworze, Bielsko-Biała",
    metaDescription:
      "Bezbolesne usuwanie odcisków, modzeli i odcisków z rdzeniem. Szukamy przyczyny, żeby problem nie wracał. Gabinet podologiczny Zdrowe Stopy w Jaworzu koło Bielska-Białej.",
    h1: "Usuwanie odcisków i modzeli – podolog w Jaworzu",
    lead: "Odciski i modzele to obrona skóry przed nadmiernym uciskiem i tarciem. Usunięcie zgrubienia przynosi ulgę od razu, ale żeby problem nie wracał, trzeba też znaleźć jego przyczynę. Na wizycie robimy jedno i drugie.",
    image: Modzele,
    updated: "2026-10-25",
    sections: [
      {
        heading: "Odcisk czy modzel – czym się różnią?",
        paragraphs: [
          "Modzel to rozległe, płaskie zgrubienie naskórka, najczęściej na podeszwie pod głowami kości śródstopia lub na piętach. Zwykle nie boli mocno, ale bywa twardy i nieestetyczny.",
          "Odcisk jest mniejszy i ma rdzeń – twardy czop wnikający w głąb skóry, który przy chodzeniu uciska zakończenia nerwowe. Dlatego odciski bolą znacznie bardziej. Pojawiają się na palcach, między nimi (tzw. odciski miękkie) i na podeszwie.",
        ],
      },
      {
        heading: "Dlaczego powstają?",
        paragraphs: [],
        list: [
          "ciasne, twarde lub zbyt wysokie obuwie,",
          "deformacje stóp – haluksy, palce młotkowate, płaskostopie poprzeczne,",
          "nieprawidłowe obciążanie stopy podczas chodzenia,",
          "długotrwałe stanie, bieganie, górskie wędrówki,",
          "sucha skóra i brak regularnej pielęgnacji.",
        ],
      },
      {
        heading: "Jak wygląda zabieg?",
        paragraphs: [
          "Zgrubiały naskórek usuwamy skalpelem podologicznym i frezami – warstwa po warstwie, aż do zdrowej skóry. Przy odcisku usuwamy cały rdzeń, bo pozostawiony szybko odrasta. Zabieg jest bezbolesny, a większość pacjentów wychodzi z gabinetu z wyraźną ulgą przy chodzeniu.",
          "Na koniec nakładamy preparat łagodzący i – jeśli to potrzebne – odciążenie miejsca, które było uciskane.",
        ],
      },
      {
        heading: "Jak zapobiegamy nawrotom",
        paragraphs: [
          "Usunięcie odcisku bez zmiany warunków, które go spowodowały, daje efekt tylko na kilka tygodni. Dlatego oceniamy, skąd bierze się ucisk: oglądamy obuwie, sposób obciążania stopy i ewentualne deformacje. Doradzamy dobór butów, wkładek i odciążeń, a przy większych deformacjach podpowiadamy, do jakiego specjalisty warto się udać.",
        ],
      },
      {
        heading: "Czego nie robić w domu",
        paragraphs: [
          "Nie wycinaj odcisków żyletką ani nożyczkami i ostrożnie stosuj plastry z kwasami – łatwo uszkodzić zdrową skórę i wywołać stan zapalny. Szczególnie dotyczy to osób z cukrzycą i zaburzeniami krążenia, które każde zgrubienie powinny pokazać podologowi.",
        ],
      },
    ],
    faq: [
      {
        question: "Czy usuwanie odcisków boli?",
        answer:
          "Nie. Usuwamy martwy, zrogowaciały naskórek, który nie jest unerwiony. Pacjenci zwykle odczuwają ulgę zaraz po zabiegu.",
      },
      {
        question: "Jak często trzeba usuwać modzele?",
        answer:
          "To zależy od przyczyny. Przy dobrze dobranym obuwiu i odciążeniu modzele odrastają wolniej lub wcale. Osobom z tendencją do zrogowaceń zalecamy wizyty co 4–8 tygodni.",
      },
      {
        question: "Czy odcisk może wrócić?",
        answer:
          "Tak, jeśli nadal działa ucisk, który go wywołał. Dlatego poza usunięciem odcisku szukamy przyczyny i doradzamy, jak ją wyeliminować.",
      },
    ],
  },
  {
    slug: "brodawki-wirusowe",
    name: "Brodawki wirusowe (kurzajki)",
    metaTitle: "Usuwanie kurzajek na stopach – podolog Jaworze, Bielsko-Biała",
    metaDescription:
      "Brodawki wirusowe (kurzajki) na stopach u dorosłych i dzieci. Podolog odróżni kurzajkę od odcisku i dobierze leczenie. Gabinet Zdrowe Stopy w Jaworzu koło Bielska-Białej.",
    h1: "Brodawki wirusowe (kurzajki) na stopach – leczenie u podologa",
    lead: "Kurzajki na stopach są zaraźliwe, potrafią boleć przy chodzeniu i często wracają po domowych sposobach. W gabinecie oceniamy zmianę, dobieramy metodę leczenia do jej wielkości i wieku pacjenta oraz uczymy, jak nie zarażać domowników.",
    image: Brodawki,
    updated: "2026-10-25",
    sections: [
      {
        heading: "Czym są brodawki wirusowe?",
        paragraphs: [
          "Brodawki wirusowe (potocznie kurzajki) wywołuje wirus brodawczaka ludzkiego (HPV). Na stopach najczęściej spotykamy brodawki podeszwowe – wrastające w głąb skóry, płaskie, z widocznymi czarnymi punkcikami (zakrzepłymi naczyniami krwionośnymi). Mogą występować pojedynczo lub tworzyć skupiska, tzw. brodawki mozaikowe.",
          "Do zakażenia dochodzi najczęściej na basenach, w szatniach, pod prysznicami i w saunach – wszędzie tam, gdzie chodzimy boso po wilgotnej powierzchni.",
        ],
      },
      {
        heading: "Kurzajka czy odcisk?",
        paragraphs: [
          "Brodawka podeszwowa bywa mylona z odciskiem. Różnica ma znaczenie, bo leczy się je zupełnie inaczej – a usuwanie kurzajki jak odcisku może rozsiać wirusa. Brodawka zwykle przerywa linie papilarne skóry, ma czarne punkciki i boli bardziej przy ściskaniu z boków niż przy nacisku. Podolog odróżni te zmiany na pierwszej wizycie.",
        ],
      },
      {
        heading: "Jak leczymy kurzajki w gabinecie",
        paragraphs: [
          "Leczenie zaczynamy od opracowania zmiany – usuwamy zrogowaciały naskórek, który ją pokrywa, aby preparaty mogły zadziałać bezpośrednio na brodawkę. Następnie stosujemy metodę dobraną do rodzaju i wielkości zmiany oraz wieku pacjenta. Leczenie najczęściej wymaga kilku wizyt w odstępach co 1–3 tygodnie.",
          "Uzupełnieniem terapii są zalecenia domowe: jak zabezpieczać brodawkę, jak dbać o skórę stóp i jak ograniczyć ryzyko zarażenia innych członków rodziny.",
        ],
      },
      {
        heading: "Kurzajki u dzieci",
        paragraphs: [
          "Dzieci zarażają się brodawkami szczególnie często – na basenie, w przedszkolu czy na zajęciach sportowych. Dobieramy dla nich metody łagodne i jak najmniej stresujące. Warto przyjść wcześnie, zanim pojedyncza kurzajka rozsieje się na kolejne miejsca.",
        ],
      },
      {
        heading: "Kiedy do lekarza?",
        paragraphs: [
          "Jeśli zmiana szybko rośnie, krwawi, zmienia kolor lub wygląd, albo jeśli masz obniżoną odporność, skonsultuj się z dermatologiem. Nie każda narośl na stopie jest kurzajką.",
        ],
      },
    ],
    faq: [
      {
        question: "Czy kurzajki są zaraźliwe?",
        answer:
          "Tak. Wirus przenosi się przez kontakt ze skórą lub wilgotnymi powierzchniami, np. na basenie. Dlatego warto leczyć brodawki szybko i nosić klapki w miejscach publicznych.",
      },
      {
        question: "Ile wizyt potrzeba, żeby usunąć kurzajkę?",
        answer:
          "To zależy od wielkości i liczby zmian. Pojedyncza, świeża brodawka może zniknąć po kilku wizytach, starsze i mozaikowe wymagają dłuższego leczenia.",
      },
      {
        question: "Czy usuwacie kurzajki u dzieci?",
        answer:
          "Tak. Dla dzieci dobieramy łagodne metody, a zabieg prowadzimy spokojnie i w obecności rodzica.",
      },
    ],
  },
  {
    slug: "pekajace-piety",
    name: "Pękające pięty",
    metaTitle: "Pękające pięty – zabieg u podologa | Jaworze, Bielsko-Biała",
    metaDescription:
      "Suche, twarde i pękające pięty? Podolog usunie zrogowacenia, zabezpieczy pęknięcia i dobierze pielęgnację. Gabinet Zdrowe Stopy w Jaworzu – dla pacjentów z Bielska-Białej.",
    h1: "Pękające pięty – zabieg podologiczny w Jaworzu",
    lead: "Pęknięcia na piętach to nie tylko kwestia wyglądu. Głębokie szczeliny bolą, krwawią i mogą stać się wrotami zakażenia. Zabieg w gabinecie szybko przynosi ulgę, a dobrze dobrana pielęgnacja pozwala utrzymać efekt.",
    image: Pekajace,
    updated: "2026-10-25",
    sections: [
      {
        heading: "Skąd biorą się pękające pięty?",
        paragraphs: [
          "Skóra pięt jest gruba i naturalnie mniej elastyczna. Gdy dodatkowo jest przesuszona i pokryta warstwą zrogowaceń, pod ciężarem ciała zaczyna pękać. Sprzyjają temu:",
        ],
        list: [
          "buty z odkrytą piętą – klapki, sandały, japonki,",
          "długie stanie i nadwaga,",
          "suche powietrze w sezonie grzewczym i zbyt rzadkie nawilżanie stóp,",
          "cukrzyca, choroby tarczycy, łuszczyca i inne choroby skóry,",
          "grzybica skóry stóp, która może dawać podobne objawy.",
        ],
      },
      {
        heading: "Jak wygląda zabieg?",
        paragraphs: [
          "Zaczynamy od oceny skóry – sprawdzamy, czy przyczyną nie jest grzybica lub inna choroba, która wymaga osobnego leczenia. Następnie usuwamy zrogowaciały naskórek skalpelem i frezami, oczyszczamy i opracowujemy brzegi pęknięć, a na koniec aplikujemy preparaty regenerujące.",
          "Po zabiegu pięty są gładkie, a pęknięcia przestają się pogłębiać. Przy głębokich szczelinach może być potrzebnych kilka wizyt.",
        ],
      },
      {
        heading: "Pielęgnacja w domu",
        paragraphs: [
          "Efekt zabiegu utrzymuje się dłużej, jeśli między wizytami regularnie dbasz o stopy. Podpowiemy, jakie kremy wybrać – zwykle sprawdzają się preparaty z mocznikiem w stężeniu dobranym do grubości zrogowaceń – i jak często je stosować. Unikaj tarek i pumeksów używanych zbyt mocno: intensywne ścieranie pobudza skórę do jeszcze szybszego rogowacenia.",
        ],
      },
      {
        heading: "Osoby z cukrzycą",
        paragraphs: [
          "U diabetyków pęknięcia na piętach goją się wolniej i łatwiej ulegają zakażeniu. Jeśli chorujesz na cukrzycę, nie opracowuj pięt samodzielnie ostrymi narzędziami – zgłoś się do podologa. Więcej o opiece nad stopą cukrzycową przeczytasz na stronie poświęconej tej usłudze.",
        ],
      },
    ],
    faq: [
      {
        question: "Ile wizyt potrzeba przy pękających piętach?",
        answer:
          "Przy niewielkich pęknięciach zwykle wystarczy jedna wizyta i domowa pielęgnacja. Głębokie, bolesne szczeliny wymagają kilku zabiegów w odstępach 2–4 tygodni.",
      },
      {
        question: "Czy pękające pięty mogą być objawem choroby?",
        answer:
          "Tak – mogą towarzyszyć grzybicy, cukrzycy, chorobom tarczycy czy łuszczycy. Jeśli problem stale wraca mimo pielęgnacji, warto to sprawdzić.",
      },
    ],
  },
  {
    slug: "stopa-cukrzycowa",
    name: "Stopa cukrzycowa",
    metaTitle:
      "Stopa cukrzycowa – opieka podologiczna dla diabetyków | Jaworze",
    metaDescription:
      "Bezpieczna pielęgnacja stóp osób z cukrzycą: paznokcie, zrogowacenia, profilaktyka owrzodzeń. Gabinet podologiczny Zdrowe Stopy w Jaworzu, blisko Bielska-Białej.",
    h1: "Stopa cukrzycowa – podologiczna opieka nad stopami diabetyków",
    lead: "Cukrzyca z czasem osłabia czucie w stopach i pogarsza ukrwienie. Drobny odcisk czy skaleczenie, którego nie widać i nie czuć, może rozwinąć się w trudno gojącą się ranę. Regularna opieka podologiczna to jedna z najskuteczniejszych form profilaktyki.",
    image: Pedicure,
    updated: "2026-10-25",
    sections: [
      {
        heading: "Dlaczego stopy diabetyka wymagają szczególnej uwagi?",
        paragraphs: [
          "Długotrwale podwyższony poziom cukru uszkadza nerwy (neuropatia) i naczynia krwionośne. W efekcie osoba z cukrzycą może nie poczuć uwierającego buta, odcisku czy wrastającego paznokcia, a rany goją się wolniej i łatwiej ulegają zakażeniu. Tak rozwija się zespół stopy cukrzycowej.",
          "Dobra wiadomość jest taka, że większości powikłań można zapobiec – regularnymi oględzinami stóp, bezpieczną pielęgnacją i szybką reakcją na pierwsze niepokojące zmiany.",
        ],
      },
      {
        heading: "Co robimy na wizycie",
        paragraphs: [],
        list: [
          "oglądamy stopy i oceniamy stan skóry, paznokci i miejsc narażonych na ucisk,",
          "bezpiecznie skracamy i opracowujemy paznokcie, także pogrubione,",
          "usuwamy odciski, modzele i zrogowacenia, zanim pod nimi rozwinie się uszkodzenie skóry,",
          "zajmujemy się wrastającymi paznokciami i pęknięciami pięt,",
          "doradzamy w doborze obuwia, skarpet i codziennej pielęgnacji.",
        ],
      },
      {
        heading: "Jak często przychodzić?",
        paragraphs: [
          "Osobom z cukrzycą zalecamy wizyty co 4–6 tygodni. Regularność pozwala wychwycić zmiany na wczesnym etapie, kiedy łatwo je opanować.",
        ],
      },
      {
        heading: "Codzienna profilaktyka w domu",
        paragraphs: [],
        list: [
          "oglądaj stopy codziennie, także podeszwy – możesz użyć lusterka,",
          "myj stopy w letniej wodzie i dokładnie osuszaj przestrzenie między palcami,",
          "nawilżaj skórę, ale nie wcieraj kremu między palce,",
          "nie chodź boso, nawet w domu,",
          "nie używaj tarek, żyletek ani plastrów na odciski,",
          "przed włożeniem butów sprawdź ręką, czy w środku nie ma kamyka lub szwu, który uwiera.",
        ],
      },
      {
        heading: "Kiedy pilnie do lekarza?",
        paragraphs: [
          "Rana, pęcherz lub owrzodzenie, które nie goi się w ciągu kilku dni, zaczerwienienie, obrzęk, ocieplenie stopy albo zmiana jej kształtu to sygnały, z którymi trzeba od razu zgłosić się do lekarza prowadzącego lub do poradni stopy cukrzycowej. Podolog prowadzi profilaktykę i pielęgnację – nie zastępuje leczenia lekarskiego.",
        ],
      },
    ],
    faq: [
      {
        question: "Czy osoba z cukrzycą może iść na zwykły pedicure?",
        answer:
          "Nie zalecamy tego. W salonie kosmetycznym łatwo o skaleczenie, którego diabetyk może nie poczuć. Pedicure podologiczny wykonywany jest z myślą o bezpieczeństwie stóp i sterylnymi narzędziami.",
      },
      {
        question: "Czy potrzebne jest skierowanie od diabetologa?",
        answer:
          "Nie. Na wizytę możesz umówić się bezpośrednio telefonicznie. Warto zabrać ze sobą listę przyjmowanych leków.",
      },
      {
        question: "Jak często diabetyk powinien chodzić do podologa?",
        answer:
          "Zwykle co 4–6 tygodni. Przy problemach z paznokciami lub zrogowaceniami czasem częściej – ustalamy to indywidualnie.",
      },
    ],
  },
  {
    slug: "pedicure-podologiczny",
    name: "Pedicure podologiczny",
    metaTitle: "Pedicure podologiczny (leczniczy) – Jaworze, Bielsko-Biała",
    metaDescription:
      "Pedicure podologiczny: ocena stanu stóp, opracowanie paznokci i zrogowaceń, sterylne narzędzia. Gabinet podologiczny Zdrowe Stopy w Jaworzu koło Bielska-Białej.",
    h1: "Pedicure podologiczny w Jaworzu",
    lead: "Pedicure podologiczny to zabieg, w którym najważniejsze jest zdrowie stóp. Wykonuje go podolog, który przy okazji pielęgnacji ocenia skórę i paznokcie, wychwytuje pierwsze objawy problemów i podpowiada, jak im zapobiegać.",
    image: Pedicure,
    updated: "2026-10-25",
    sections: [
      {
        heading: "Czym różni się od zwykłego pedicure?",
        paragraphs: [
          "Klasyczny pedicure w salonie kosmetycznym skupia się na wyglądzie. Pedicure podologiczny to zabieg „na sucho”, bez moczenia stóp, wykonywany sterylnymi narzędziami i frezarką podologiczną. Dzięki temu dokładnie widać zrogowacenia i zmiany na skórze, a ryzyko zakażenia jest minimalne.",
          "Podolog nie tylko opracowuje paznokcie i skórę, ale też ocenia, czy nie dzieje się z nimi nic niepokojącego – np. początki grzybicy, wrastania paznokcia czy odcisków.",
        ],
      },
      {
        heading: "Co obejmuje zabieg?",
        paragraphs: [],
        list: [
          "ocenę stanu skóry i paznokci stóp,",
          "skrócenie i opracowanie paznokci, oczyszczenie wałów paznokciowych,",
          "usunięcie zrogowaciałego naskórka i drobnych zgrubień,",
          "opracowanie pięt,",
          "aplikację preparatów pielęgnacyjnych dobranych do potrzeb skóry,",
          "zalecenia do domowej pielęgnacji.",
        ],
      },
      {
        heading: "Dla kogo?",
        paragraphs: [
          "Pedicure podologiczny polecamy każdemu, kto chce zadbać o zdrowie stóp – a szczególnie osobom starszym, które mają trudność z samodzielnym obcinaniem paznokci, osobom z cukrzycą i problemami z krążeniem, sportowcom, osobom dużo chodzącym i stojącym w pracy oraz kobietom w ciąży.",
        ],
      },
      {
        heading: "Jak często?",
        paragraphs: [
          "Profilaktycznie wystarczy wizyta co 2–3 miesiące. Przy skłonności do zrogowaceń, pogrubionych paznokci lub u osób z cukrzycą zalecamy częstsze wizyty – co 4–6 tygodni.",
        ],
      },
    ],
    faq: [
      {
        question: "Czy przed pedicure podologicznym trzeba moczyć stopy?",
        answer:
          "Nie. Zabieg wykonujemy na sucho – dzięki temu podolog dokładnie widzi zrogowacenia i zmiany na skórze.",
      },
      {
        question: "Ile trwa pedicure podologiczny?",
        answer:
          "Zwykle około godziny. Pierwsza wizyta może potrwać nieco dłużej, bo obejmuje dokładny wywiad i ocenę stóp.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
