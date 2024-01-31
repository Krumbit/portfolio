import Section from "components/global/Section";
import { SectionSubtitle, SectionTitle } from "components/global/SectionTitles";
import ProjectsGrid from "components/home/projects/ProjectsGrid";
import Link from "next/link";
import { LINKS } from "util/constants";

export default function Projects() {
  return (
    <Section id="projects" className="items-center">
      <SectionTitle text="projects:" />
      <SectionSubtitle className="my-4" text="a few projects i've worked on" />
      <ProjectsGrid />
      <h3 className="text-primary text-center italic text-xl max-md:text-lg max-sm:text-base mt-2 mx-4">
        More projects can be found on my&nbsp;
        <Link href={LINKS.Github} className="font-bold underline underline-offset-4">GitHub</Link>
        .
      </h3>
    </Section>
  );
}