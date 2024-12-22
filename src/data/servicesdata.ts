import { ServicesData } from "./types";

import { SiSpringboot } from "react-icons/si";
import { SiTicktick } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

import img from "../assets/img0.jpg";

export const servicesData: ServicesData = {
  text0: "Services",
  img: img,
  portfoliobutton: "Portfolio",

  services: [
    {
      id: 0,
      text: "Backend Applications",
      icon: SiSpringboot,

    },
    {
      id: 1,
      text: `Automated Tests and Refactoring`,
      icon: SiTicktick,

    },
    {
      id: 2,
      text: `Infrastructure as Code`,
      icon: SiTerraform,

    },
    {
      id: 3,
      text: `CI/CD`,
      icon: SiGithubactions,

    },
    {
      id: 4,
      text: `Frontend Applications`,
      icon: FaReact,

    },
    {
      id: 5,
      text: `Clean Code, TDD, BDD, Extreme Programming`,
      icon: SiTicktick,
 
    },
  ],
};
