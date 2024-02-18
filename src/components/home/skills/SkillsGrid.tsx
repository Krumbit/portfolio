import { skills } from "data/home";
import SkillsCard from "./SkillsCard";

export default function SkillsGrid() {
  return (
    <div className="mt-10 grid grid-cols-6 justify-items-center gap-8 max-lg:grid-cols-4 max-md:grid-cols-3 max-md:gap-6 max-sm:grid-cols-2 xl:px-10">
      {skills.map((skill, index) => {
        return <SkillsCard key={index} skill={skill} />;
      })}
    </div>
  );
}
