import { NavData } from "./types";

import logo from "../assets/logo.png";
import { IoMdColorWand } from "react-icons/io";

export const navdata: NavData = {
  logo: logo,
  themeIcon: IoMdColorWand,
  items: [
    {
      id: 0,
      link: "#",
      title: "Home",
    },
    {
      id: 1,
      link: "#about",
      title: "About",
    },
    {
      id: 2,
      link: "#services",
      title: "Services",
    },
    {
      id: 3,
      link: "#portfolio",
      title: "Portfolio",
    },
    {
      id: 4,
      link: "#contact",
      title: "Contact",
    },
  ],
};
