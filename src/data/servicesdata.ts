import { ServicesData } from "./types";

import { SiSpringboot } from "react-icons/si";
import { SiTicktick } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

export const servicesData: ServicesData = {
  text0: "Services Provided",
  text1: "Work hard, have fun and make history",
  services: [
    {
      id: 0,
      text: "Backend Applications",
      link: "#springproject",
      linktext: "Demo",
      icon: SiSpringboot,
    },
    {
      id: 1,
      text: `Projects Refactoring and Automated Tests`,
      icon: SiTicktick,
    },
    {
      id: 2,
      text: `Infrastructure as Code`,
      icon: SiTerraform,
      link: "#iacdemo",
      linktext: "Demo",
    },
    {
      id: 3,
      text: `CI/CD`,
      icon: SiGithubactions,
    },
    {
      id: 4,
      text: `Clean Code, TDD, BDD, Extreme Programming`,
      icon: SiGithubactions,
    },
    {
      id: 5,
      text: `Frontend Applications`,
      icon: FaReact,
      link: "#reactdemo",
      linktext: "Demo",
    },
  ],
};
