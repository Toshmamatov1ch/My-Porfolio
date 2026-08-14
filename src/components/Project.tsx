import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  link: string;
  image: string; // Loyiha rasmi uchun
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
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // O'z rasmingizni qo'ying
    },
    {
      id: "2",
      title: "MODME",
      subtitle: "Savdo bo'yicha buyruq markazi",
      gradient: "from-rose-950 via-zinc-900 to-black",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: "LUMI STUDIO",
      subtitle: "Awwwards darajasidagi portfolio",
      gradient: "from-slate-900 via-sky-950 to-black",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "4",
      title: "COBALT PAY",
      subtitle: "Onlayn to'lov platformasi",
      gradient: "from-indigo-950 via-slate-900 to-black",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "5",
      title: "MARS BOT",
      subtitle: "Aqlli buyurtma boshqaruvi",
      gradient: "from-orange-950 via-zinc-900 to-black",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white py-20 px-6 md:px-16 flex flex-col justify-between overflow-hidden border-t border-gray-200 dark:border-white/10 transition-colors duration-300"
    >
      {/* Top Header Section */}
      <div className="max-w-7xl w-full mx-auto">
        {/* Small Tagline */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-4 h-[2px] bg-[#ff4d00]" />
          <span className="text-[10px] font-mono tracking-widest text-gray-500 dark:text-gray-400 uppercase">
            ISHLARIMIZ
          </span>
        </div>

        {/* Title & Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-gray-900 dark:text-white">
              TANLANGAN <br /> LOYIHALAR
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4 lg:pl-12">
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-normal leading-relaxed">
              Mijozlarimiz bilan birgalikda yaratgan eng so'nggi raqamli
              yechimlar.
            </p>

            <div className="flex items-center space-x-3 text-xs font-mono text-gray-500 pt-4">
              <span>ISHLAR</span>
              <div className="w-12 h-[1px] bg-gray-300 dark:bg-gray-700" />
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
            className={`flex-none w-[280px] sm:w-[350px] h-[450px] rounded-2xl bg-gradient-to-b ${project.gradient} p-8 flex flex-col justify-end shadow-2xl relative group overflow-hidden border border-gray-200 dark:border-white/10 cursor-pointer`}
          >
            {/* Loyiha Rasmi (Hover paytida ochiladi va kattalashadi) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-0 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              {/* Qoramtir gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
            </div>

            {/* Card Content */}
            <div className="relative z-10 space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white tracking-wide uppercase">
                {project.title}
              </h3>
              <p className="text-xs text-gray-300 font-light tracking-wide">
                {project.subtitle}
              </p>

              {/* Hover bo'lganda chiqadigan "Loyihani ko'rish" tugmasi */}
              <div className="pt-2 flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#ff4d00] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span>Loyihani ko'rish</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
