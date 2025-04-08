import { H2, P, SectionWrapper } from "@/global-styles/global";
import Image, { StaticImageData } from "next/image";
import MemberImage from "@/assets/387872201_6208764695892156_305300303520319174_n.jpg";
import MemberImageTwo from "@/assets/sections/aboutUs/about_us.png";

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  imageSrc: StaticImageData | string;
  specialties: string[];
};

const TeamMember = ({
  name,
  role,
  bio,
  imageSrc,
  specialties,
}: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center p-6 xl:p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 w-full transform hover:-translate-y-1">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-blue-50 rounded-br-3xl -z-10 opacity-70"></div>

      <div className="relative w-48 h-48 xl:w-56 xl:h-56 mb-6 overflow-hidden rounded-full border-4 border-blue-200 shadow-md">
        <Image
          src={imageSrc}
          alt={`${name} - ${role}`}
          fill
          sizes="(max-width: 768px) 100vw, 224px"
          className="object-cover"
          priority
        />
      </div>

      <div className="text-center w-full">
        <h3 className="text-2xl font-bold text-blue-800 mb-2">{name}</h3>

        <P className="text-gray-700 mb-6">{bio}</P>
      </div>

      {/* Bottom decorative element */}
      <div className="mt-6 w-32 h-1 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full"></div>
    </div>
  );
};

export default function Team() {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Jolanta Cięciara",
      role: "Dyplomowana Podolożka",
      bio: "Specjalistka z 8-letnim doświadczeniem w leczeniu schorzeń stóp. Absolwentka prestiżowego kursu podologii klinicznej. Pasjonatka nowoczesnych technik leczenia, regularnie poszerzająca swoją wiedzę na międzynarodowych szkoleniach.",
      imageSrc: MemberImageTwo,
      specialties: ["Wrastające paznokcie", "Grzybica", "Modzele", "Odciski"],
    },
    {
      name: "Wiktoria Cięciara",
      role: "Podolożka, Kosmetolog",
      bio: "Łączy wiedzę z podologii i kosmetologii, zapewniając kompleksową opiekę nad stopami. Jej holistyczne podejście do pacjenta oraz naturalna empatia sprawiają, że zabiegi przebiegają w przyjemnej atmosferze, a efekty terapii są długotrwałe.",
      imageSrc: MemberImage,
      specialties: [
        "Pielęgnacja stóp diabetyków",
        "Zabiegi regeneracyjne",
        "Ortonyksja",
        "Rekonstrukcja paznokci",
      ],
    },
  ];

  return (
    <SectionWrapper id="zespol" className="py-20 relative">
      <div className="relative z-10">
        <div className="mb-8 xl:mb-16">
          <H2 className="text-blue-900 mb-4">Poznaj nasz zespół</H2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
