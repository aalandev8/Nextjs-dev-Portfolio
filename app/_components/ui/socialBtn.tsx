import Image from "next/image";

type SocialBtnProps = {
  link: string;
  src: string;
  alt: string;
};

export const SocialBtn = ({ link, src, alt }: SocialBtnProps) => {
  return (
    <a
      href={link}
      target={link.startsWith("mailto:") ? "_self" : "_blank"}
      rel={link.startsWith("mailto:") ? "" : "noopener noreferrer"}
      className="group p-2 border rounded border-black transition-colors duration-300 ease-in-out hover:bg-black"
    >
      <div className="w-8 h-8 flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={60}
          height={60}
          className="group-hover:filter group-hover:invert transition-filter duration-300 ease-in-out"
        />
      </div>
    </a>
  );
};
