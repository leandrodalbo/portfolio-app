import "./navbar.css";

import logo from "../../assets/logo.jpg";
import { navdata } from "../../data/navdata";

import { IoMdColorWand } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      <div className="container navcontainer">
        <a href="index.html" className="navlogo">
          <img src={logo} alt="logo-img" />
        </a>

        <ul className="navmenu">
          {navdata.map((it) => (
            <li key={it.id}>
              <a href={it.link}>{it.title}</a>
            </li>
          ))}
        </ul>

        <button id="themeicon">
          <IoMdColorWand />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
