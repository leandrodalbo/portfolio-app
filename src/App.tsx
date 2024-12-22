import { useState } from "react";

import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";
import Navbar from "./sections/navbar/Navbar";

import { navdata } from "./data/navdata";
import { introData } from "./data/introdata";
import { servicesData } from "./data/servicesdata";
import { portfolioData } from "./data/portfoliodata";
import { ThemeContext } from "./context/ThemeContext";

import Intro from "./sections/intro/Intro";
import Social from "./components/social/social";
import { socialsData } from "./data/socialsdata";

export const App = () => {
  const [darkmode, setDarkMode] = useState(true);

  const changeTheme = () => {
    setDarkMode(!darkmode);
  };

  return (
    <ThemeContext.Provider value={{ dark: darkmode, toggleDark: changeTheme }}>
      <main className={darkmode ? "darkmode" : "ligthmode"}>
        <Navbar data={navdata} />
        <Intro data={introData} />
        <Services data={servicesData} />
        <Portfolio data={portfolioData} />
        <Social data={socialsData}/>
      </main>
    </ThemeContext.Provider>
  );
};
