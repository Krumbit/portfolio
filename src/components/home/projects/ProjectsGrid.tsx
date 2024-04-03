import { projects } from "data/global";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ preview }: { preview: boolean }) {
  const projectsList = [...projects].slice(0, preview ? 3 : undefined);

  return (
    <div className="m-10 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
      {projectsList.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </div>
  );
}
