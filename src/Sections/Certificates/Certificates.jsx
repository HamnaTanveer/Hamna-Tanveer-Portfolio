import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaExternalLinkAlt, FaCheckCircle, FaAward } from "react-icons/fa";

const certificate = {
  title: "Certified Frontend & React Developer",
  issuer: "CODE FUSION",
  date: "2026",
  description:
    "Completed intensive training covering HTML, CSS, JavaScript, Bootstrap, React.js, Redux Toolkit, Material UI (MUI), Tailwind CSS, and RESTful API integration for dynamic web applications.",
  image: "/codefusion.jpg",
  credentialLink: "/codefusion.jpg",
};

export default function Certificates() {
  const cardRef = useRef(null);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const shineX = useTransform(springX, [-0.5, 0.5], ["20%", "80%"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');`}
      </style>

      <section id="certificates" className="py-28 relative text-slate-800">
        <div className="absolute top-1/4 left-5 w-72 h-72 bg-purple-300/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-5 w-72 h-72 bg-fuchsia-300/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs font-bold tracking-widest text-purple-700 uppercase bg-purple-100/80 px-4 py-2 rounded-full border border-purple-200 shadow-sm inline-block">
              My Credentials
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-4">
              Professional{" "}
              <span
                className="text-purple-600 font-normal text-5xl sm:text-6xl"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Certification
              </span>
            </h2>
            <p className="text-slate-600 text-base mt-4">
              A milestone in my journey as a developer — validated skills,
              real training, and hands-on experience.
            </p>
          </motion.div>

          {/* Featured certificate — content left, certificate image right */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              aria-hidden
              animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.03, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-3 bg-gradient-to-br from-fuchsia-400 via-purple-400 to-violet-400 rounded-[2.5rem] blur-2xl opacity-30"
            />

            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformPerspective: 1200 }}
              className="relative bg-white/95 backdrop-blur-xl rounded-[2rem] border border-purple-200/80 shadow-2xl shadow-purple-500/20 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Content — left */}
              <div className="order-2 md:order-1 md:w-1/2 p-8 md:p-10 flex flex-col justify-center space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full border border-purple-200">
                    <FaAward className="text-purple-500" />
                    {certificate.issuer}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{certificate.date}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                  {certificate.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {certificate.description}
                </p>

                <a
                  href={certificate.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 text-white font-bold text-sm items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-purple-300/50 hover:scale-[1.03] active:scale-95"
                >
                  <span>View Certificate</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>

              {/* Certificate image — right */}
              <div className="order-1 md:order-2 md:w-1/2 relative h-64 md:h-auto min-h-[280px] bg-purple-50 border-b md:border-b-0 md:border-l border-purple-100">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                <motion.div
                  aria-hidden
                  style={{ left: shineX }}
                  className="pointer-events-none absolute top-0 -translate-x-1/2 h-full w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />

                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 12 }}
                  className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full"
                >
                  <FaCheckCircle className="text-emerald-400" />
                  Verified
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
}