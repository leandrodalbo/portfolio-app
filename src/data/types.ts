import { IconType } from "react-icons";

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
  name: string;
  text: string;
  contactbutton: string;
  portfoliobutton: string;
  sociallinks: SocialItem[];
}
