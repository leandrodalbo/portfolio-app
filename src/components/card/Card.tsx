import "./card.css";

import { Card } from "../../data/types";

export interface CardProps {
  card: Card;
  cardclass?: string;
  headerclass?: string;
  iconclass?: string;
}
export const CardComponent = ({
  card,
  cardclass,
  headerclass,
  iconclass,
}: CardProps) => {
  return (
    <article className={`card ${cardclass}`}>
      <h5 className={headerclass}>{card.text}</h5>
      <span className={iconclass}>{<card.icon />}</span>
    </article>
  );
};
