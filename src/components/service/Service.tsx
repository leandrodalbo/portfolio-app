import "./service.css"
import { ServiceItem } from "../../data/types"

interface ServiceProps{
    service: ServiceItem
}

const Service = ({service}:ServiceProps) => {
  return (
    <li className="service"><span className="icon"><service.icon/></span>{service.text}</li>
  )
}

export default Service;
