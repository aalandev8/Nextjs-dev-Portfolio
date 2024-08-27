import Image from "next/image";
import { SocialBtn } from "./ui";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center md:flex-row md:items-center md:text-left container mx-auto px-4">
      <div className="order-2 md:order-1 md:w-1/2 md:pr-8">
        <p className="mt-4 text-4xl">
          Hello, I&#8217;m <span className="font-bold">Facundo Duque.</span>
        </p>
        <h1 className="mt-2 text-4xl font-bold">
          Full-stack <span className=" border-text ">Developer</span>
        </h1>
        <p className="mt-2 text-4xl">
          Based in <span className="font-bold">Uruguay</span>
        </p>
        <p className="mt-2 text-lg text-gray-500">
          I&#8217;m a versatile web developer passionate with web3. <br></br> I bring creative ideas and technical solutions
          to life, creating engaging user experiences and robust
          functionalities . 
        </p>
        <div className="mt-4 flex justify-center lg:justify-normal space-x-4">
          <SocialBtn
            link="https://www.linkedin.com/in/facundo-duque/"
            src="/Hero-logos/linkedinLogo.png"
            alt="Linkedin Logo"
          />
          <SocialBtn
            link="https://github.com/aalandev8"
            src="/Hero-logos/githubLogo.png"
            alt="Linkedin Logo"
          />
          <SocialBtn
            link="mailto:aalan.dev8@gmail.com}"
            src="/Hero-logos/mailLogo.png"
            alt="Mail Logo"
          />
        </div>
      </div>
      <div className="order-1 md:order-2 md:w-1/2 md:flex md:justify-end">
        <Image
          src={"/coding-2-31.png"}
          alt="Hero image"
          width={800}
          height={800}
          className="w-full max-w-xs h-auto md:max-w-md"
        />
      </div>
    </section>
  );
};
