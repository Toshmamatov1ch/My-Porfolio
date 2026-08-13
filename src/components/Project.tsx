import React, { useRef } from "react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  link: string;
}

export const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "MARS LMS",
      subtitle: "Gibrid o'quv ekotizimi",
      gradient: "from-purple-950 via-slate-900 to-black",
      link: "https://mars-forge-landing.vercel.app/",
    },
    {
      id: "2",
      title: "MODME",
      subtitle: "Savdo bo'yicha buyruq markazi",
      gradient: "from-rose-950 via-zinc-900 to-black",
      link: "#",
    },
    {
      id: "3",
      title: "LUMI STUDIO",
      subtitle: "Awwwards darajasidagi portfolio",
      gradient: "from-slate-900 via-sky-950 to-black",
      link: "#",
    },
    {
      id: "4",
      title: "COBALT PAY",
      subtitle: "Onlayn to'lov platformasi",
      gradient: "from-indigo-950 via-slate-900 to-black",
      link: "#",
    },
    {
      id: "5",
      title: "MARS BOT",
      subtitle: "Aqlli buyurtma boshqaruvi",
      gradient: "from-orange-950 via-zinc-900 to-black",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#f8f8f8] text-black py-20 px-6 md:px-16 flex flex-col justify-between overflow-hidden border-t border-black/10"
    >
      {/* Top Header Section */}
      <div className="max-w-7xl w-full mx-auto">
        {/* Small Tagline */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-4 h-[2px] bg-[#ff4d00]" />
          <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
            ISHLARIMIZ
          </span>
        </div>

        {/* Title & Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-black">
              TANLANGAN <br /> LOYIHALAR
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4 lg:pl-12">
            <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">
              Mijozlarimiz bilan birgalikda yaratgan eng so'nggi raqamli
              yechimlar.
            </p>

            <div className="flex items-center space-x-3 text-xs font-mono text-gray-400 pt-4">
              <span>ISHLAR</span>
              <div className="w-12 h-[1px] bg-gray-300" />
              <span>02 / 08</span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll / Cards Section */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar pb-8 pt-4 flex space-x-6 cursor-grab active:cursor-grabbing px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex-none w-[280px] sm:w-[320px] h-[420px] rounded-2xl bg-gradient-to-b ${project.gradient} p-6 flex flex-col justify-end shadow-2xl hover:scale-[1.02] transition-transform duration-300 relative group overflow-hidden border border-black/5`}
          >
            {/* Subtle Inner Glow on Hover */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Card Content */}
            <div className="relative z-10 space-y-1">
              <h3 className="text-xl font-bold text-white tracking-wide uppercase">
                {project.title}
              </h3>
              <p className="text-xs text-gray-400 font-light tracking-wide">
                {project.subtitle}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
