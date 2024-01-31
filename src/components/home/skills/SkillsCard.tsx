"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Skill } from "types";

interface SkillsCardProps {
  skill: Skill;
}

export default function SkillsCard({ skill }: SkillsCardProps) {
  const { resolvedTheme } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true });

  return <>
    <div ref={ref} className={`min-w-[9.5rem] max-w-[12rem] aspect-square relative bg-invertbg bg-opacity-5 rounded-3xl border-2 border-opacity-5 border-invertbg transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0 motion-reduce:opacity-100"} card-stagger`}>
      <div className="container-type-size w-full h-full absolute top-0 left-0 flex justify-center items-center bg-bg bg-opacity-75 backdrop-blur-sm rounded-3xl opacity-0 transition-opacity duration-250 hover:opacity-100">
        <h5 className="w-fit h-fit text-skilldescription text-center align-middle m-2">
          <strong className="text-lg max-md:text-base">{skill.name}</strong>
          <br />
          {skill.description}
        </h5>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center z-10">
        <Image className="w-1/2" src={resolvedTheme === "light" && skill.lightThemeImage ? skill.lightThemeImage : skill.image} alt={`${skill.name} Skill Image`} width={100} height={100} />
        <h3 className="font-bold text-2xl max-xl:text-xl max-md:text-lg mt-4">{skill.name}</h3>
      </div>
    </div>
  </>;
}