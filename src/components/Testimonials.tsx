import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

interface Testimonial {
  id: string;
  number: string;
  company: string;
  name: string;
  role: string;
  comment: string;
  initials: string;
}

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const testimonials: Testimonial[] = [
    {
      id: "1",
      number: "02",
      company: "ORION SALES",
      name: "SHERZOD YUSUPOV",
      role: "BOSH DIREKTOR",
      comment:
        "CRM tizimi savdo jarayonimizni butunlay o'zgartirdi. Leadlardan to sotuvgacha bo'lgan har bir qadam endi shaffof va o'lchanadigan.",
      initials: "SY",
    },
    {
      id: "2",
      number: "03",
      company: "LUMI CREATIVE",
      name: "MADINA TURSUNOVA",
      role: "KREATIV DIREKTOR",
      comment:
        "Awwwards darajasidagi portfolio — bu shunchaki sayt emas, bizning ovozimiz, brendimizning raqamli yuzi. Mijozlar birinchi sekunddanoq taassurot oladi.",
      initials: "MT",
    },
    {
      id: "3",
      number: "04",
      company: "COBALT FINANCIAL",
      name: "AZIZ RAHIMOV",
      role: "CTO",
      comment:
        "Real-time to'lov platformamiz millionlab tranzaksiyalarni muammosiz qayta ishlamoqda. Texnik mukammallik va biznes mantiq mukammal birlashtirilgan.",
      initials: "AR",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v < 0.33) setActiveIndex(0);
      else if (v < 0.66) setActiveIndex(1);
      else setActiveIndex(2);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // 3D Canvas Engine (Katta Sfera va Ko'proq Chiziqlar)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angleY = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const targetAngle = (scrollYProgress.get() || 0) * Math.PI * 2;
      angleY += (targetAngle - angleY) * 0.1;

      const centerX = width / 2;
      const centerY = height / 2;

      // Sfera radiusi kattalashtirildi (0.38 -> 0.46)
      const radius = Math.min(width, height) * 0.46;

      ctx.clearRect(0, 0, width, height);

      // Sphere Base & Wireframe
      ctx.save();
      ctx.translate(centerX, centerY);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;

      // 1. Gorizontal Parallellar (Sonini 7 tadan 13 tagacha oshirdik)
      const latitudeCount = 6; // Markazdan tepaga va pastga 6 tadan
      for (let i = -latitudeCount; i <= latitudeCount; i++) {
        const yOffset = (i * radius) / (latitudeCount + 0.5);
        const r = Math.sqrt(Math.max(0, radius * radius - yOffset ** 2));
        ctx.beginPath();
        ctx.ellipse(
          0,
          yOffset,
          Math.abs(r),
          Math.abs(r * 0.35),
          0,
          0,
          Math.PI * 2,
        );
        ctx.stroke();
      }

      // 2. Vertikal Meridianlar (Sonini 6 tadan 12 tagacha oshirdik)
      const meridianCount = 12;
      for (let i = 0; i < meridianCount; i++) {
        const rot = angleY + (i * Math.PI) / meridianCount;
        const radiusX = Math.abs(radius * Math.cos(rot));
        if (radiusX > 0) {
          ctx.beginPath();
          ctx.ellipse(0, 0, radiusX, radius, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Tashqi Aylana Ring
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      ctx.stroke();

      // Qo'shimcha Aktsent Chiziqlar (To'q sariq halqalar)
      // Main Accent Ring
      ctx.beginPath();
      ctx.ellipse(
        0,
        0,
        radius * 1.06,
        Math.abs(radius * 0.32),
        angleY * 0.2,
        0,
        Math.PI * 2,
      );
      ctx.strokeStyle = "rgba(255, 77, 0, 0.8)";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Secondary Accent Ring (Yuqori)
      ctx.beginPath();
      ctx.ellipse(
        0,
        -radius * 0.25,
        radius * 0.95,
        Math.abs(radius * 0.25),
        -angleY * 0.3 + 0.4,
        0,
        Math.PI * 2,
      );
      ctx.strokeStyle = "rgba(255, 77, 0, 0.4)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Third Accent Ring (Pastki)
      ctx.beginPath();
      ctx.ellipse(
        0,
        radius * 0.3,
        radius * 0.88,
        Math.abs(radius * 0.22),
        angleY * 0.25 - 0.5,
        0,
        Math.PI * 2,
      );
      ctx.strokeStyle = "rgba(255, 120, 0, 0.35)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();

      // Floating 3D Cards Render
      testimonials.forEach((item, idx) => {
        const itemAngle = angleY + idx * ((Math.PI * 2) / testimonials.length);

        const x3d = Math.sin(itemAngle) * radius * 1.02;
        const z3d = Math.cos(itemAngle) * radius * 1.02;
        const y3d = Math.sin(idx * 2) * radius * 0.15;

        const screenX = centerX + x3d;
        const screenY = centerY + y3d + z3d * 0.15;

        const scale = (z3d + radius * 2) / (radius * 2);
        const opacity = Math.max(
          0.12,
          Math.min(1, (z3d + radius * 0.5) / radius),
        );
        const isActive = idx === activeIndex;

        ctx.save();
        ctx.translate(screenX, screenY);
        ctx.scale(Math.max(0.65, scale * 0.88), Math.max(0.65, scale * 0.88));
        ctx.globalAlpha = isActive ? 1 : opacity * 0.35;

        const cardW = 190;
        const cardH = 90;

        // Background & Border
        ctx.fillStyle = "rgba(8, 8, 8, 0.92)";
        ctx.strokeStyle = isActive
          ? "rgba(255, 77, 0, 0.85)"
          : "rgba(255, 255, 255, 0.12)";
        ctx.lineWidth = isActive ? 1.5 : 1;

        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(-cardW / 2, -cardH / 2, cardW, cardH, 10);
        } else {
          ctx.rect(-cardW / 2, -cardH / 2, cardW, cardH);
        }
        ctx.fill();
        ctx.stroke();

        // Avatar
        ctx.beginPath();
        ctx.arc(-cardW / 2 + 22, -cardH / 2 + 22, 12, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? "#ff4d00" : "#222222";
        ctx.fill();

        ctx.fillStyle = isActive ? "#000000" : "#ffffff";
        ctx.font = "bold 9px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(item.initials, -cardW / 2 + 22, -cardH / 2 + 23);

        // Name & Company
        ctx.textAlign = "left";
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 9.5px sans-serif";
        ctx.fillText(item.name, -cardW / 2 + 42, -cardH / 2 + 18);

        ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        ctx.font = "8px monospace";
        ctx.fillText(item.company, -cardW / 2 + 42, -cardH / 2 + 30);

        // Stars
        ctx.fillStyle = "#ff4d00";
        ctx.font = "8px sans-serif";
        ctx.fillText("★★★★★", -cardW / 2 + 22, -cardH / 2 + 46);

        // Comment
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.font = "8px sans-serif";
        const shortComment =
          item.comment.length > 38
            ? item.comment.slice(0, 36) + "..."
            : item.comment;
        ctx.fillText(`"${shortComment}"`, -cardW / 2 + 22, -cardH / 2 + 62);

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeIndex, scrollYProgress]);

  const activeItem = testimonials[activeIndex];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-black">
      <section
        id="testimonials"
        className="sticky top-0 w-full h-screen bg-black text-white px-6 md:px-16 flex flex-col justify-between py-8 overflow-hidden border-t border-white/10"
      >
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#ff4d00]/12 rounded-full blur-[200px] pointer-events-none" />

        {/* Top Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center z-10"
        >
          <div className="flex items-center space-x-2">
            <div className="w-4 h-[2px] bg-[#ff4d00]" />
            <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
              MIJOZLAR FIKRI
            </span>
          </div>

          <div className="text-xs font-mono text-gray-500">
            0{activeIndex + 2} / 06
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 my-auto">
          {/* Matn qismi */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white"
            >
              MIJOZLAR{" "}
              <span className="text-gray-600 font-extralight">FIKRI</span>
            </motion.h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6 max-w-lg"
              >
                <div className="text-xs font-mono text-[#ff4d00] tracking-widest uppercase flex items-center space-x-2">
                  <span>{activeItem.number}</span>
                  <span>•</span>
                  <span>{activeItem.company}</span>
                </div>

                <p className="text-base md:text-lg font-light leading-relaxed text-gray-200">
                  "{activeItem.comment}"
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center space-x-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-white font-mono">
                    {activeItem.name}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500">
                    — {activeItem.role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* O'ng tomondagi Katta 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative flex items-center justify-center min-h-[450px] sm:min-h-[600px]"
          >
            <canvas
              ref={canvasRef}
              className="w-full max-w-[650px] aspect-square object-contain"
            />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between text-[10px] font-mono text-gray-600 border-t border-white/5 pt-4 z-10"
        >
          <span>SCROLL TO ROTATE SPHERE</span>
          <span className="text-[#ff4d00]">0{activeIndex + 2}</span>
        </motion.div>
      </section>
    </div>
  );
};
