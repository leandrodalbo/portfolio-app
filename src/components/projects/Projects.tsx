import "./projects.css";

import { Project } from "../../data/types";
import { ProjectDetail } from "../project/ProjectDetail";

export interface ProjectsProps {
  projects: Project[];
  selectedCategory: string;
}

export const Projects = ({ projects, selectedCategory }: ProjectsProps) => {
  return (
    <div className="projectslist">
      {projects.map((it) => (
        <ProjectDetail
          key={it.id}
          project={it}
          isSelected={selectedCategory === it.category.id}
        />
      ))}
    </div>
  );
};
