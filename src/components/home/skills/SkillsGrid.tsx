import { skills } from "data/home";
import SkillsCard from "./SkillsCard";

export default function SkillsGrid() {
  return (
    <div className="grid justify-items-center grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-8 max-md:gap-6 mt-10 xl:px-10">
      {skills.map((skill, index) => {
        return <SkillsCard key={index} skill={skill} />;
      })}
    </div>
  );
}