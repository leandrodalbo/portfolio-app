import "./intro.css";
import { useState } from "react";
import { CardComponent } from "../../components/card/Card";
import { IntroData } from "../../data/types";

export interface IntroProps {
  data: IntroData;
}
const Intro = ({ data }: IntroProps) => {
  const [cardId, setCardId] = useState(data.cards[0].id);

  const selectCard = (id: number) => {
    setCardId(id);
  };

  return (
    <section id="intro">
      <h2>{data.textheader}</h2>
      <div className="container introcontainer">
       
          <div className="introcards">
            {data.cards.map((it) => (
              <CardComponent
                key={it.id}
                card={it}
                onClickAction={selectCard}
                isSelected={cardId == it.id}
              />
            ))}
          </div>

          <div className="info">
            <div className="text">
              <p>{data.cards[cardId].text0}</p>
              <p>{data.cards[cardId].text1}</p>
              <p>{data.cards[cardId].text2}</p>
            </div>

           <div className="introbtns">
              <a href={data.email} className="btn primary">
                {data.emailButton}
              </a>
              <a href="#services" className="btn primary">
                {data.servicesbutton} 
              </a>
            </div>   
            
          </div>
        
      </div>
    </section>
  );
};

export default Intro;
