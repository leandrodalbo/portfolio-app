import { HeaderData } from "./types";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import headerimg from "../assets/refactortech.png";

export const headerdata: HeaderData = {
  text0: "RefactorTech",
  text1: "Robust, Agile and Clean Software solutions",
  contactbutton: "Get in touch",
  portfoliobutton: "Portfolio",
  img: headerimg,
  sociallinks: [
    {
      id: 0,
      link: "https://x.com/leandrodbo/media",
      text: "X",
      icon: FaXTwitter,
    },
    {
      id: 1,
      link: "https://github.com/leandrodalbo",
      text: "Github",
      icon: FaGithub,
    },
    {
      id: 2,
      link: "https://stackoverflow.com/users/13661524/leandro-dal-bo",
      text: "Stackoverflow",
      icon: FaStackOverflow,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/leandrodalbo",
      text: "Linkedin",
      icon: FaLinkedin,
    },
  ],
};
