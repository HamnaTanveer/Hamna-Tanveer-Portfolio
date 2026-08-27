import React from "react";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { portfolioData } from "../../components/PortfolioData/PortfolioData";

export default function Project() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* Section Header */}
        <div className="text-center space-y-3" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800">
            My{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-600 to-violet-600"
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontWeight: 700,
                fontSize: "1.35em",
              }}
            >
              Projects
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-violet-500 mx-auto rounded-full"></div>

          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Here are some of the web applications and tools I've built,
            reflecting my journey in frontend development.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {portfolioData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                
                data-aos={isEven ? "fade-right" : "fade-left"}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >

                {/* TEXT CONTENT */}
                <div
                  className={`lg:w-1/2 space-y-3 z-20 ${
                    isEven ? "lg:pr-0" : "lg:pl-0"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-semibold tracking-widest text-violet-600 uppercase block">
                    {project.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800">
                    {project.title}
                  </h3>

                  <div
                    className={`p-6 sm:p-8 rounded-3xl bg-white/55 backdrop-blur-xl border border-purple-200/50 shadow-2xl shadow-purple-300/30 ${
                      isEven ? "lg:-mr-20" : "lg:-ml-20"
                    }`}
                  >
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Icons / Links */}
                    <div className="flex items-center gap-3 pt-5">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-purple-100/70 border border-purple-300 flex items-center justify-center text-purple-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-violet-500 hover:text-white transition-all duration-300 shadow-md shadow-purple-200"
                        title="View Live Project"
                      >
                        <FaGlobe className="text-base" />
                      </a>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-purple-100/70 border border-purple-300 flex items-center justify-center text-purple-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-violet-500 hover:text-white transition-all duration-300 shadow-md shadow-purple-200"
                        title="GitHub Repository"
                      >
                        <FaGithub className="text-base" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="lg:w-7/12 w-full z-10">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group overflow-hidden rounded-3xl border border-purple-200 shadow-xl bg-white"
                  >
                    <div className="absolute inset-0 bg-purple-900/5 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[280px] sm:h-[350px] lg:h-[420px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}