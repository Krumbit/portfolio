import Section from "components/global/Section";
import { SectionSubtitle, SectionTitle } from "components/global/SectionTitles";
import ProjectsGrid from "components/home/projects/ProjectsGrid";
import Link from "next/link";

export default function Projects() {
  return (
    <Section id="projects" className="items-center justify-start">
      <SectionTitle text="projects:" />
      <SectionSubtitle className="my-4" text="a few projects i've worked on" />
      <ProjectsGrid preview />
      <h3 className="mx-4 mt-2 text-center text-xl italic text-primary max-md:text-lg max-sm:text-base">
        More projects can be found&nbsp;
        <Link href="/projects" className="font-bold underline underline-offset-4">
          here
        </Link>
        .
      </h3>
    </Section>
  );
}
