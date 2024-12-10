import { IoIosHome } from "react-icons/io";
import { FaQuestion } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoCodeWorking } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";

import { NavItem } from "./types";

export const sectionsData: NavItem[] = [
  {
    id: 0,
    link: "#",
    title: "Home",
    icon: IoIosHome,
  },
  {
    id: 1,
    link: "#about",
    title: "About",
    icon: FaQuestion,
  },
  {
    id: 2,
    link: "#services",
    title: "Services",
    icon: MdOutlineMiscellaneousServices,
  },
  {
    id: 3,
    link: "#portfolio",
    title: "Portfolio",
    icon: IoCodeWorking,
  },
  {
    id: 4,
    link: "#contact",
    title: "Contact",
    icon: BiMessageDetail,
  },
];
