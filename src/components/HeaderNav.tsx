import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface Section {
  id: string;
  number: string;
  label: string;
}

const sections: Section[] = [
  { id: "home", number: "000", label: "Asosiy" },
  { id: "about", number: "010", label: "Haqimda" },
  { id: "services", number: "020", label: "Xizmatlar" },
  { id: "process", number: "030", label: "Jarayon" },
  { id: "skills", number: "040", label: "Ko'nikmalar" },
  { id: "projects", number: "050", label: "Loyihalar" },
  { id: "testimonials", number: "060", label: "Fikrlar" },
  { id: "faq", number: "070", label: "Savollar" },
  { id: "contact", number: "080", label: "Aloqa" },
  { id: "footer", number: "100", label: "Footer" },
];

export const HeaderNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((sec) => {
        const element = document.getElementById(sec.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { number: "01", name: "Haqimda", href: "about" },
    { number: "02", name: "Admin Panel", href: "/admin", isRoute: true },
    { number: "03", name: "Skillar", href: "skills" },
    { number: "04", name: "Loyihalar", href: "projects" },
    { number: "05", name: "Mijozlar Fikri", href: "testimonials" },
    { number: "06", name: "Aloqa", href: "contact" },
  ];

  return (
    <>
      {/* 1. TOP FIXED BAR (Menu yopiq bo'lgandagina ko'rinadi) */}
      {!isOpen && (
        <header className="fixed top-0 left-0 w-full z-[990] flex justify-between items-center px-6 md:px-12 py-6 pointer-events-none transition-opacity duration-300">
          <div className="flex items-center space-x-3 pointer-events-auto bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#ff4d00] animate-ping" />
            <span className="text-xs md:text-sm text-white font-mono uppercase tracking-wider font-semibold">
              DIYORBEK TOSHMAMATOV — FRONTEND DEVELOPER
            </span>
          </div>

          <div className="flex items-center space-x-6 pointer-events-auto">
            <span className="hidden md:block font-mono text-xs text-gray-400 tracking-widest uppercase">
              TASHKENT, UZBEKISTAN
            </span>
          </div>
        </header>
      )}

      {/* BURGER MENU BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 md:right-12 z-[999] w-12 h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:border-[#ff4d00] hover:text-[#ff4d00] transition-all duration-300 shadow-2xl cursor-pointer"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* 2. RIGHT FIXED RULER */}
      {!isOpen && (
        <aside className="fixed right-6 md:right-12 top-24 bottom-8 z-[980] hidden sm:flex flex-col justify-between items-end select-none pointer-events-auto transition-opacity duration-300">
          <div className="text-[#ff4d00] text-[10px] font-mono animate-pulse pr-[2px]">
            ▲
          </div>

          <div className="flex-1 flex flex-col justify-between items-end my-3 font-mono text-[10px] tracking-tighter">
            {sections.map((sec, index) => {
              const isActive = activeSection === sec.id;

              return (
                <React.Fragment key={sec.id}>
                  <div
                    onClick={() => scrollToSection(sec.id)}
                    className="group relative flex items-center gap-2 cursor-pointer py-0.5"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#ff4d00] text-[9px] uppercase font-semibold pr-1">
                      {sec.label}
                    </span>

                    <span
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-[#ff4d00] font-bold scale-110 drop-shadow-[0_0_8px_rgba(255,77,0,0.8)]"
                          : "text-zinc-600 group-hover:text-zinc-300"
                      }`}
                    >
                      {sec.number}
                    </span>

                    <div
                      className={`h-[1px] transition-all duration-300 ${
                        isActive
                          ? "w-5 bg-[#ff4d00] shadow-[0_0_8px_#ff4d00]"
                          : "w-2.5 bg-zinc-800 group-hover:bg-zinc-500"
                      }`}
                    />
                  </div>

                  {index < sections.length - 1 && (
                    <div className="flex flex-col justify-around items-end flex-1 my-0.5 opacity-25">
                      <div className="w-1.5 h-[1px] bg-zinc-700" />
                      <div className="w-1.5 h-[1px] bg-zinc-700" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="text-zinc-600 text-[9px] font-mono pr-[2px]">▼</div>
        </aside>
      )}

      {/* 3. FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[985] bg-[#0d0d0d] text-white flex flex-col justify-between p-8 md:p-16 pt-28"
          >
            <div className="flex justify-between items-center border-b border-white/10 pb-4 text-xs font-mono uppercase tracking-widest text-gray-400">
              <span className="font-bold text-white">DIYORBEK.DEV</span>
              <span className="pr-16">NAVIGATSIYA</span>
            </div>

            <div className="my-auto flex flex-col space-y-4">
              {navLinks.map((link, index) => {
                if (link.isRoute) {
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.06, duration: 0.4 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-baseline space-x-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight hover:text-[#ff4d00] transition-colors w-fit"
                      >
                        <span className="text-xs sm:text-sm font-mono text-gray-500 group-hover:text-[#ff4d00]">
                          {link.number}
                        </span>
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.06, duration: 0.4 }}
                  >
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection(link.href);
                      }}
                      className="group flex items-baseline space-x-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight hover:text-[#ff4d00] transition-colors w-fit text-left cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-mono text-gray-500 group-hover:text-[#ff4d00]">
                        {link.number}
                      </span>
                      <span>{link.name}</span>
                    </button>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">
                  ALOQA
                </span>
                <a
                  href="mailto:hello@marsforge.uz"
                  className="text-sm md:text-base font-semibold hover:underline"
                >
                  hello@marsforge.uz
                </a>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection("contact");
                }}
                className="inline-flex items-center space-x-2 bg-[#ff4d00] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <span>LOYIHA BOSHLASH</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
