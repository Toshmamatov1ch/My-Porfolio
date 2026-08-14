import React from "react";
import { motion } from "framer-motion";

// 1. Yangi kutubxonani import qilamiz
import { Typewriter } from "react-simple-typewriter";

export const Hero: React.FC = () => {
  // Suzuvchi so'zlar massivi (o'zgarishsiz qoladi)
  // const slidingWords = [
  //   "Diyorbek Toshmamatov",
  //   "Frontend Developer",
  //   "Grafik dizayn",
  //   "React",
  //   "TypeScript",
  //   "Tailwind CSS",
  //   "Awwwards",
  //   "UI/UX Design",
  //   "Standalone React",
  // ];

  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white flex flex-col justify-between px-6 md:px-16 py-8 overflow-hidden transition-colors duration-300">
      {/* Background Image & Overlay (o'zgarishsiz) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
          alt="Foggy Mountains Background"
          className="w-full h-full object-cover opacity-85 dark:opacity-75 scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/30 dark:from-[#0a0a0a]/90 dark:via-[#0a0a0a]/40 to-transparent" />
      </div>

      {/* Top Navbar Header (o'zgarishsiz) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between"></div>

      {/* Main Hero Center Content (Yangilangan qism) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] text-gray-900 dark:text-white drop-shadow-md">
            DIYORBEK TOSHMAMATOV <br />
            {/* 3. Dinamik matnli qism (react-simple-typewriter yordamida) */}
            {/* 3. Dinamik matnli qism (sekinlashtirilgan tezlik bilan) */}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-gray-700 to-[#ff4d00] dark:from-white dark:via-gray-300 dark:to-[#ff4d00] h-[1.1em] block">
              <Typewriter
                words={[
                  "FRONTEND DEVELOPER",
                  "GRAFIK DIZAYNER",
                  "STANDALONE REACT",
                ]}
                loop={0} // 0 = cheksiz loop
                cursor
                cursorStyle="|"
                typeSpeed={120} // Avvalgi 100 dan sekinroq (harf yozish tezligi)
                deleteSpeed={70} // Avvalgi 50 dan sekinroq (harf o'chirish tezligi)
                delaySpeed={2000} // 2 sekund kutish (o'zgarishsiz, to'liq yozilgandan keyin)
              />
            </span>
          </h1>
        </motion.div>

        {/* Suzib o'tuvchi so'zlar (Marquee) (o'zgarishsiz) */}
      </div>

      {/* Bottom Footer Info & CTA (o'zgarishsiz) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        {/* ... ichki qism o'zgarishsiz ... */}
      </div>
    </section>
  );
};
