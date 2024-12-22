import { IconType } from "react-icons";

export interface Card {
  id: number;
  text: string;
  icon: IconType;
  link?: string;
  linktext?: string;
  text0: string;
  text1: string;
  text2: string;
}

export interface ServiceItem {
  id: number;
  text: string;
  icon: IconType;
}

export interface NavData {
  logo: string;
  darkmodeIcon: IconType;
  lightmodeIcon: IconType;
  items: NavItem[];
}

export interface NavItem {
  id: number;
  link: string;
  title: string;
  icon: IconType;
}

export interface SocialItem {
  id: number;
  link: string;
  text: string;
  icon: IconType;
}

export interface IntroData {
  textheader: string;
  img: string;
  servicesbutton: string;
  emailButton: string;
  email: string;
  servicesicon: IconType;
  cards: Card[];
}

export interface ServicesData {
  text0: string;
  services: ServiceItem[];
  img: string;
  portfoliobutton: string;
}

export interface ContactData {
  textheader: string;
  text0: string;
  text1: string;
  icon: IconType;
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
  projects: Project[];
}
