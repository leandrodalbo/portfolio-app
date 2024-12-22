import "./portfolio.css";
import { useState } from "react";

import { PortfolioData } from "../../data/types";

import { Categories } from "../../components/categories/Categories";
import { Projects } from "../../components/projects/Projects";

export interface PortfolioProps {
  data: PortfolioData;
}

const Portfolio = ({ data }: PortfolioProps) => {
  const [category, setCategory] = useState("All");

  const categories = new Set([
    "All",
    ...data.projects.map((it) => it.category.id),
  ]);

  const changeCategory = (cat: string) => {
    setCategory(cat);
  };

  return (
    <section>
      <h2>{data.text}</h2>
      <div className="container portfoliocontainer">
        <div className="categorieswrap">
          <Categories categories={categories} changeCategory={changeCategory} />
        </div>

        <Projects projects={data.projects} selectedCategory={category} />
      </div>
    </section>
  );
};

export default Portfolio;
