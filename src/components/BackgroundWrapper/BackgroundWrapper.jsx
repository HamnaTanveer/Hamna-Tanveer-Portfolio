import React from "react";
import { motion } from "framer-motion";

export default function BackgroundWrapper({ children }) {
  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-ink overflow-hidden selection:bg-sage/30">
      
      {/* 1. Subtle Engineering Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(#879A83 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      {/* 2. Dynamic Floating Animated Glows (Sage & Clay) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        {/* Top-Left Sage Glow */}
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, 40, 80, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-[35rem] h-[35rem] bg-sage-light/25 rounded-full blur-[120px]"
        />

        {/* Center-Right Clay Glow */}
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 70, -30, 0],
            scale: [1, 1.1, 1.05, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 -right-32 w-[38rem] h-[38rem] bg-clay/15 rounded-full blur-[140px]"
        />

        {/* Bottom-Left Subtle Earthy Glow */}
        <motion.div
          animate={{
            x: [0, 40, -50, 0],
            y: [0, -50, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-32 left-1/4 w-[30rem] h-[30rem] bg-sand/60 rounded-full blur-[100px]"
        />
      </div>

      {/* 3. Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>

    </div>
  );
}