import { ProjectCard } from "./ui";

export const MyProjects = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-white mb-8">
          My <span className="font-bold">Projects</span>
        </h2>
        <div className="flex flex-col justify-center w-full text-left">
          <ProjectCard
            number={1}
            title="German Diaz PH - Photographer portfolio"
            description="Complete photographer portfolio for a personal client using Nextjs and Tailwindcss. Currently features are still being developed, the final version will include Strappi as a CMS so that the client can manage the photos in their own way."
            image="/ProjectsPictures/germandiazph.com_.png"
            isReverse={false}
            href="https://germandiazph.com"
          />
          <ProjectCard
          number={2}
          title="NFT Claim Page"
          description="NFT minting page to claim my custom token 'Aalandev Token' on ETH and Polkadot. In this project, I created a smart contract deployed on ETH and PolkadotJS API, once both collections are on each Blockchain, they are manipulated from the frontend."
          image="/ProjectsPictures/germandiazph.com_.png"
          isReverse={true}
          href="/"
          />
        </div>
      </div>
    </section>
  );
};
