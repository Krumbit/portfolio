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

  return (
    <div
      ref={ref}
      className={`relative aspect-square w-full min-w-[9.5rem] max-w-[12rem] rounded-3xl border-2 border-invertbg border-opacity-5 bg-invertbg bg-opacity-5 transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0 motion-reduce:opacity-100"
      } card-stagger`}
    >
      <div className="container-type-size absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl bg-bg bg-opacity-75 opacity-0 backdrop-blur-sm transition-opacity duration-250 hover:opacity-100">
        <h5 className="m-2 h-fit w-fit text-center align-middle text-skilldescription">
          <strong className="text-lg max-md:text-base">{skill.name}</strong>
          <br />
          {skill.description}
        </h5>
      </div>
      <div className="z-10 flex h-full w-full flex-col items-center justify-center">
        <Image
          className="w-1/2"
          src={
            resolvedTheme === "light" && skill.lightThemeImage ? skill.lightThemeImage : skill.image
          }
          alt={`${skill.name} Skill Image`}
          width={100}
          height={100}
        />
        <h3 className="mt-4 text-center text-2xl font-bold max-xl:text-xl max-md:text-lg">
          {skill.name}
        </h3>
      </div>
    </div>
  );
}
