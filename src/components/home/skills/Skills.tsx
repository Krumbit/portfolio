import Section from "components/global/Section";
import { SectionSubtitle, SectionTitle } from "components/global/SectionTitles";
import SkillsGrid from "components/home/skills/SkillsGrid";

export default function Skills() {
  return (
    <Section id="skills" className="items-center mx-10 max-md:mt-14">
      <div className="md:ml-auto">
        <SectionTitle className="max-md:text-center" text="skills:" />
        <SectionSubtitle className="m-4 max-md:text-center md:text-right" text="what i use and what i can do" />
      </div>
      <SkillsGrid />
    </Section>
  );
}