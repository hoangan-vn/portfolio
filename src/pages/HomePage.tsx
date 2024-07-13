import { FC } from 'react';

import About from '~/components/about/About';
import Experience from '~/components/experience/Experience';
import Contact from '~/components/contact/Contact';
import Intro from '~/components/intro/Intro';
import Projects from '~/components/projects/Projects';
import Skills from '~/components/skills/Skills';

const HomePage: FC = (): JSX.Element => {
  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
