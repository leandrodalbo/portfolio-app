import "./contact.css";
import { ContactData } from "../../data/types";

export interface ContactProps {
  data: ContactData;
}

const Contact = ({ data }: ContactProps) => {
  return (
    <section id="contact">
      <h2>{data.textheader}</h2>

      <div className="contact contactcontainer">
        <p>{data.text0}</p>
        <a href={data.text1} target="_blank" rel="noopener noreferrer">
          {<data.icon />}
        </a>
      </div>
    </section>
  );
};

export default Contact;
