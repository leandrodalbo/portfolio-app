import { AboutData } from "../../data/types";
import "./about.css";

export interface AboutProps {
  data: AboutData;
}
const About = ({ data }: AboutProps) => {
  return (
    <section id="about">
      <div className="container aboutcontainer">
        <div className="aboutleft">
          <img src={data.img} alt="aboutimg" />
        </div>
        <div className="aboutright">
          <h2>{data.textheader}</h2>
          <div className="aboutcards"></div>
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
