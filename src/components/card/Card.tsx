import "./card.css";

import { Card } from "../../data/types";

export interface CardProps {
  card: Card;
  isSelected: boolean;
  onClickAction: (id: number) => void;
}

export const CardComponent = ({
  card,
  isSelected,
  onClickAction,
}: CardProps) => {
  return (
    <article
      className={`card ${isSelected ? "selected" : "notselected"}`}
      onClick={() => onClickAction(card.id)}
    >
      <span className="cardicon">{<card.icon />}</span>
      <h5 className="cardtext">{card.text}</h5>
    </article>
  );
};
