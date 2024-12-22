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

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
export const App = () => {
  const [darkmode, setDarkMode] = useState(true);

  const changeTheme = () => {
    setDarkMode(!darkmode);
  };

  return (
    <ThemeContext.Provider value={{ dark: darkmode, toggleDark: changeTheme }}>
      <Router>
      <main className={darkmode ? "darkmode" : "ligthmode"}>
       
          <Navbar data={navdata} />
          <Routes>
            <Route path="/" element={ <Intro data={introData} />} />
            <Route path="/services" element={<Services data={servicesData} />} />
            <Route path="/portfolio" element={ <Portfolio data={portfolioData} />} />
          </Routes>
       
        <Social data={socialsData}/>
      
      </main>
      </Router>
    </ThemeContext.Provider>
  );
};
