import React from "react";
import { FaHeart } from "react-icons/fa"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-purple-100/70 bg-white/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-2 text-xs text-slate-500">
        
        {/* Main Copyright */}
        <p>© {currentYear} Hamna Tanveer. All rights reserved.</p>
        
        {/* Secondary Info */}
        <div className="flex items-center gap-4">
          <span>Frontend Developer</span>
          <span className="text-purple-200">|</span>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart className="text-purple-500 text-[11px]" /> using React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}