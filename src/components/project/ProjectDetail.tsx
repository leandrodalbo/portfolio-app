import { Project } from "../../data/types";
import "./project.css";

export interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="project">
      <h4>{project.title}</h4>
      <h6>{project.category}</h6>

      <p>
        <span>{"Technologies: "}</span>
        {project.technologies}
      </p>

      <p>
        <span>{"Description: "}</span>
        {project.description}
      </p>
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