import { IntroData } from "./types";

import introimg from "../assets/img0.jpg";

import { TbCircleNumber0Filled } from "react-icons/tb";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";

import { FaArrowDown } from "react-icons/fa";

export const introData: IntroData = {
  textheader: "What is JungleLogic Lab about?",
  emailButton: "Email",
  email: "mailto:leandro.edbo@gmail.com",
  servicesbutton: "Services",
  servicesicon: FaArrowDown,
  img: introimg,
  
  cards: [
    {
      id: 0,
      text: "Natural Order",
      icon: TbCircleNumber0Filled,
      text0: "Providing products and services that customers truly need.",
      text1: "Following market trends.",
      text2:
        "Adapting to changes in technology, customer expectations and external factors.",
    },
    {
      id: 1,
      text: "Simple and Clean",
      icon: TbCircleNumber1Filled,
      text0: "Delivering robust and clean software products.",
      text1: "Always focus on the simplest solution that solves your problem.",
      text2: "Avoid reinventing the wheel.",
    },

    {
      id: 2,
      text: "Happiness",
      icon: TbCircleNumber2Filled,
      text0:
        "Find happiness in solving meaningful problems and creating value.",
      text1: "Fostering a positive mindset.",
      text2: "Being open to transformative ideas.",
    },
  ],
};
