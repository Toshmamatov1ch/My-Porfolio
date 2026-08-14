import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";

export const About: React.FC = () => {
  const stats = [
    { label: "YILLIK TAJRIBA", value: "02+" },
    { label: "MUVAFFAQIYATLI LOYIHALAR", value: "15+" },
    { label: "MIJOZLAR MAMNUNIYATI", value: "100%" },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-24 px-6 md:px-12 flex flex-col justify-center border-t border-gray-200 dark:border-white/10 transition-colors duration-300"
    >
      {/* Background Grid Accent */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header Tag */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-[#ff4d00] font-mono text-xs md:text-sm tracking-widest uppercase">
            // 01. HAQIMDA
          </span>
          <div className="h-[1px] w-12 bg-[#ff4d00]/50" />
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Large Statement */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-tight"
            >
              TEZKOR VA INTERAKTIV <br />
              <span className="text-[#ff4d00]">WEB-YECHIMLAR</span> YARATAMAN
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl"
            >
              Men Frontend dasturchi sifatida zamonaviy React eko-tizimi va
              interaktiv UI/UX vositalaridan foydalanib, foydalanuvchilar uchun
              qulay va vizual jihatdan mukammal raqamli mahsulotlar yarataman.
              Kodning tozaligi, optimallashtirish va chiroyli animatsiyalar meni
              doimiy ilhomlantiradi.
            </motion.p>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900/40 border border-gray-200 dark:border-white/5 hover:border-[#ff4d00]/40 transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-black font-mono text-gray-900 dark:text-white group-hover:text-[#ff4d00] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-gray-200 dark:border-white/5">
          <div className="p-6 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-white/5 space-y-3">
            <Code2 className="w-8 h-8 text-[#ff4d00]" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Toza Kod
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Arxitektura va tushunarli, qayta ishlatiluvchi komponentlar
              yozishga alohida e'tibor qarataman.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-white/5 space-y-3">
            <Cpu className="w-8 h-8 text-[#ff4d00]" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Yuqori Tezlik
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Lighthouse va SEO ko'rsatkichlari yuqori bo'lgan, tez yuklanuvchi
              web-saytlar.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-white/5 space-y-3">
            <Rocket className="w-8 h-8 text-[#ff4d00]" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Interaktiv UI
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Framer Motion va zamonaviy CSS yordamida jonli va ravon
              animatsiyalar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
