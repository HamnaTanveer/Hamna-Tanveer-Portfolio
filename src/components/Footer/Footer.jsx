import React from "react";
import { FaHeart, FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-6 border-t border-stone bg-white/50 backdrop-blur-sm mt-20">

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-sage-dark to-sage text-white flex items-center justify-center shadow-lg shadow-sage-dark/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
      >
        <FaArrowUp className="text-sm" />
      </button>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-3 text-xs text-body">

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/HamnaTanveer"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-sand border border-stone flex items-center justify-center text-ink hover:bg-gradient-to-r hover:from-sage-dark hover:to-sage hover:text-white transition-all"
          >
            <FaGithub className="text-xs" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/hamna-tanveer01/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-sand border border-stone flex items-center justify-center text-ink hover:bg-gradient-to-r hover:from-sage-dark hover:to-sage hover:text-white transition-all"
          >
            <FaLinkedin className="text-xs" />
          </a>
        </div>

        {/* Main Copyright */}
        <p>© {currentYear} Hamna Tanveer. All rights reserved.</p>

        {/* Secondary Info */}
        <div className="flex items-center gap-4">
          <span>Frontend Developer</span>
          <span className="text-stone">|</span>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart className="text-clay text-[11px]" /> using React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}