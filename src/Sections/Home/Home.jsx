import React from "react";
import { ReactTyped } from "react-typed";
import { FaStar, FaArrowRight } from "react-icons/fa";
import logoImg from "../../assets/Images/home.png";

export default function Home() {
  return (
    <section id="home" className="min-h-[85vh] flex items-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/*  Text & Typing Animation */}
        <div className="space-y-6 text-center md:text-left">

          {/* Stylish Welcome Text */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold tracking-wide text-purple-700 bg-purple-100/90 rounded-full border border-purple-200 shadow-sm">
            <FaStar className="text-purple-600 text-sm" />
            <span>Welcome to my portfolio</span>
          </div>

          {/* Main Heading with Name */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
              Hi, I'm
            </h1>
            <span
              className="block text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-500 to-violet-600 bg-clip-text text-transparent"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Hamna Tanveer
            </span>

            {/* Typing Animation  */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-600 flex items-center justify-center md:justify-start gap-2 h-10 pt-2">
              <span>I am a</span>
              <span className="text-purple-700 underline decoration-purple-300 underline-offset-8">
                <ReactTyped
                  strings={[
                    "Frontend Developer",
                  
                    "React.js Enthusiast"
                  ]}
                  typeSpeed={80}
                  backSpeed={60}
                  loop
                />
              </span>
            </h2>
          </div>

          {/* Short Bio */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I craft clean, user-friendly, and responsive web interfaces with modern technologies. Passionate about turning ideas into real-world interactive applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 rounded-full shadow-lg shadow-purple-300/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 text-sm font-bold text-purple-700 bg-white hover:bg-purple-50 rounded-full border-2 border-purple-200 shadow-sm transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
          </div>

        </div>

        {/*  Glowing Logo Image */}
        <div className="flex items-center justify-center relative">
          {/* Background glowing aura matching Sidebar tones */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-purple-300 via-purple-200 to-violet-300 blur-xl opacity-50 animate-pulse"></div>

          {/* Image Container with Border & Shadow */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-purple-200 via-purple-100 to-violet-200 p-2 shadow-xl shadow-purple-300/60 flex items-center justify-center border-4 border-purple-200 overflow-hidden group">
            <img
              src={logoImg}
              alt="Hamna Tanveer Logo"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}