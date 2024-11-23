import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Faqs from "./sections/faqs/Faqs";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";
import Navbar from "./sections/navbar/Navbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  </StrictMode>
);
