import "./navbar.css";

import { NavData } from "../../data/types";
import { useThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

interface NavbarProps {
  data: NavData;
}

const Navbar = ({ data }: NavbarProps) => {
  const { toggleDark, dark } = useThemeContext();
  return (
    <nav>
      <div className="container navcontainer">
        
          <Link to={"/"} className="logo">
            <img src={data.logo} alt="JungleLogic Labs" />
          </Link>    
        

        <ul className="navmenu">
          {data.items.map((it) => (
            <li key={it.id}>
              <Link to={it.link} >
                 {<it.icon />}
              </Link>    
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
