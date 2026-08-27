import React from "react";
import { ReactTyped } from "react-typed";
import { FaStar, FaArrowRight } from "react-icons/fa";
import homeImg from "../../assets/Images/home.png";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center py-10 sm:py-12 lg:py-16 overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 items-center">

        {/* =========================
            LEFT SIDE - CONTENT
        ========================== */}
        <div className="space-y-6 text-center md:text-left z-20">

          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold tracking-wide text-purple-700 bg-purple-100/80 rounded-full border border-purple-200 shadow-sm">
            <FaStar className="text-purple-600 text-sm" />
            <span>Welcome to my portfolio</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-1">

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
              Hi, I'm
            </h1>

            <span
              className="
                block
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                bg-gradient-to-r
                from-fuchsia-400
                via-purple-500
                to-violet-600
                bg-clip-text
                text-transparent
              "
              style={{
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              Hamna Tanveer
            </span>

            {/* Typing Animation */}
            <h2
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-slate-600
                flex
                items-center
                justify-center
                md:justify-start
                gap-2
                h-10
                pt-2
              "
            >
              <span>I am a</span>

              <span className="text-purple-700 underline decoration-purple-300 underline-offset-8">
                <ReactTyped
                  strings={[
                    "Frontend Developer",
                    "React.js Enthusiast",
                  ]}
                  typeSpeed={80}
                  backSpeed={60}
                  loop
                />
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I craft clean, user-friendly, and responsive web interfaces with
            modern technologies. Passionate about turning ideas into
            real-world interactive applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-3">

            {/* Explore Projects */}
            <a
              href="#projects"
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                text-sm
                font-bold
                text-white
                bg-gradient-to-r
                from-purple-600
                to-violet-500
                hover:from-purple-700
                hover:to-violet-600
                rounded-full
                shadow-lg
                shadow-purple-300/50
                transition-all
                duration-300
                hover:scale-105
                active:scale-95
              "
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-xs" />
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="
                px-6
                py-3
                text-sm
                font-bold
                text-purple-700
                bg-white/80
                hover:bg-purple-50
                rounded-full
                border-2
                border-purple-200
                shadow-sm
                transition-all
                duration-300
                hover:scale-105
                active:scale-95
              "
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* =========================
            RIGHT SIDE - IMAGE
        ========================== */}
        <div className="relative flex items-center justify-center md:justify-end">

          {/* Soft Lavender Glow */}
          <div
            className="
              absolute
              w-72
              h-72
              sm:w-96
              sm:h-96
              lg:w-[520px]
              lg:h-[520px]
              rounded-full
              bg-purple-300/20
              blur-3xl
            "
          ></div>

          {/* Image Area */}
          <div
            className="
              relative
              w-full
              max-w-[520px]
              lg:max-w-[620px]
              xl:max-w-[680px]
              -mr-0
              lg:-mr-8
            "
          >
            <img
              src={homeImg}
              alt="Hamna Tanveer - Frontend Developer"
              className="
                relative
                z-10
                w-full
                h-auto
                object-contain
                drop-shadow-[0_20px_35px_rgba(139,92,246,0.18)]
                transition-transform
                duration-500
                hover:scale-[1.02]
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}