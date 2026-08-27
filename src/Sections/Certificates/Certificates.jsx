import React from "react";
import { FaExternalLinkAlt, FaGraduationCap } from "react-icons/fa";

export default function Certificates() {
  const certificatesList = [
    {
      id: 1,
      title: "Web Coding 2.0",
      issuer: "Freelancing Club, UAF",
      date: "2026",
      description: "Attended an exclusive frontend development workshop featuring industry trainers sharing professional experiences, advanced web building concepts, and practical coding strategies.",
      image: "/webcoding.png",
      credentialLink: "/webcoding.png"
    },
    {
      id: 2,
      title: "Certified Frontend & React Developer",
      issuer: "CODE FUSION",
       date: "2026",
      
      description: "Successfully Completed intensive training covering HTML, CSS, JavaScript, Bootstrap, React.js, Redux Toolkit, Material UI (MUI), Tailwind CSS, and RESTful API integration for dynamic web applications.",
      image: "/codefusion.jpg", // Jab image aajaye yahan path de dijiyega
      credentialLink: "/codefusion.jpg"
    }
  ];

  return (
    <>
      {/*  Dancing Script Google Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');`}
      </style>

      {/* Body background is untouched, section uses clean layout */}
      <section id="certificates" className="py-28 relative text-slate-800">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-5 w-72 h-72 bg-purple-300/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-5 w-72 h-72 bg-fuchsia-300/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-20" data-aos="fade-up">
            <span className="text-xs font-bold tracking-widest text-purple-700 uppercase bg-purple-100/80 px-4 py-2 rounded-full border border-purple-200 shadow-sm inline-block">
              My Credentials
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-4">
              Professional <span className="text-purple-600 font-normal text-5xl sm:text-6xl" style={{ fontFamily: "'Dancing Script', cursive" }}>Certifications</span>
            </h2>
            <p className="text-slate-600 text-base mt-4">
             Validating my technical expertise through recognized certifications, continuous learning, and real-world web development practices.
            </p>
          </div>

          {/* Certificates Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificatesList.map((cert) => (
              <div 
                key={cert.id}
                className="bg-white/90 backdrop-xl rounded-3xl border border-purple-200/80 shadow-xl shadow-purple-500/5 hover:border-purple-400 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                data-aos="fade-up"
              >
                {/* Certificate Image Box */}
                {cert.image ? (
                  <div className="relative h-60 w-full overflow-hidden bg-purple-50 border-b border-purple-100">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {cert.issuer} {cert.date}
                    </div>
                  </div>
                ) : (
                  <div className="relative h-60 w-full flex items-center justify-center bg-purple-50/60 border-b border-purple-100 text-purple-400">
                    <div className="text-center space-y-2">
                      <FaGraduationCap className="text-4xl mx-auto opacity-50" />
                      <span className="text-xs font-bold uppercase tracking-wider">Coming Soon</span>
                    </div>
                  </div>
                )}

                {/* Content Area */}
                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full border border-purple-200">
                        {cert.issuer}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {cert.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* View Certificate Button */}
                  <div className="pt-4 border-t border-purple-100 mt-6">
                    {cert.credentialLink !== "#" ? (
                      <a 
                        href={cert.credentialLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 border border-purple-200 shadow-sm"
                      >
                        <span>View My Certificate</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="w-full py-3 px-4 rounded-xl bg-slate-100 text-slate-400 font-bold text-sm flex items-center justify-center gap-2 cursor-not-allowed border border-slate-200"
                      >
                       
                      </button>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}