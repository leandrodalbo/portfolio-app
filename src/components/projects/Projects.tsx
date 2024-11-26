import "./projects.css";

import { Project } from "../../data/types";
import { ProjectDetail } from "../project/ProjectDetail";

export interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="projectslist">
      {projects.map((it) => (
        <ProjectDetail key={it.id} project={it} />
      ))}
    </div>
  );
};
