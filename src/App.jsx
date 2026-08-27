import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Projects from "./Sections/PortfolioProjects/Projects";
import Certificates from "./Sections/Certificates/Certificates";
import Contact from "./Sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-purple-50/50  text-slate-800 overflow-x-hidden">
            <Navbar />
            <main className="pt-24 px-6 max-w-7xl mx-auto">
              <Home />
              <About />
              <Projects />
              <Certificates />
              <Contact />
              <Footer />
            </main>
          </div>
        }
      />
    </Routes>
  );
}