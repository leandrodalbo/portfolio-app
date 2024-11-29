import "./footer.css";

import { ContactData, SocialItem } from "../../data/types";

export interface FooterProps {
  socialsData: SocialItem[];
  contactData: ContactData;
}

const Footer = ({ socialsData, contactData }: FooterProps) => {
  return (
    <footer id="contact">
      <div className="contact contactcontainer">
        <h2>{contactData.textheader}</h2>
        <a href={contactData.text1} target="_blank" rel="noopener noreferrer">
          {<contactData.icon />}
        </a>
      </div>
      <div className="container footersocials">
        {socialsData.map((it) => (
          <a
            key={it.id}
            href={it.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<it.icon />}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
