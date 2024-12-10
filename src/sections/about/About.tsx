import { useState } from "react";
import { CardComponent } from "../../components/card/Card";
import { AboutData } from "../../data/types";
import "./about.css";

export interface AboutProps {
  data: AboutData;
}
const About = ({ data }: AboutProps) => {
  const [cardId, setCardId] = useState(data.cards[0].id);

  const selectCard = (id: number) => {
    setCardId(id);
  };

  return (
    <section id="about">
      <div className="container aboutcontainer">
        <div className="aboutimgcontainer">
          <img src={data.img} alt="aboutimg" />
        </div>

        <div className="aboutright">
          <h2>{data.textheader}</h2>
          <div className="aboutcards">
            {data.cards.map((it) => (
              <CardComponent
                key={it.id}
                card={it}
                onClickAction={selectCard}
                isSelected={cardId == it.id}
              />
            ))}
          </div>
          <p>{data.cards[cardId].text0}</p>
          <p>{data.cards[cardId].text1}</p>
          <p>{data.cards[cardId].text2}</p>
          <a href="#services" className="btn primary">
            {data.servicesbutton} {<data.servicesicon />}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
