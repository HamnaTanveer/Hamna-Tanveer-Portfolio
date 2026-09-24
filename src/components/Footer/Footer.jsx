import React from "react";
import { FaHeart } from "react-icons/fa"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-stone bg-white/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-2 text-xs text-body">
        
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