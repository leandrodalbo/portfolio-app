import { useState } from "react";

import { PortfolioData } from "../../data/types";
import "./portfolio.css";
import { Categories } from "../../components/categories/Categories";
import { Projects } from "../../components/projects/Projects";

export interface PortfolioProps {
  data: PortfolioData;
}
const Portfolio = ({ data }: PortfolioProps) => {
  const [projects, setProjects] = useState(data.projects);
  return (
    <section id="portfolio">
      <h2>{data.text}</h2>
      <div className="container portfoliocontainer">
        <Categories />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
