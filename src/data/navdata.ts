import { NavData } from "./types";

import logo from "../assets/logo.png";
import { IoMdColorWand } from "react-icons/io";
import { sectionsData } from "./sectionsdata";

export const navdata: NavData = {
  logo: logo,
  themeIcon: IoMdColorWand,
  items: sectionsData,
};
