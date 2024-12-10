import "./navbar.css";

import { NavData } from "../../data/types";
import { useThemeContext } from "../../context/ThemeContext";

interface NavbarProps {
  data: NavData;
}

const Navbar = ({ data }: NavbarProps) => {
  const { toggleDark, dark } = useThemeContext();
  return (
    <nav>
      <div className="container navcontainer">
        <a className="logo" href="#header">
          <img src={data.logo} alt="JungleLogic Labs" />
        </a>

        <ul className="navmenu">
          {data.items.map((it) => (
            <li key={it.id}>
              <a href={it.link}>{<it.icon />}</a>
            </li>
          ))}
        </ul>

        <button id="themeicon" onClick={toggleDark}>
          {dark && <data.darkmodeIcon />}
          {!dark && <data.lightmodeIcon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
