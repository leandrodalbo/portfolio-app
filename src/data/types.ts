import { projectCategories } from "./portfoliodata";
import { IconType } from "react-icons";

export interface Card {
  id: number;
  text: string;
  icon: IconType;
  link?: string;
  linktext?: string;
}

export interface NavData {
  logo: string;
  themeIcon: IconType;
  items: NavItem[];
}

export interface NavItem {
  id: number;
  link: string;
  title: string;
}

export interface SocialItem {
  id: number;
  link: string;
  text: string;
  icon: IconType;
}

export interface HeaderData {
  text0: string;
  text1: string;
  img: string;
  contactbutton: string;
  portfoliobutton: string;
  sociallinks: SocialItem[];
}

export interface AboutData {
  textheader: string;
  text0: string;
  text1: string;
  text2: string;
  img: string;
  servicesbutton: string;
  servicesicon: IconType;
  cards: Card[];
}

export interface ServicesData {
  text0: string;
  text1: string;
  services: Card[];
}

export interface Project {
  id: number;
  category: ProjectCategory;
  title: string;
  description: string;
  technologies: string;
  link?: string;
  repo?: string;
}

export interface ProjectCategory {
  id: string;
  description: string;
}
export interface PortfolioData {
  text: string;
  categories: string[];
  projects: Project[];
}
