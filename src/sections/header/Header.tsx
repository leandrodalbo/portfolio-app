import "./header.css";

import { HeaderData } from "../../data/types";

interface HeaderProps {
  data: HeaderData;
}

const Header = ({ data }: HeaderProps) => {
  return (
    <header id="header">
      <div className="container headercontainer">
        <h3>{data.text0}</h3>
        <p>{data.text1}</p>
        <div className="headerimg">
          <img src={data.img} alt="headerimg" />
        </div>
        <div className="headercta">
          <a href="#contact" className="btn primary">
            {data.contactbutton}
          </a>
          <a href="#portfolio" className="btn primary">
            {data.portfoliobutton}
          </a>
        </div>
        <div className="headersocial">
          {data.sociallinks.map((it) => (
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
      </div>
    </header>
  );
};

export default Header;
