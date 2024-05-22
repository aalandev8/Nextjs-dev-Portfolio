import { ExperienceCard } from "./ui";
import { experiences } from "../const";

export const Experiencie = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb-8 text-white text-center">
          My <span className="font-bold">Experience</span>
        </h2>
        <div className="flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              icon={experience.icon}
              name={experience.name}
              duration={experience.duration}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
