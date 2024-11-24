import "./navbar.css";

import { NavData } from "../../data/types";

interface NavbarProps {
  data: NavData;
}

const Navbar = ({ data }: NavbarProps) => {
  return (
    <nav>
      <div className="container navcontainer">
        <a href="index.html" className="navlogo">
          <img src={data.logo} alt="logo-img" />
        </a>

        <ul className="navmenu">
          {data.items.map((it) => (
            <li key={it.id}>
              <a href={it.link}>{it.title}</a>
            </li>
          ))}
        </ul>

        <button id="themeicon">{<data.themeIcon />}</button>
      </div>
    </nav>
  );
};

export default Navbar;
