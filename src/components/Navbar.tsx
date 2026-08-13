// components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 md:px-16 py-4 flex justify-between items-center">
      <Link
        to="/"
        className="text-lg font-mono font-bold tracking-wider text-white"
      >
        PORTFOLIO<span className="text-[#ff4d00]">.</span>
      </Link>

      <div className="flex items-center space-x-8 font-mono text-xs text-gray-400">
        <a href="#about" className="hover:text-white transition-colors">
          HAQIDA
        </a>
        <a href="#projects" className="hover:text-white transition-colors">
          LOYIHALAR
        </a>
        <a href="#testimonials" className="hover:text-white transition-colors">
          REVIEWS
        </a>

        {/* "Tajriba va ko'nikmalar" o'rniga Admin Panel tugmasi */}
        <Link
          to="/admin"
          className="px-4 py-2 border border-[#ff4d00]/50 text-[#ff4d00] hover:bg-[#ff4d00] hover:text-black transition-all rounded text-[11px] font-bold"
        >
          ADMIN PANEL
        </Link>
      </div>
    </nav>
  );
};
