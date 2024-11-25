import "./card.css";

import { Card } from "../../data/types";

export interface CardProps {
  card: Card;
  cardclass?: string;
  carddetailclass?: string;
  headerclass?: string;
  iconclass?: string;
  linkclass?: string;
}

export const CardComponent = ({
  card,
  cardclass,
  carddetailclass,
  headerclass,
  iconclass,
  linkclass,
}: CardProps) => {
  return (
    <article className={`card ${cardclass}`}>
      <span className={iconclass}>{<card.icon />}</span>
      <div className={carddetailclass}>
        <h5 className={headerclass}>{card.text}</h5>
        {card.link && card.linktext && (
          <a className={linkclass} href={card.link}>
            {card.linktext}
          </a>
        )}
      </div>
    </article>
  );
};
