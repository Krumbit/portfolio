import Image from "next/image";
import { Project } from "types";
import { ICONS } from "util/constants";

interface ProjectCardProps {
  project: Project
}

interface LinkIconProps extends ProjectCardProps {
  className?: string
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-start max-w-md max-h-sm">
      <a className="group w-full relative border-invertbg border-2 p-2 rounded-3xl transition-all duration-100 hover:border-primary hover:dark:border-primary hover:-translate-y-1" href={project.link} target="_blank" rel="noopener noreferrer">
        <LinkIcon project={project} className="transition-opacity duration-100 opacity-0 group-hover:opacity-100" />
        <Image className="rounded-xl w-full group-hover:opacity-70" src={project.cover} alt={`Cover image for ${project.name}`} width={1280} height={720} />
      </a>
      <div className="flex flex-col justify-center">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <h3 className="text-center font-bold text-xl mt-4 mb-2">
            {project.name}
          </h3>
        </a>
        <h4 className="text-center text-invertbg text-opacity-75">
          {project.description}
        </h4>
      </div>
    </div>
  );
}

export function LinkIcon({ project, className }: LinkIconProps) {
  return <div className={`w-8 absolute top-4 right-4 z-10 rounded-full bg-white bg-opacity-10 ${className}`}>
    {
      project.link ?
        <Image className="w-full p-1 dark:invert" src={project.github ? ICONS.Github : ICONS.ExternalLink} width={100} height={100} alt="Leave Page Icon" />
        : null
    }
  </div>;
}