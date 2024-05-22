import { Hero } from "./_components";
import { Experiencie } from "./_components/Experience";
import { Skills } from "./_components/Skills";
import { AboutMe } from "./_components/AboutMe";
import { MyProjects } from "./_components/MyProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experiencie />
      <AboutMe />
      <MyProjects />
    </>
  );
}
