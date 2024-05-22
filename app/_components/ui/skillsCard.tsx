import Image from "next/image";

type SkillsCardProps = {
  name: string;
  logo: string;
  alt: string;
};

export const SkillsCard = ({ name, logo, alt }: SkillsCardProps) => {
  return (
    <div className="group p-4 border border-black rounded-lg transition-colors duration-300 ease-in-out hover:bg-black w-40 h-40 flex flex-col items-center justify-center">
      <div className="w-16 h-16 flex items-center justify-center mb-2">
        <Image
          src={logo}
          alt={alt}
          width={64}
          height={64}
          className="group-hover:filter group-hover:invert transition-filter duration-300 ease-in-out"
        />
      </div>
      <p className="text-center text-lg font-bold group-hover:text-white">
        {name}
      </p>
    </div>
  );
};
