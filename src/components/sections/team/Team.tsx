import Image, { StaticImageData } from "next/image";
import MemberImage from "@/assets/sections/team/387872201_6208764695892156_305300303520319174_n.jpg";
import MemberImageTwo from "@/assets/sections/aboutUs/about_us.png";

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  imageSrc: StaticImageData | string;
};

const TeamMember = ({ name, role, bio, imageSrc }: TeamMemberProps) => {
  return (
    <div
      id="team"
      className="flex flex-col items-center p-6 xl:p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 w-full transform hover:-translate-y-1"
    >
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-36 bg-blue-50 rounded-br-3xl -z-10 opacity-70"></div>

      <div className="relative w-48 h-48 xl:w-56 xl:h-56 mb-6 overflow-hidden rounded-full border-4 border-blue-200 shadow-md">
        <Image
          src={imageSrc}
          alt={`${name} - ${role}`}
          fill
          sizes="(max-width: 768px) 100vw, 224px"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="text-center w-full">
        <h3 className="text-xl xl:text-2xl font-bold mb-2 text-[#007BA7]">
          {name}
        </h3>

        <p className="text-gray-700 mb-6 text-base md:text-[1.15rem]">{bio}</p>
      </div>

      {/* Bottom decorative element */}
      <div className="mt-4 xl:mt-6 w-32 h-1 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full"></div>
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
    },
    {
      name: "Wiktoria Cięciara",
      role: "Podolożka, Kosmetolog",
      bio: "Łączy wiedzę z podologii i kosmetologii, zapewniając kompleksową opiekę nad stopami. Jej holistyczne podejście do pacjenta oraz naturalna empatia sprawiają, że zabiegi przebiegają w przyjemnej atmosferze, a efekty terapii są długotrwałe.",
      imageSrc: MemberImage,
    },
  ];

  return (
    <section
      id="zespol"
      className="w-[90%] md:w-[80%] mx-auto mt-10 md:mt-16 py-20 relative"
    >
      <div className="relative z-10">
        <div className="mb-8">
          <h2 className="text-[#007BA7] text-[1.65rem] md:text-[2.125rem] font-bold mb-4">
            Poznaj nasz zespół
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
