import Service from "../../components/service/Service";
import { ServicesData } from "../../data/types";
import "./services.css";

export interface ServicesProps {
  data: ServicesData;
}

const Services = ({ data }: ServicesProps) => {
  return (
    <section id="services">
      <h2>{data.text0}</h2>
      <div className="container servicescontainer">
          <div className="servicesimgcontainer">
            <img src={data.img} alt="servicesimg" />
          </div>

           <div className="servicesright">
               <div className="serviceslist">
                  {data.services.map((it) => 
                    <Service key={it.id} service={it}/>
                )}
          </div>
          <div className="servicesbtns">

          <a href="#portfolio" className="btn primary">
            {data.portfoliobutton}
          </a>
        </div>
        </div>
      </div>
   
    </section>
  );
};

export default Services;
