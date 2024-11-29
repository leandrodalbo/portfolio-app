import { AboutData } from "./types";

import aboutimg from "../assets/codecleaner2.jpg";

import { FaBusinessTime } from "react-icons/fa6";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaRegKiss } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export const aboutData: AboutData = {
  textheader: "What is Code Cleaner about?",
  text0: "Delivering Robust and clean Software Products.",
  text1: "Making sure that the right stack is choosen.",
  text2: "Avoid reinventing the weel.",
  servicesbutton: "Services",
  servicesicon: FaArrowDown,
  img: aboutimg,

  cards: [
    { id: 0, text: "Experience", icon: FaBusinessTime },
    { id: 1, text: "Simplicity (KISS)", icon: FaRegKiss },
    { id: 2, text: "SOLID Happyness", icon: RiEmotionHappyLine },
  ],
};
