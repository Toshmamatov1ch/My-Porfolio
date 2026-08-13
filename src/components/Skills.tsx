import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

interface StepItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1); // 02-bosqichdan boshlanadi

  const stepsData: StepItem[] = [
    {
      id: "1",
      number: "01",
      title: "TAHLIL VA STRATEGIYA",
      subtitle: "Loyiha maqsadlari va arxitekturani rejalashtirish",
      description:
        "Biznesingiz ehtiyojlarini o'rganamiz va eng to'g'ri raqamli yechimni shakllantiramiz.",
    },
    {
      id: "2",
      number: "02",
      title: "PROTOTIP VA UI/UX",
      subtitle: "Interfeys dizayni va foydalanuvchi tajribasi",
      description:
        "Awwwards darajasidagi minimalist, futuristik va qulay vizual interfeys tayyorlaymiz.",
    },
    {
      id: "3",
      number: "03",
      title: "DASTURLASH",
      subtitle: "Frontend va backend tizimini qurish",
      description:
        "Zamonaviy React va TypeScript yordamida tezkor hamda xavfsiz kod bazasini yozamiz.",
    },
    {
      id: "4",
      number: "04",
      title: "OPTIMIZATSIYA",
      subtitle: "Tezlik, SEO va animatsiyalarni sozlash",
      description:
        "Sayt va platformaning barcha qurilmalarda tez va silliq ishlashini ta'minlaymiz.",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const total = stepsData.length;
      const step = 1 / total;
      const index = Math.min(Math.floor(v / step), total - 1);
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, stepsData.length]);

  const activeStep = stepsData[activeIndex];

  // Oldingi va keyingi bosqichlar
  const getPrevIndex = () =>
    activeIndex > 0 ? activeIndex - 1 : stepsData.length - 1;
  const getNextIndex = () =>
    activeIndex < stepsData.length - 1 ? activeIndex + 1 : 0;

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#050303]">
      {/* Sticky Screen Section */}
      <section className="sticky top-0 w-full h-screen bg-[#050303] text-white flex flex-col justify-between py-6 px-8 md:px-16 overflow-hidden select-none">
        {/* Background Visual (Mars Terrain/Glow) - Integrated into background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.12] mix-blend-screen bg-[url('https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2000&auto=format&fit=crop')]" />

          {/* Ambient Orange Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff4d00]/10 rounded-full blur-[200px]" />
        </div>

        {/* TOP HEADER */}
        <div className="flex justify-between items-center z-30">
          <div className="text-xs font-mono font-bold tracking-widest text-white uppercase">
            MARS FORGE
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 text-[10px] font-mono">
              <button className="px-3 py-1 rounded-full bg-[#ff4d00] text-white font-bold">
                UZ
              </button>
              <button className="px-3 py-1 rounded-full text-gray-400 hover:text-white transition">
                RU
              </button>
              <button className="px-3 py-1 rounded-full text-gray-400 hover:text-white transition">
                EN
              </button>
            </div>

            <button className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition">
              <div className="space-y-1">
                <div className="w-4 h-[1.5px] bg-white" />
                <div className="w-4 h-[1.5px] bg-white" />
              </div>
            </button>
          </div>
        </div>

        {/* SUB HEADER */}
        <div className="flex justify-between items-center z-30 text-[10px] font-mono text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-[1.5px] bg-[#ff4d00]" />
            <span className="tracking-widest uppercase">BOSQICHLAR</span>
          </div>

          <div className="tracking-widest">
            0{activeIndex + 1} / 0{stepsData.length}
          </div>
        </div>

        {/* MAIN TOP TITLE */}
        <div className="z-30 text-center my-auto pt-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeStep.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="text-5xl sm:text-7xl md:text-8xl font-extralight tracking-widest text-white uppercase font-sans"
            >
              {activeStep.title}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE VERTICAL RULER */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 z-30 text-[9px] font-mono text-gray-600 pointer-events-none">
          <span>010</span>
          <span>020</span>
          <span>030</span>
          <span className="text-[#ff4d00] font-bold">237 —</span>
          <span>040</span>
          <span>050</span>
          <span>060</span>
        </div>

        {/* CENTER CONTENT & ORBITAL ARC */}
        <div className="relative w-full flex flex-col items-center justify-end pb-12 z-30">
          {/* Active Step Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="text-center max-w-lg space-y-3 mb-6 z-40 px-4"
            >
              {/* BIG ORANGE NUMBER */}
              <div className="text-6xl sm:text-7xl font-extrabold text-[#ff4d00] font-mono tracking-tight">
                {activeStep.number}
              </div>

              {/* Subtitle */}
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                {activeStep.subtitle}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed max-w-md mx-auto">
                {activeStep.description}
              </p>

              {/* Small Orange Down Arrow Triangle */}
              <div className="pt-2 flex justify-center">
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-[#ff4d00]" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CIRCULAR ORBIT RING & RAQAMLAR (Aynan chiziq ustida va burchakda) */}
          <div className="relative w-[380px] sm:w-[600px] md:w-[800px] h-[120px] sm:h-[180px] flex items-end justify-center pointer-events-none">
            {/* Curved Arc Line (Ring) over planet */}
            <div className="absolute bottom-[-220px] sm:bottom-[-320px] md:bottom-[-380px] w-[500px] sm:w-[750px] md:w-[950px] h-[500px] sm:h-[750px] md:h-[950px] rounded-full border border-white/20 pointer-events-none z-10" />

            {/* Orbit Numbers around the sphere (Aynan chiziq burchagida) */}
            <div className="absolute w-full flex justify-between items-center px-10 sm:px-24 md:px-32 bottom-2 z-20 pointer-events-auto">
              {/* Previous Step (Left side, -25deg rotation) */}
              <button
                onClick={() => setActiveIndex(getPrevIndex())}
                className="transition-all duration-300 font-mono font-black text-2xl sm:text-4xl -rotate-[25deg] text-white/80 hover:text-white transform hover:scale-110"
              >
                {stepsData[getPrevIndex()].number}
              </button>

              {/* Next Step (Right side, +25deg rotation) */}
              <button
                onClick={() => setActiveIndex(getNextIndex())}
                className="transition-all duration-300 font-mono font-black text-2xl sm:text-4xl rotate-[25deg] text-white/80 hover:text-white transform hover:scale-110"
              >
                {stepsData[getNextIndex()].number}
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className="flex items-center justify-between text-[9px] font-mono text-gray-500 border-t border-white/5 pt-3 z-30">
          <span>04 BOSQICHLAR</span>
          <span>04 BOSQICH — 01 MAQSAD</span>
        </div>
      </section>
    </div>
  );
};
