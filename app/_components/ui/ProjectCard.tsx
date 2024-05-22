import Image from "next/image";
import { LinkSVG } from "@/app/assets";

type ProjectCardProps = {
  number: number;
  title: string;
  description: string;
  image: string;
  isReverse?: boolean;
  href: string;
};

export const ProjectCard = ({
  number,
  title,
  description,
  image,
  isReverse,
  href,
}: ProjectCardProps) => {
  return (
    <div
      className={`py-12 bg-black ${
        isReverse
          ? "flex flex-col md:flex-row-reverse"
          : "flex flex-col md:flex-row"
      }`}
    >
      <div className="w-full md:w-1/2 md:px-8">
        <div className="mb-4 text-white">
          <p className="text-3xl font-bold">{number}</p>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-lg">{description}</p>
          <a href={href}>
            <LinkSVG />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:px-8">
        <Image src={image} alt={title} width={3000} height={3000} />
      </div>
    </div>
  );
};
