import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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
import { contactData } from "./data/contactdata";
import { socialsData } from "./data/socialsdata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <Navbar data={navdata} />
      <Header data={headerdata} />
      <About data={aboutData} />
      <Services data={servicesData} />
      <Portfolio data={portfolioData} />
      <Footer socialsData={socialsData} contactData={contactData} />
      {/* <FloatingNav /> */}
    </main>
  </StrictMode>
);
