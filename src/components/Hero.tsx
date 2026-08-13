import React from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-between pt-28 pb-8 px-6 md:px-12"
    >
      {/* Background Cloud Animations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [-100, 150, -100],
            y: [-30, 60, -30],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -left-10 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/35 via-amber-600/25 to-transparent rounded-full blur-[70px]"
        />

        <motion.div
          animate={{
            x: [100, -150, 100],
            y: [40, -50, 40],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-10 w-[600px] h-[600px] bg-gradient-to-l from-orange-600/30 via-rose-500/20 to-transparent rounded-full blur-[80px]"
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Hero Title */}
      <div className="relative z-10 my-auto text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-white leading-none drop-shadow-2xl"
        >
          RAQAMLI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">
            KELAJAKNI
          </span>{" "}
          <br />
          <span className="text-[#ff4d00]">YARATAMIZ</span>
        </motion.h1>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <div className="space-y-2">
          <div className="text-xs font-mono text-[#ff4d00] tracking-widest uppercase">
            // BIZNING MISSIYAMIZ
          </div>
          <p className="text-sm text-gray-300 max-w-sm font-light leading-relaxed">
            G'oyalarni React va zamonaviy web texnologiyalari yordamida tezgina
            interaktiv hamda chiroyli yechimlarga aylantiramiz.
          </p>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center space-y-2">
          <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">
            PASTGA AYLANTRING
          </span>
          <ArrowDown className="w-4 h-4 text-[#ff4d00] animate-bounce" />
        </div>

        <div className="flex justify-start md:justify-end">
          <a
            href="#contact"
            className="group inline-flex items-center space-x-3 bg-white text-black px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-[#ff4d00] hover:text-white transition-all duration-300 shadow-lg"
          >
            <span>BIZ BILAN ISHLANG</span>
            <div className="w-7 h-7 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
