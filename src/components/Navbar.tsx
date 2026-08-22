// // components/Navbar.tsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "../context/ThemeContext";

// export const Navbar: React.FC = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 px-6 md:px-16 py-4 flex justify-between items-center transition-colors duration-300">
//       <Link
//         to="/"
//         className="text-lg font-mono font-bold tracking-wider text-gray-900 dark:text-white"
//       >
//         PORTFOLIO<span className="text-[#ff4d00]">.</span>
//       </Link>

//       <div className="flex items-center space-x-6 md:space-x-8 font-mono text-xs text-gray-600 dark:text-gray-400">
//         <a
//           href="#about"
//           className="hover:text-gray-900 dark:hover:text-white transition-colors"
//         >
//           O'ZIM HAQIMDA
//         </a>
//         <a
//           href="#projects"
//           className="hover:text-gray-900 dark:hover:text-white transition-colors"
//         >
//           LOYIHALAR
//         </a>
//         <a
//           href="#testimonials"
//           className="hover:text-gray-900 dark:hover:text-white transition-colors"
//         >
//           REVIEWS
//         </a>

//         {/* Admin Panel tugmasi */}
//         <Link
//           to="/admin"
//           className="px-4 py-2 border border-[#ff4d00]/50 text-[#ff4d00] hover:bg-[#ff4d00] hover:text-black transition-all rounded text-[11px] font-bold"
//         >
//           ADMIN PANEL
//         </Link>

//         {/* Tema almashtiruvchi tugma */}
//         <button
//           onClick={toggleTheme}
//           className="p-2.5 rounded-full border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-black/50 text-gray-900 dark:text-white hover:border-[#ff4d00] hover:text-[#ff4d00] transition-all cursor-pointer shadow-md flex items-center justify-center"
//           aria-label="Toggle Theme"
//         >
//           {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
//         </button>
//       </div>
//     </nav>
//   );
// };
