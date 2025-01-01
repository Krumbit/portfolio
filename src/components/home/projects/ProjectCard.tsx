import Image from "next/image";
import { Project } from "types";
import { ICONS } from "util/constants";

interface ProjectCardProps {
  project: Project;
}

interface LinkIconProps extends ProjectCardProps {
  className?: string;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="max-h-sm flex max-w-md flex-col justify-start">
      <a
        className="group relative w-full rounded-3xl border-2 border-invertbg p-2 transition-transform duration-100 hover:-translate-y-1 hover:border-primary hover:dark:border-primary"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkIcon
          project={project}
          className="opacity-0 transition-opacity duration-100 group-hover:opacity-100"
        />
        <Image
          className="w-full rounded-xl group-hover:opacity-90 group-hover:dark:opacity-70"
          src={project.cover}
          alt={`Cover image for ${project.name}`}
          width={1280}
          height={720}
        />
      </a>
      <div className="flex flex-col justify-center">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <h3 className="mb-2 mt-4 text-center text-xl font-bold">{project.name}</h3>
        </a>
        <p className="text-center text-invertbg text-opacity-75">{project.description}</p>
      </div>
      <ul className="mt-1 flex list-none flex-wrap items-center justify-center">
        {project.tags.map((tag) => {
          return (
            <li key={tag}>
              <div className="m-1 rounded-lg bg-invertbg bg-opacity-10 px-2 py-1">{tag}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function LinkIcon({ project, className }: LinkIconProps) {
  return (
    <div
      className={`absolute right-4 top-4 z-10 w-8 rounded-full bg-white bg-opacity-10 ${className}`}
    >
      {project.link ? (
        <Image
          className="w-full p-1 invert"
          src={project.github ? ICONS.Github : ICONS.ExternalLink}
          width={100}
          height={100}
          alt="Leave Page Icon"
        />
      ) : null}
    </div>
  );
}
