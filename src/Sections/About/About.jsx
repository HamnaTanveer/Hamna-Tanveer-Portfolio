import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

const cards = [
  {
    icon: <FaGraduationCap />,
    iconColor: "text-sage-dark",
    title: "Academic Roots",
    text: "BS Software Engineering at UAF. Building the foundation of computer science.",
  },
  {
    icon: <FaLaptopCode />,
    iconColor: "text-clay",
    title: "Tech Stack",
    text: "Specialized in React.js, Tailwind CSS, and modern web interfaces.",
  },
];

const stats = [
  { value: "2+", label: "Years Learning" },
  { value: "15+", label: "Projects Built" },
  { value: "5", label: "Certification" },
  { value: "10+", label: "Technologies" },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-sage rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-clay rounded-full blur-3xl"></div>
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
            <h2 className="text-4xl font-extrabold text-ink">
              My{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-sage-dark via-sage to-clay"
                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: "1.25em" }}
              >
                Journey
              </span>
            </h2>
            <p className="text-body leading-relaxed">
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
                className="p-6 rounded-3xl bg-white/70 backdrop-blur-md border border-stone/60 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`text-2xl mb-4 ${card.iconColor}`}>{card.icon}</div>
                <h3 className="font-bold text-ink text-lg">{card.title}</h3>
                <p className="text-body text-sm mt-1">{card.text}</p>
              </motion.div>
            ))}

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="md:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-sage-dark to-sage text-white shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl"><FaRocket /></div>
                <div>
                  <h3 className="font-bold text-lg">Professional Growth</h3>
                  <p className="text-white/85 text-sm">Frontend Developer Intern. Turning pixels into performant, responsive web apps.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-stone/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-sage-dark to-clay bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm text-body font-medium mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}