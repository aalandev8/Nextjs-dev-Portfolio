import { skills } from "../const";
import { SkillsCard } from "./ui";

export const Skills = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <SkillsCard
              key={index}
              logo={skill.logo}
              alt={skill.alt}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
