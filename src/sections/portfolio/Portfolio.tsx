import "./portfolio.css";
import { useState } from "react";

import { PortfolioData } from "../../data/types";

import { Categories } from "../../components/categories/Categories";
import { Projects } from "../../components/projects/Projects";

export interface PortfolioProps {
  data: PortfolioData;
}

const Portfolio = ({ data }: PortfolioProps) => {
  const [projects, setProjects] = useState(data.projects);

  const byCategory = (category: string) => {
    setProjects([...data.projects]);
    if (category !== "All") {
      setProjects([
        ...data.projects.filter((it) => it.category.id === category),
      ]);
    }
  };

  return (
    <section id="portfolio">
      <h2>{data.text}</h2>
      <div className="container portfoliocontainer">
        <div className="categorieswrap">
          <Categories
            categories={data.categories}
            categoryClass=" btn sm catbtn"
            byCategory={byCategory}
          />
        </div>

        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
