import "./project.css";
import { Project } from "../../data/types";

export interface ProjectDetailProps {
  project: Project;
  isSelected: boolean;
}

export const ProjectDetail = ({ project, isSelected }: ProjectDetailProps) => {
  return (
    <div className={`project ${isSelected === true ? "selected" : ""}`}>
      <div className="info">
        <h4>{project.title}</h4>
        <h6>{project.category.id}</h6>

        <div className="text">
          <p>
            <span>{"Technologies: "}</span>
            {project.technologies}
          </p>

          <p>
            <span>{"Description: "}</span>
            {project.description}
          </p>
        </div>
      </div>

      <div className="projectcta">
        {project.repo && (
          <a
            href={project.repo}
            className="btn sm primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        )}

        {project.link && (
          <a
            href={project.link}
            className="btn sm primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};
