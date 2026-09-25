import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
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
          <div className="relative min-h-screen text-ink overflow-x-hidden selection:bg-sage/30">
            
            {/* Fixed Background Image Layer */}
            <div 
              className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('/bb.png')` }}
            ></div>

            {/* Overlay to keep background soft and text readable */}
            <div className="fixed inset-0 z-[-1] bg-[#FAF6EF]/85 pointer-events-none"></div>

            {/* Main Content with all your sections */}
            <div className="relative z-10">
              <Navbar />
              <main className="pt-24 px-6 max-w-7xl mx-auto">
                <Home />
                <About />
                <Skills />
                <Projects />
                <Certificates />
                <Contact />
                <Footer />
              </main>
            </div>

          </div>
        }
      />
    </Routes>
  );
}