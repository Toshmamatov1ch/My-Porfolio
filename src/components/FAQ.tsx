import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData: FaqItem[] = [
    {
      id: "1",
      number: "01",
      question: "Loyiha narxi qancha turadi?",
      answer:
        "Narx loyiha murakkabligi, funksional doirasi va muddati asosida shakllanadi. Korporativ sayt uchun $2 500 dan, CRM yoki LMS platforma uchun $8 000 dan boshlanadi. Birinchi qo'ng'iroqdan keyin sizga aniq taklif yuboramiz.",
    },
    {
      id: "2",
      number: "02",
      question: "Loyiha qancha vaqtga tayyor bo'ladi?",
      answer:
        "Landing page — 2-3 hafta, korporativ sayt — 4-6 hafta, CRM/LMS platforma — 8-12 hafta. Har bir sprint oxirida demo ko'rsatamiz, shuning uchun siz jarayonni real vaqt rejimida kuzatasiz.",
    },
    {
      id: "3",
      number: "03",
      question: "Qanday texnologiyalardan foydalanasiz?",
      answer:
        "Biz zamonaviy, tezkor va xavfsiz stack bilan ishlaymiz: React, TypeScript, Next.js, Node.js, TailWind CSS, Spline 3D hamda qulay boshqaruv uchun headless CMS tizimlari.",
    },
    {
      id: "4",
      number: "04",
      question: "Kafolat va texnik qo'llab-quvvatlash bormi?",
      answer:
        "Ha, loyiha topshirilgandan so'ng 3 oy davomida bepul texnik qo'llab-quvvatlash va kafolat beramiz. Xatoliklar va uzilishlar zudlik bilan bartaraf etiladi.",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const total = faqData.length;
      const step = 1 / total;
      const index = Math.min(Math.floor(v / step), total - 1);
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, faqData.length]);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] bg-black">
      {/* Sticky Fullscreen Section */}
      <section className="sticky top-0 w-full h-screen bg-black text-white px-8 md:px-20 flex flex-col justify-between py-10 overflow-hidden border-t border-white/10">
        {/* Subtle Background Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff4d00]/5 rounded-full blur-[160px] pointer-events-none" />

        {/* Top Header */}
        <div className="flex justify-between items-center z-10">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-[2px] bg-[#ff4d00]" />
            <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
              FAQ
            </span>
          </div>

          <div className="text-xs font-mono text-gray-500">01 / 07</div>
        </div>

        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 my-auto h-[60vh]">
          {/* Left Column: Questions List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
            {faqData.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className="cursor-pointer transition-all duration-500 ease-out select-none"
                >
                  <span
                    className={`block text-[10px] font-mono mb-1 transition-colors duration-300 ${isActive ? "text-[#ff4d00]" : "text-gray-600"}`}
                  >
                    {item.number}
                  </span>
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight transition-all duration-500 ${
                      isActive
                        ? "text-white opacity-100 scale-100 translate-x-0"
                        : "text-gray-600 opacity-20 hover:opacity-40 -translate-x-2"
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Middle Column: Vertical Line & Indicator */}
          <div className="hidden lg:flex lg:col-span-2 h-full relative items-center justify-center">
            {/* Center Vertical Line */}
            <div className="w-[1px] h-full bg-white/10 relative">
              {/* Moving Indicator Circle */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-[#ff4d00] bg-black flex items-center justify-center"
                animate={{
                  top: `${(activeIndex / (faqData.length - 1)) * 80 + 10}%`,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <span className="text-[10px] font-mono text-[#ff4d00]">
                  {faqData[activeIndex].number}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Answers (Faded + Active) */}
          <div className="lg:col-span-5 flex flex-col justify-center relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-4"
              >
                <span className="text-[10px] font-mono text-[#ff4d00] tracking-widest block">
                  {faqData[activeIndex].number}
                </span>
                <p className="text-base sm:text-lg md:text-xl font-light text-gray-300 leading-relaxed max-w-md">
                  {faqData[activeIndex].answer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between text-[10px] font-mono text-gray-600 border-t border-white/5 pt-4 z-10">
          <span>SCROLL TO EXPLORE FAQ</span>
          <span className="text-[#ff4d00]">01</span>
        </div>
      </section>
    </div>
  );
};
