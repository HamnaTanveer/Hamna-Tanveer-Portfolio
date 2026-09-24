import React from "react";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { portfolioData } from "../../components/PortfolioData/PortfolioData";

export default function Project() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* Section Header */}
        <div className="text-center space-y-3" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            My{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-sage-dark via-sage to-clay"
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontWeight: 700,
                fontSize: "1.35em",
              }}
            >
              Projects
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-sage-dark to-sage mx-auto rounded-full"></div>

          <p className="text-body max-w-xl mx-auto text-sm sm:text-base">
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
                  <span className="text-xs sm:text-sm font-semibold tracking-widest text-sage-dark uppercase block">
                    {project.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                    {project.title}
                  </h3>

                  <div
                    className={`p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-stone shadow-xl shadow-sage-dark/10 ${
                      isEven ? "lg:-mr-20" : "lg:-ml-20"
                    }`}
                  >
                    <p className="text-body text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Icons / Links */}
                    <div className="flex items-center gap-3 pt-5">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-sand/80 border border-stone flex items-center justify-center text-sage-dark hover:bg-gradient-to-r hover:from-sage-dark hover:to-sage hover:text-white transition-all duration-300 shadow-sm"
                        title="View Live Project"
                      >
                        <FaGlobe className="text-base" />
                      </a>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-sand/80 border border-stone flex items-center justify-center text-sage-dark hover:bg-gradient-to-r hover:from-sage-dark hover:to-sage hover:text-white transition-all duration-300 shadow-sm"
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
                    className="block relative group overflow-hidden rounded-3xl border border-stone shadow-lg bg-white"
                  >
                    <div className="absolute inset-0 bg-sage-dark/5 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
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