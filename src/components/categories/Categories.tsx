import "./categories.css";
import { useState } from "react";

export interface CategoriesProps {
  categories: Set<string>;
  changeCategory: (category: string) => void;
}

export const Categories = ({
  categories,

  changeCategory,
}: CategoriesProps) => {
  const [category, setCategory] = useState("All");

  const handleSelection = (category: string) => {
    setCategory(category);
    changeCategory(category);
  };

  return Array.from(categories).map((it) => (
    <button
      key={it}
      className={`btn sm catbtn ${category === it ? "activecat" : ""}`}
      onClick={() => handleSelection(it)}
    >
      {it}
    </button>
  ));
};
