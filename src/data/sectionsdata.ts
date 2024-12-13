import { FaQuestion } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoCodeWorking } from "react-icons/io5";

import { NavItem } from "./types";

export const sectionsData: NavItem[] = [
  {
    id: 0,
    link: "#about",
    title: "About",
    icon: FaQuestion,
  },
  {
    id: 1,
    link: "#services",
    title: "Services",
    icon: MdOutlineMiscellaneousServices,
  },
  {
    id: 2,
    link: "#portfolio",
    title: "Portfolio",
    icon: IoCodeWorking,
  },
];
