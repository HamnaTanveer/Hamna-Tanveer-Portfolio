import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaStar, FaArrowRight } from "react-icons/fa";
import logoImg from "../../assets/Images/loo.png";

export default function Home() {
  return (
    <section id="home" className="min-h-[85vh] flex items-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* Text & Typing Animation */}
        <div className="space-y-6 text-center md:text-left">

          {/* Stylish Welcome Text */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold tracking-wide text-sage-dark bg-white/50 backdrop-blur rounded-full border border-stone shadow-sm">
            <FaStar className="text-clay text-sm" />
            <span>Welcome to my portfolio</span>
          </div>

          {/* Main Heading with Name */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
              Hi, I'm
            </h1>
            <span
              className="block text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-sage-dark via-sage to-clay bg-clip-text text-transparent pb-2"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Hamna Tanveer
            </span>

            {/* Typing Animation */}
            <h2 className="text-xl sm:text-2xl font-bold text-body flex items-center justify-center md:justify-start gap-2 h-10 pt-2">
              <span>I am a</span>
              <span className="text-sage-dark underline decoration-clay/70 underline-offset-8">
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
          <p className="text-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Passionate about building fast, user-friendly interfaces that feel as good as they look. Focused on writing clean code and thoughtful design.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-sage-dark to-sage hover:from-ink hover:to-sage-dark rounded-full shadow-lg shadow-sage-dark/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 text-sm font-bold text-sage-dark bg-white/50 hover:bg-white/80 rounded-full border-2 border-clay/60 hover:border-clay shadow-sm transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
          </div>

        </div>

        {/* Image */}
        <div className="flex items-center justify-center relative">

          {/* soft sage + clay glow */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.7, 0.45] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[26rem] h-72 sm:w-[32rem] sm:h-80 lg:w-[38rem] lg:h-96 rounded-full bg-gradient-to-tr from-sage-light via-blush to-clay/50 blur-3xl"
          />

          <motion.img
            src={logoImg}
            alt="Hamna Tanveer"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[26rem] sm:max-w-[32rem] lg:max-w-[38rem] object-contain"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 68% 78% at center, black 60%, transparent 96%)",
              maskImage:
                "radial-gradient(ellipse 68% 78% at center, black 60%, transparent 96%)",
            }}
          />
        </div>

      </div>
    </section>
  );
}