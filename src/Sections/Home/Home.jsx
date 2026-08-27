import React from "react";
import { ReactTyped } from "react-typed";
import { FaStar, FaArrowRight } from "react-icons/fa";
import logoImg from "../../assets/Images/home.png";

export default function Home() {
  return (
    <section id="home" className="min-h-[85vh] flex items-center py-12 bg-purple-50/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-6">

        {/* Text & Typing Animation */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">

          {/* Stylish Welcome Text */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold tracking-wide text-purple-800 bg-purple-100/60 rounded-full border border-purple-200">
            <FaStar className="text-purple-500 text-sm" />
            <span>Welcome to my portfolio</span>
          </div>

          {/* Main Heading with Name */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
              Hi, I'm
            </h1>
            <span
              className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-600 to-violet-700 bg-clip-text text-transparent pb-1"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Hamna Tanveer
            </span>

            {/* Typing Animation */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-700 flex items-center justify-center md:justify-start gap-2 h-10 pt-3">
              <span>I am a</span>
              <span className="text-purple-700">
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
          <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-medium">
            I craft clean, user-friendly, and responsive web interfaces with modern technologies. Passionate about turning ideas into real-world interactive applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-violet-700 hover:from-purple-700 hover:to-violet-800 rounded-full shadow-lg shadow-purple-300/40 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 text-sm font-bold text-purple-900 bg-white hover:bg-purple-50/50 rounded-full border-2 border-purple-200 shadow-inner transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
            >
              Get in Touch
            </a>
          </div>

        </div>

        {/* Integrated Image Container */}
        <div className="flex items-center justify-center relative order-1 md:order-2 group h-full w-full">
          <div className="relative w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl aspect-square flex items-center justify-center overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105">
            <img
              src={logoImg}
              alt="Hamna Tanveer Developer"
              className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(124,58,237,0.3)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}