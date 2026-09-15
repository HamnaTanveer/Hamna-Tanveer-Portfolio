import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaRocket, FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiRedux, SiMui } from "react-icons/si";

const cards = [
  {
    icon: <FaGraduationCap />,
    iconColor: "text-purple-600",
    title: "Academic Roots",
    text: "BS Software Engineering at UAF. Building the foundation of computer science.",
  },
  {
    icon: <FaLaptopCode />,
    iconColor: "text-violet-600",
    title: "Tech Stack",
    text: "Specialized in React.js, Tailwind CSS, and modern web interfaces.",
  },
];

const techStack = [
  { icon: <FaReact />, name: "React", color: "text-sky-500" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-500" },
  { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-500" },
  { icon: <SiRedux />, name: "Redux Toolkit", color: "text-purple-600" },
  { icon: <SiMui />, name: "MUI", color: "text-blue-600" },
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
  { icon: <FaGithub />, name: "GitHub", color: "text-slate-700" },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Heading & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/3 space-y-4"
          >
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
             Still learning, still building — every project takes me one step closer to becoming the developer I want to be.
            </p>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-white/60 backdrop-blur-md border border-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`text-2xl mb-4 ${card.iconColor}`}>{card.icon}</div>
                <h3 className="font-bold text-slate-800 text-lg">{card.title}</h3>
                <p className="text-slate-500 text-sm mt-1">{card.text}</p>
              </motion.div>
            ))}

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="md:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-purple-600 to-violet-500 text-white shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl"><FaRocket /></div>
                <div>
                  <h3 className="font-bold text-lg">Professional Growth</h3>
                  <p className="text-purple-100 text-sm">Frontend Developer Intern. Turning pixels into performant, responsive web apps.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech marquee */}
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
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...techStack, ...techStack].map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-sm whitespace-nowrap"
              >
                <span className={`text-xl ${t.color}`}>{t.icon}</span>
                <span className="text-sm font-medium text-slate-700">{t.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}