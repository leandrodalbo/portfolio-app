import { IconType } from "react-icons";

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
