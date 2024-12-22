import { Link } from "react-router-dom";
import Service from "../../components/service/Service";
import { ServicesData } from "../../data/types";
import "./services.css";

export interface ServicesProps {
  data: ServicesData;
}

const Services = ({ data }: ServicesProps) => {
  return (
    <section>
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

          <Link to={"/portfolio"} className="btn primary">
            {data.portfoliobutton}
          </Link>         
            
        </div>
        </div>
      </div>
   
    </section>
  );
};

export default Services;
