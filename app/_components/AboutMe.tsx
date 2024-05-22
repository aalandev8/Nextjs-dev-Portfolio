import Image from "next/image";

export const AboutMe = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 relative">
          <div className="absolute inset-0 flex items-center justify-center"></div>
          <Image
            src="/photoOfme.jpeg"
            alt="About Me"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-1/2 md:ml-6">
          <h2 className="text-3xl mb-4">
            About <span className="font-bold">Me</span>
          </h2>
          <p className="text-lg text-[#71717A]">
            Since I was young, I've always been passionate about technology. At
            the age of 8, I received my first PC, and that sparked my interest
            in exploring the fascinating world of technology. <br></br>
            <br></br>
            During my adolescence, I pursued a computer science program in high
            school, immersing myself in everything related to programming. I
            vividly recall my first programming language being Java.<br></br>
            <br></br>
            After completing high school, I delved into various personal
            projects until I stumbled upon the world of Blockchain. This
            discovery further fueled my passion for programming, prompting me to
            delve into solidity development and enhance my web development
            skills, both front-end and back-end. I learned Javascript,
            Typescript, and Nextjs, among other essential tools that remain
            integral to my daily routine as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};
