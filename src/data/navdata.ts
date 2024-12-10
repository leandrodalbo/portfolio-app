import { NavData } from "./types";

import { sectionsData } from "./sectionsdata";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import logo from "../assets/logo5.png";

export const navdata: NavData = {
  logo: logo,
  darkmodeIcon: MdDarkMode,
  lightmodeIcon: MdOutlineDarkMode,
  items: sectionsData,
};
