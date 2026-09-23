import React, { useState } from "react";
import { FaEye, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    //  BASE_URL so this works even if deployed under a subpath
 
const cvPath = `${import.meta.env.BASE_URL}Hamna_Tanveer_CV.pdf#toolbar=0`;
    return (
        <>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}
            </style>

            <header className="fixed top-0 left-0 w-full z-50 bg-purple-50/70 backdrop-blur-3xl border-b border-purple-200/40 shadow-sm px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Stylish HT Cursive Font */}
                    <a href="#home" className="flex items-center group">
                        <span
                            className="text-4xl md:text-5xl bg-gradient-to-r from-fuchsia-400 via-purple-500 to-violet-600 bg-clip-text text-transparent font-bold tracking-wide transition-transform duration-300 group-hover:scale-105"
                            style={{ fontFamily: "'Great Vibes', cursive" }}
                        >
                            HT
                        </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav
                        className="hidden md:flex items-center space-x-8 text-base font-semibold text-slate-700"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        <a href="#home" className="hover:text-purple-700 transition-all duration-200 hover:scale-105">Home</a>
                        <a href="#about" className="hover:text-purple-700 transition-all duration-200 hover:scale-105">About</a>
                        <a href="#projects" className="hover:text-purple-700 transition-all duration-200 hover:scale-105">Projects</a>
                        <a href="#certificates" className="hover:text-purple-700 transition-all duration-200 hover:scale-105">Certificates</a>
                        <a href="#contact" className="hover:text-purple-700 transition-all duration-200 hover:scale-105">Contact</a>
                    </nav>

                    {/* Desktop View CV Button */}
                    <div className="hidden md:block">
                        <a
                            href={cvPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 rounded-full shadow-lg shadow-purple-300/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            <FaEye className="text-xs" />
                            <span> My Resume</span>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-purple-700 focus:outline-none text-2xl p-1"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div
                        className="md:hidden absolute top-full left-0 w-full bg-purple-50/80 backdrop-blur-3xl border-b border-purple-200 shadow-xl py-6 px-6 flex flex-col space-y-4 transition-all"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        <a href="#home" onClick={toggleMenu} className="text-base font-semibold text-slate-700 hover:text-purple-700 transition-colors">Home</a>
                        <a href="#about" onClick={toggleMenu} className="text-base font-semibold text-slate-700 hover:text-purple-700 transition-colors">About</a>
                        <a href="#projects" onClick={toggleMenu} className="text-base font-semibold text-slate-700 hover:text-purple-700 transition-colors">Projects</a>
                        <a href="#certificates" onClick={toggleMenu} className="text-base font-semibold text-slate-700 hover:text-purple-700 transition-colors">Certificates</a>
                        <a href="#contact" onClick={toggleMenu} className="text-base font-semibold text-slate-700 hover:text-purple-700 transition-colors">Contact</a>

                        {/* Mobile View CV Button */}
                        <a
                            href={cvPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMenu}
                            className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 rounded-full shadow-lg shadow-purple-300/50 transition-all duration-300 transform hover:scale-105 active:scale-95 w-fit"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            <FaEye className="text-xs" />
                            <span> My Resume</span>
                        </a>
                    </div>
                )}
            </header>
        </>
    );
}