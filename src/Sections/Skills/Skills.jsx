import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
  SiStyledcomponents,
  SiRedux,
  SiVercel,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Web Development",
    skills: [
      { name: "HTML5", level: 90, icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", level: 85, icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "Bootstrap", level: 75, icon: <SiBootstrap />, color: "text-purple-600" },
      { name: "JavaScript", level: 80, icon: <SiJavascript />, color: "text-yellow-500" },
      { name: "jQuery", level: 65, icon: <SiJquery />, color: "text-sky-600" },
      { name: "React.js", level: 85, icon: <FaReact />, color: "text-sky-500" },
    ],
  },
  {
    title: "Styling & UI Libraries",
    skills: [
      { name: "React Bootstrap", level: 70, icon: <SiBootstrap />, color: "text-purple-500" },
      { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss />, color: "text-cyan-500" },
      { name: "Material UI", level: 70, icon: <SiMui />, color: "text-blue-600" },
      { name: "Styled Components", level: 65, icon: <SiStyledcomponents />, color: "text-pink-500" },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux Toolkit (with React)", level: 70, icon: <SiRedux />, color: "text-sage-dark" },
    ],
  },
  {
    title: "Deployment & Version Control",
    skills: [
      { name: "Vercel", level: 80, icon: <SiVercel />, color: "text-ink" },
      { name: "GitHub", level: 80, icon: <FaGithub />, color: "text-ink" },
    ],
  },
];

const marqueeIcons = [
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
  { icon: <SiBootstrap />, name: "Bootstrap", color: "text-purple-600" },
  { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-500" },
  { icon: <SiJquery />, name: "jQuery", color: "text-sky-600" },
  { icon: <FaReact />, name: "React.js", color: "text-sky-500" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-500" },
  { icon: <SiMui />, name: "Material UI", color: "text-blue-600" },
  { icon: <SiStyledcomponents />, name: "Styled Components", color: "text-pink-500" },
  { icon: <SiRedux />, name: "Redux Toolkit", color: "text-sage-dark" },
  { icon: <SiVercel />, name: "Vercel", color: "text-ink" },
  { icon: <FaGithub />, name: "GitHub", color: "text-ink" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-sage-light/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-clay/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold tracking-widest text-sage-dark uppercase bg-sand/80 px-4 py-2 rounded-full border border-stone shadow-sm inline-block">
            What I Work With
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink mt-4">
            My{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-sage-dark via-sage to-clay"
              style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: "1.2em" }}
            >
              Skills
            </span>
          </h2>
          <p className="text-body text-base mt-4">
            The languages, frameworks, and tools I use to design, build, and ship modern web applications.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white/70 backdrop-blur-md border border-stone/60 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="font-bold text-ink text-base mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-clay" />
                {group.title}
              </h3>

              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                        <span className={`text-base ${skill.color}`}>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-body">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-sand overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1, delay: 0.2 + si * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-sage-dark to-clay"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech marquee — continuous scroll of all tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[...marqueeIcons, ...marqueeIcons].map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-stone/60 shadow-sm whitespace-nowrap"
              >
                <span className={`text-xl ${t.color}`}>{t.icon}</span>
                <span className="text-sm font-medium text-ink">{t.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}