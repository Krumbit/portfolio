import { SectionSubtitle, SectionTitle } from "components/global/SectionTitles";
import Navbar from "components/global/navbar/Navbar";
import ProjectsGrid from "components/home/projects/ProjectsGrid";
import { projectsNavbarElements } from "data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar mainLink="/" subLinks={projectsNavbarElements} />
      <main>
        <section id="projects" className="flex min-h-[100lvh] flex-col items-center gap-4">
          <SectionTitle className="mt-28" text="projects" />
          <SectionSubtitle
            className="mx-2 text-center"
            text="a (mostly) full list of my past projects"
          />
          <ProjectsGrid preview={false} />
        </section>
      </main>
    </>
  );
}
