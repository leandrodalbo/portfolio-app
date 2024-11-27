import "./categories.css";
import { useState } from "react";

export interface CategoriesProps {
  categories: string[];
  categoryClass: string;
  byCategory: (category: string) => void;
}

export const Categories = ({
  categories,
  categoryClass,
  byCategory,
}: CategoriesProps) => {
  const [category, setCategory] = useState("All");

  const handleSelection = (category: string) => {
    setCategory(category);
    byCategory(category);
  };

  return categories.map((it) => (
    <button
      key={it}
      className={`${categoryClass} ${category === it ? "active" : ""}`}
      onClick={() => handleSelection(it)}
    >
      {it}
    </button>
  ));
};
