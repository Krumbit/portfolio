import { projects } from "data/home";
import ProjectCard from "./ProjectCard";
import { Project } from "types";
import { lowestMultipleAboveNumber } from "util/helpers";

export default function ProjectsGrid() {
  const projectsList = [...projects, ...getComingSoonCards()];

  return (
    <div className="m-10 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
      {projectsList.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </div>
  );
}

function getComingSoonCards() {
  const cards: Project[] = [];
  const cellsToBeFilled = lowestMultipleAboveNumber(projects.length, 3) - projects.length;

  for (let i = 0; i < cellsToBeFilled; i++) {
    cards.push({
      name: "coming soon",
      description: "new project to be revealed soon™️",
      cover: "/static/projects/comingSoon.png",
    } satisfies Project);
  }

  return cards;
}
