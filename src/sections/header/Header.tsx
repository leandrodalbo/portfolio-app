import profileimg from "../../assets/profile.jpeg";
import { headerdata } from "../../data/headerdata";

const Header = () => {
  return (
    <header id="header">
      <div className="container headercontainer">
        <div className="headerprofile">
          <img src={profileimg} alt="profileimage" />
        </div>
        <h3>{headerdata.name}</h3>
        <p>{headerdata.text}</p>
        <div className="headercta">
          <a href="#contact">{headerdata.contactbutton}</a>
          <a href="#portfolio">{headerdata.portfoliobutton}</a>
        </div>
        <div className="headersocial">
          {headerdata.sociallinks.map((it) => (
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
