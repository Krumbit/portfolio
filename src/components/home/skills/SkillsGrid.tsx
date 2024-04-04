"use client";
import { skills } from "data/home";
import SkillsCard from "./SkillsCard";
import { useState } from "react";
import { Skill } from "types";

export default function SkillsGrid() {
  const [showMore, setShowMore] = useState<boolean>();
  const additionalSkills = skills.slice(12);

  return (
    <>
      <Grid items={skills.slice(0, 12)} />
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          showMore ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <Grid items={additionalSkills} />
        </div>
      </div>
      <button
        className="mt-8 rounded-full border-2 px-10 py-2 text-xl transition-colors duration-250 hover:bg-invertbg hover:text-bg"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "show less" : "show more"}
      </button>
    </>
  );
}

function Grid({ items }: { items: Skill[] }) {
  return (
    <div className="mt-10 grid grid-cols-6 justify-items-center gap-8 max-lg:grid-cols-4 max-md:grid-cols-3 max-md:gap-6 max-sm:grid-cols-2 xl:px-10">
      {items.map((skill, index) => {
        return <SkillsCard key={index} skill={skill} />;
      })}
    </div>
  );
}
