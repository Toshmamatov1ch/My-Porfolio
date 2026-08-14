import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  const slidingWords = [
    "Diyorbek Toshmamatov",
    "Frontend Developer",
    "Grafik dizayn",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Awwwards",
    "UI/UX Design",
    "Standalone React",
  ];

  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white flex flex-col justify-between px-6 md:px-16 py-8 overflow-hidden transition-colors duration-300">
      {/* Background Image with High Opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
          alt="Foggy Mountains Background"
          className="w-full h-full object-cover opacity-85 dark:opacity-75 scale-105"
        />
        {/* Soft Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/30 dark:from-[#0a0a0a]/90 dark:via-[#0a0a0a]/40 to-transparent" />
      </div>

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] text-gray-900 dark:text-white drop-shadow-md">
            DIYORBEK TOSHMAMATOV <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-gray-700 to-[#ff4d00] dark:from-white dark:via-gray-300 dark:to-[#ff4d00]">
              FRONTEND DEVELOPER
            </span>
          </h1>
        </motion.div>

        {/* Chapdan o'ngga suzib o'tuvchi so'zlar (Marquee) */}
        <div className="w-full overflow-hidden whitespace-nowrap py-2 border-y border-gray-300/30 dark:border-white/10 backdrop-blur-sm">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="inline-flex space-x-8 items-center"
          >
            {[...slidingWords, ...slidingWords, ...slidingWords].map(
              (word, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-gray-700 dark:text-gray-300 font-semibold">
                    {word}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#ff4d00]" />
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Info & CTA */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        {/* O'zim haqimda / Missiya */}
        <div className="md:col-span-8 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-0.5 bg-[#ff4d00]" />
            <span className="text-[10px] font-mono tracking-widest text-gray-700 dark:text-gray-300 uppercase font-semibold">
              FRONTEND ARCHITECTURE • TASHKENT
            </span>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-gray-900 dark:text-white mb-1">
              O'ZIM HAQIMDA
            </h3>
            <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-sans max-w-xl leading-relaxed font-medium">
              Standalone React, TypeScript va Tailwind yordamida zamonaviy, tez
              ishlaydigan va Awwwards darajasidagi veb-ilovalar yarataman. Kodni
              o'zim qo'lda yozishni va mukammal natijaga erishishni yoqtiraman.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="md:col-span-4 flex flex-col md:items-end justify-end space-y-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-4 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#ff4d00] dark:hover:bg-[#ff4d00] dark:hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span>BIZ BILAN ISHLANG</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
