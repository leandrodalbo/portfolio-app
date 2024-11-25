import { CardComponent } from "../../components/card/Card";
import { AboutData } from "../../data/types";
import "./about.css";

export interface AboutProps {
  data: AboutData;
}
const About = ({ data }: AboutProps) => {
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
                cardclass="aboutcard"
                headerclass="aboutcardheader"
                iconclass="aboutcardicon"
                card={it}
              />
            ))}
          </div>
          <p>{data.text0}</p>
          <p>{data.text1}</p>
          <p>{data.text2}</p>
          <a href="#services" className="btn primary">
            {data.servicesbutton} {<data.servicesicon />}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
