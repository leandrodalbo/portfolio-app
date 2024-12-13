import { useState } from "react";

import About from "./sections/about/About";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";
import Navbar from "./sections/navbar/Navbar";

import { headerdata } from "./data/headerdata";
import { navdata } from "./data/navdata";
import { aboutData } from "./data/aboutdata";
import { servicesData } from "./data/servicesdata";
import { portfolioData } from "./data/portfoliodata";
import { ThemeContext } from "./context/ThemeContext";

export const App = () => {
  const [darkmode, setDarkMode] = useState(true);

  const changeTheme = () => {
    setDarkMode(!darkmode);
  };

  return (
    <ThemeContext.Provider value={{ dark: darkmode, toggleDark: changeTheme }}>
      <main className={darkmode ? "darkmode" : "ligthmode"}>
        <Navbar data={navdata} />
        <Header data={headerdata} />
        <About data={aboutData} />
        <Services data={servicesData} />
        <Portfolio data={portfolioData} />
        {/* <Footer socialsData={socialsData} contactData={contactData} /> */}
        {/* <FloatingNav /> */}
      </main>
    </ThemeContext.Provider>
  );
};
