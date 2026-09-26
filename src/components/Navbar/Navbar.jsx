import React, { useState } from "react";
import { FaEye, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // BASE_URL so this works even if deployed under a subpath
    const cvPath = `${import.meta.env.BASE_URL}hamna-cv01.pdf#toolbar=0`;

    return (
        <>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}
            </style>

            {/* Fully Transparent Glassmorphic Header with smooth blur */}
            <header className="fixed top-0 left-0 w-full z-50 bg-[#FAF6EF]/30 backdrop-blur-md border-b border-[#DFD2C0]/40 shadow-sm px-6 py-4 transition-all duration-300">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Stylish HT Cursive Font with glowing hover */}
                    <a href="#home" className="flex items-center group">
                        <span
                            className="text-4xl md:text-5xl bg-gradient-to-r from-sage-dark via-sage to-clay bg-clip-text text-transparent font-bold tracking-wide transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-sm"
                            style={{ fontFamily: "'Great Vibes', cursive" }}
                        >
                            HT
                        </span>
                    </a>

                    {/* Desktop Navigation Links with Underline Animation */}
                    <nav
                        className="hidden md:flex items-center space-x-8 text-base font-semibold text-ink"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        {["home", "about", "skills", "projects", "certificates", "contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="relative py-1 capitalize text-ink/80 hover:text-sage-dark transition-all duration-300 group"
                            >
                                {item}
                                {/* Stylish Animated Underline on Hover */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sage-dark transition-all duration-300 group-hover:w-full rounded-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Desktop View CV Button */}
                    <div className="hidden md:block">
                        <a
                            href={cvPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-white rounded-full group bg-gradient-to-r from-sage-dark to-sage shadow-md hover:shadow-sage-dark/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-transparent rounded-full flex items-center gap-2">
                                <FaEye className="text-xs" />
                                <span>My Resume</span>
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-sage-dark focus:outline-none text-2xl p-1 transition-transform active:scale-90"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                </div>

                {/* Mobile Dropdown Menu with Glassmorphism */}
                {isOpen && (
                    <div
                        className="md:hidden absolute top-full left-0 w-full bg-[#FAF6EF]/90 backdrop-blur-xl border-b border-[#DFD2C0] shadow-xl py-6 px-8 flex flex-col space-y-4 transition-all animate-fadeIn"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        {["home", "about", "skills", "projects", "certificates", "contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={toggleMenu}
                                className="text-base font-semibold text-ink hover:text-sage-dark hover:translate-x-1 transition-all duration-200 capitalize"
                            >
                                {item}
                            </a>
                        ))}

                        {/* Mobile View CV Button */}
                        <a
                            href={cvPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMenu}
                            className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-sage-dark to-sage rounded-full shadow-lg shadow-sage-dark/30 transition-all duration-300 transform hover:scale-105 active:scale-95 w-fit mt-2"
                        >
                            <FaEye className="text-xs" />
                            <span>My Resume</span>
                        </a>
                    </div>
                )}
            </header>
        </>
    );
}