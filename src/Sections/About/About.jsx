import React from "react";
import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left: Heading & Intro */}
          <div className="lg:w-1/3 space-y-4" data-aos="fade-right">
            <h2 className="text-4xl font-extrabold text-slate-800">
              My{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600"
                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: "1.25em" }}
              >
                Journey
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Software engineering student by day, frontend creator by night. I blend code and creativity to build digital experiences.
            </p>
          </div>

          {/*  Modern Feature Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-left">
            
            {/* Education Card */}
            <div className="p-6 rounded-3xl bg-white/60 backdrop-blur-md border border-white shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-purple-600 text-2xl mb-4"><FaGraduationCap /></div>
              <h3 className="font-bold text-slate-800 text-lg">Academic Roots</h3>
              <p className="text-slate-500 text-sm mt-1">BS Software Engineering at UAF. Building the foundation of computer science.</p>
            </div>

            {/* Tech Card */}
            <div className="p-6 rounded-3xl bg-white/60 backdrop-blur-md border border-white shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-violet-600 text-2xl mb-4"><FaLaptopCode /></div>
              <h3 className="font-bold text-slate-800 text-lg">Tech Stack</h3>
              <p className="text-slate-500 text-sm mt-1">Specialized in React.js, Tailwind CSS, and modern web interfaces.</p>
            </div>

            {/* Experience Card  */}
            <div className="md:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-purple-600 to-violet-500 text-white shadow-lg">
              <div className="flex items-center gap-4">
                <div className="text-3xl"><FaRocket /></div>
                <div>
                  <h3 className="font-bold text-lg">Professional Growth</h3>
                  <p className="text-purple-100 text-sm">Frontend Developer Intern. Turning pixels into performant, responsive web apps.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}