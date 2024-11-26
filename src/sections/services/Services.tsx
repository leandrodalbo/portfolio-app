import { CardComponent } from "../../components/card/Card";
import { ServicesData } from "../../data/types";
import "./services.css";

export interface ServicesProps {
  data: ServicesData;
}

const Services = ({ data }: ServicesProps) => {
  return (
    <section id="services">
      <div className="container servicescontainer">
        <h2>{data.text0}</h2>
        <p>{data.text1}</p>
        {data.services.map((it) => (
          <CardComponent
            key={it.id}
            card={it}
            carddetailclass="servicedetail"
            cardclass="service light"
            headerclass="serviceheader"
            iconclass="serviceicon"
            linkclass="servicedemo"
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
