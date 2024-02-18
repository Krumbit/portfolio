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
      <h3 className="mx-4 mt-2 text-center text-xl italic text-primary max-md:text-lg max-sm:text-base">
        More projects can be found on my&nbsp;
        <Link href={LINKS.Github} className="font-bold underline underline-offset-4">
          GitHub
        </Link>
        .
      </h3>
    </Section>
  );
}
