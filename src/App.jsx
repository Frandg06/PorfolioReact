import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { Experience } from "./Experience";
import { data } from "./assets/data";
import { Formation } from "./Formation";
import { Projects } from "./Projects";
import { ProjectsGrid } from "./ProjectsGrid";
import { Email } from "./Email";
import { Redes } from "./Redes";

export const App = () => {
  return (
    <>
      <Header name={data.short_name} />
      <main className="max-w-5xl px-4 mx-auto mt-8 sm:mt-0">
        <HeroSection user={data} />
        <Experience user={data} />
        <Formation user={data} />
        <Projects user={data} />
        <ProjectsGrid user={data} />
        <Redes user={data} />
        <Email />
      </main>
    </>
  );
};
