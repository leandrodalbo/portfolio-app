import { CardComponent } from "../../components/card/Card";
import { ServicesData } from "../../data/types";
import "./services.css";

export interface ServicesProps {
  data: ServicesData;
}

const Services = ({ data }: ServicesProps) => {
  return (
    <section id="services">
      <h2>{data.text0}</h2>
      <p>{data.text1}</p>
      <div className="container servicescontainer">
        {data.services.map((it) => (
          <CardComponent
            key={it.id}
            card={it}
            onClickAction={() => {}}
            isSelected={false}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
