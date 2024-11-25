import { AboutData } from "./types";

import aboutimg from "../assets/about.jpg";

import { FaBusinessTime } from "react-icons/fa6";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaRegKiss } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export const aboutData: AboutData = {
  textheader: "What is RefactorTech about?",
  text0: `Doing always the necessary to deliver a high quality software product.`,
  text1:
    "Making sure that the right stack is choosen for every solution and catching errors early.",
  text2: "Using experience to avoid reinventing the weel.",
  servicesbutton: "Services",
  servicesicon: FaArrowDown,
  img: aboutimg,

  cards: [
    { id: 0, text: "Experience", icon: FaBusinessTime },
    { id: 1, text: "Simple (KISS)", icon: FaRegKiss },
    { id: 2, text: "SOLID Happyness", icon: RiEmotionHappyLine },
  ],
};
