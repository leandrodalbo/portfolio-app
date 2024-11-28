import "./footer.css";

import { SocialItem } from "../../data/types";

export interface FooterProps {
  socialsData: SocialItem[];
}

const Footer = ({ socialsData }: FooterProps) => {
  return (
    <footer id="footer">
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
