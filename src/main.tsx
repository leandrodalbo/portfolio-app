import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import FloatingNav from "./sections/floating-nav/FloatingNav";
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <Navbar data={navdata} />
      <Header data={headerdata} />
      <About data={aboutData} />
      <Services data={servicesData} />
      <Portfolio data={portfolioData} />
      <Contact data={contactData} />
      <Footer />
      <FloatingNav />
    </main>
  </StrictMode>
);
