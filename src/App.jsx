import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { Experience } from './Experience';
import { data } from './assets/data';
import { Formation } from './Formation';
import { Projects } from './Projects';
import { ProjectsGrid } from './ProjectsGrid';
import { Email } from './Email';
import { Redes } from './Redes';
import { Marquee } from './Marque';
import { Stack } from './Stack';

export const App = () => {
  return (
    <>
      <Header name={data.short_name} />
      <main className="px-4 mx-auto md:-8 max-w-7xl sm:mt-0">
        <Marquee pauseOnHover className="[--duration:20s]"></Marquee>
        <HeroSection user={data} />
        <Experience user={data} />
        <Projects user={data} />
        <ProjectsGrid user={data} />
        <Stack user={data} />
        <Formation user={data} />
        <Email />
        <Redes user={data} />
      </main>
    </>
  );
};
