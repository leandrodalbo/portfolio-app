export interface NavItem {
  id: number;
  link: string;
  title: string;
}

export const navdata: NavItem[] = [
  {
    id: 0,
    link: "#",
    title: "Home",
  },
  {
    id: 1,
    link: "#about",
    title: "About",
  },
  {
    id: 2,
    link: "#services",
    title: "Services",
  },
  {
    id: 3,
    link: "#portfolio",
    title: "Portfolio",
  },
  {
    id: 4,
    link: "#contact",
    title: "Contact",
  },
];