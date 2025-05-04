import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { Experience } from './Experience';
import { data } from './assets/data';
import { Formation } from './Formation';
import { Projects } from './Projects';
import { ProjectsGrid } from './ProjectsGrid';
import { Email } from './Email';
import { Redes } from './Redes';
import { Stack } from './Stack';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/atkinson-hyperlegible-next';
export const App = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.querySelector('html').setAttribute('class', theme);
    }
  }, []);
  return (
    <>
      <Toaster />
      <Header name={data.short_name} />
      <main className="px-4 mx-auto md:px-14 max-w-7xl sm:mt-0 z-10 relative text-black">
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
