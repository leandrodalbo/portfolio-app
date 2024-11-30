import { NavData } from "./types";

import { sectionsData } from "./sectionsdata";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export const navdata: NavData = {
  logo: "JungleLogic Labs",
  darkmodeIcon: MdDarkMode,
  lightmodeIcon: MdOutlineDarkMode,
  items: sectionsData,
};
