import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  link: string;
  github: string;
  image: string;
}

export const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "AL MUAMALAT",
      subtitle: "Islom axloqi va moliyaviy yechimlar",
      gradient: "from-emerald-950 via-slate-900 to-black",
      link: "https://musobaqaa-beta.vercel.app/",
      github: "https://github.com/Toshmamatov1ch/musobaqaa",
      image: "/maqola.png",
    },
    {
      id: "2",
      title: "FINFLOW",
      subtitle: "Moliyaviy oqimlarni boshqarish tizimi",
      gradient: "from-rose-950 via-zinc-900 to-black",
      link: "https://finflow-indol.vercel.app/", // Yangi havola
      github: "https://github.com/Toshmamatov1ch/finflow", // Yangi GitHub
      image: "/finelow.png",
    },
    {
      id: "3",
      title: "SPLASH",
      subtitle: "Zamonaviy va tezkor veb-sayt",
      gradient: "from-slate-900 via-sky-950 to-black",
      link: "https://fastidious-cat-99c58e.netlify.app/",
      github: "https://github.com/Toshmamatov1ch/Splash",
      image: "/unsplash.png",
    },
    {
      id: "4",
      title: "SMART PHONE",
      subtitle: "Mobil texnologiyalar do'koni",
      gradient: "from-indigo-950 via-slate-900 to-black",
      link: "https://smart-phone-1ada5.web.app/",
      github: "https://github.com/Toshmamatov1ch/Smart-Phone",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "5",
      title: "Blogifiy",
      subtitle: "Post yaratish uchun platforma",
      gradient: "from-orange-950 via-zinc-900 to-black",
      link: "https://new-project-hazel-alpha.vercel.app/",
      github: "#", // <--- GitHub havolasini keyin qo'shing
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white py-20 px-6 md:px-16 flex flex-col justify-between overflow-hidden border-t border-gray-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-4 h-0.5 bg-[#ff4d00]" />
          <span className="text-[10px] font-mono tracking-widest text-gray-500 dark:text-gray-400 uppercase">
            ISHLARIMIZ
          </span>
        </div>

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
              <div className="w-12 h-px bg-gray-300 dark:bg-gray-700" />
              <span>02 / 08</span>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar pb-8 pt-4 flex space-x-6 cursor-grab active:cursor-grabbing px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex-none w-70 sm:w-87.5 h-112.5 rounded-2xl bg-linear-to-b ${project.gradient} p-8 flex flex-col justify-between shadow-2xl relative group overflow-hidden border border-gray-200 dark:border-white/10`}
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-90" />
            </div>

            <div className="relative z-10 flex justify-end">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#ff4d00] hover:border-[#ff4d00] transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>

            <div className="relative z-10 space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white tracking-wide uppercase">
                {project.title}
              </h3>
              <p className="text-xs text-gray-300 font-light tracking-wide">
                {project.subtitle}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#ff4d00] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 cursor-pointer"
              >
                <span>Loyihani ko'rish</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
