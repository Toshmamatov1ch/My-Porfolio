import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Layout, Cpu, Globe } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: string; desc: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5 text-[#ff4d00]" />,
    skills: [
      {
        name: "React",
        level: "95%",
        desc: "Standalone React, Hooks, Context API",
      },
      {
        name: "TypeScript",
        level: "90%",
        desc: "Type safety, Interfaces, Generics",
      },
      {
        name: "Tailwind CSS",
        level: "98%",
        desc: "Modern styling, responsive layouts",
      },
      {
        name: "JavaScript (ES6+)",
        level: "95%",
        desc: "Asynchronous JS, DOM manipulation",
      },
    ],
  },
  {
    id: "animation",
    title: "Animations & 3D",
    icon: <Cpu className="w-5 h-5 text-[#ff4d00]" />,
    skills: [
      {
        name: "Framer Motion",
        level: "90%",
        desc: "Complex page transitions & gestures",
      },
      {
        name: "Spline 3D",
        level: "85%",
        desc: "Interactive 3D web scenes integration",
      },
      {
        name: "CSS Animations",
        level: "92%",
        desc: "Keyframes, smooth transitions",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: <Globe className="w-5 h-5 text-[#ff4d00]" />,
    skills: [
      {
        name: "Git & GitHub",
        level: "90%",
        desc: "Version control, collaboration",
      },
      {
        name: "Vite / Netlify",
        level: "92%",
        desc: "Fast bundling, continuous deployment",
      },
      {
        name: "ClickUp / Task Manager",
        level: "95%",
        desc: "Project tracking & productivity",
      },
    ],
  },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const currentCategory =
    skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white py-24 px-6 md:px-16 flex flex-col justify-between overflow-hidden border-t border-gray-200 dark:border-white/10 transition-colors duration-300"
    >
      {/* Background Spline 3D Model Scene */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-auto">
        {/* Bu yerga o'zingizga yoqqan Spline 3Dscene havolasini qo'yasiz */}
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>

      {/* Dark/Light gradient overlay to keep text readable */}
      <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 dark:from-[#0a0a0a] dark:via-[#0a0a0a]/80 to-transparent z-1 pointer-events-none transition-colors duration-300" />

      {/* Header Title */}
      <div className="relative z-10 max-w-7xl w-full mx-auto mb-12">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-4 h-0.5 bg-[#ff4d00]" />
          <span className="text-[10px] font-mono tracking-widest text-[#ff4d00] uppercase">
            EKSPERTIZA VA IMKONIYATLAR
          </span>
        </div>
        <h2 className="text-4xl sm:text-7xl font-extrabold uppercase tracking-tight text-gray-900 dark:text-white">
          SKILLAR & TEXNOLOGIYALAR
        </h2>
      </div>

      {/* Content Container (Tabs + Active Skills Grid) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Side: Category Tabs */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          {skillCategories.map((category) => {
            const isActive = category.id === activeTab;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center justify-between p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gray-100 dark:bg-white/10 border-[#ff4d00] shadow-[0_0_20px_rgba(255,77,0,0.2)]"
                    : "bg-gray-50/70 dark:bg-black/40 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/30"
                }`}
              >
                <div className="flex items-center space-x-3">
                  {category.icon}
                  <span className="font-bold text-base sm:text-lg tracking-wide text-gray-900 dark:text-white">
                    {category.title}
                  </span>
                </div>
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive
                      ? "bg-[#ff4d00] animate-pulse"
                      : "bg-gray-400 dark:bg-zinc-700"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Side: Skills Details Animated Cards */}
        <div className="lg:col-span-8 bg-gray-50/80 dark:bg-black/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-10 min-h-95 flex flex-col justify-center transition-colors duration-300">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {currentCategory.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl p-5 hover:border-[#ff4d00]/50 transition-colors group shadow-sm dark:shadow-none"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-[#ff4d00] transition-colors">
                      {skill.name}
                    </h4>
                    <span className="font-mono text-xs text-[#ff4d00] bg-[#ff4d00]/10 px-2.5 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-mono">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 max-w-7xl w-full mx-auto text-center text-[10px] font-mono text-gray-500 tracking-widest uppercase mt-16">
        FRONTEND ARCHITECTURE & INTERACTIVE 3D DESIGN
      </div>
    </section>
  );
};
