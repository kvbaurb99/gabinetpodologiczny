// Footer.js
import LogoImage from "@/assets/logo.svg";
import Image from "next/image";

const menuItems = [
  { title: "Strona główna", href: "#" },
  { title: "O nas", href: "#about" },
  { title: "Oferta", href: "#offer" },
  { title: "Zespół", href: "#team" },
  { title: "Opinie", href: "#reviews" },
];

const Footer = () => {
  return (
    <footer className="bg-black mt-10 text-white py-12">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col gap-4">
            <Image
              src={LogoImage}
              alt="Zdrowe Stopy Logo"
              width={240}
              loading="lazy"
              height={160}
              className="object-cover h-[80px]"
            />
            <p className="text-gray-400 text-sm">
              Gabinet Podologiczny Zdrowe Stopy - Twoja kompleksowa opieka
              podologiczna w profesjonalnych warunkach. Specjalizujemy się w
              diagnostyce i leczeniu schorzeń stóp, zapewniając najwyższy
              standard usług i indywidualne podejście do każdego pacjenta.
            </p>
          </div>

          {/* Column 2: Menu */}
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold mb-1.5">Menu</p>
            <ul className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 transition-colors duration-300 no-underline hover:text-white"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold mb-1.5">Kontakt</p>
            <div className="flex flex-col gap-2 text-gray-400">
              <p>ul. Zdrojowa 78</p>
              <p>43-384 Jaworze</p>
              <p>Tel: +48 501 408 528</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Zdrowe Stopy. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
