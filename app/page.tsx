import {Hero, Skills, Experiencie, AboutMe, MyProjects, ContactMe} from '@/app/_components'

export default function Home() {
  return (
    <section className='mt-10 md:mt-0'>
      <Hero />
      <Skills />
      <Experiencie />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </section>
  );
}
