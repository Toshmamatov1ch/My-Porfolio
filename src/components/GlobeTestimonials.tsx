import React, { useState, useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  review: string;
  rating: number;
  lat: number;
  lng: number;
  city: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sherzod Yusupov",
    company: "Orion Sales",
    review: "CRM tizimi savdo jarayonimizni butunlay o'zgartirdi.",
    rating: 5,
    lat: 41.2995,
    lng: 69.2401,
    city: "Toshkent",
  },
  {
    id: "2",
    name: "Aziz Rahimov",
    company: "Cobalt Financial",
    review: "Real-time to'lov platformamiz mukammal ishlamoqda.",
    rating: 5,
    lat: 55.7558,
    lng: 37.6173,
    city: "Moskva",
  },
  {
    id: "3",
    name: "Madina Karimova",
    company: "Lumi Studio",
    review: "Awwwards darajasidagi dizayn va yuqori sifat.",
    rating: 5,
    lat: 25.2048,
    lng: 55.2708,
    city: "Dubai",
  },
];

export const GlobeTestimonials: React.FC = () => {
  const globeRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];

  useEffect(() => {
    if (globeRef.current) {
      // Shar biroz kichikroq ko'rinishi uchun altitude ni 2.6 ga oshiramiz (ya'ni uzoqroqdan ko'rsatadi)
      globeRef.current.pointOfView(
        { lat: current.lat, lng: current.lng, altitude: 2.6 },
        1200,
      );

      const controls = globeRef.current.controls();
      if (controls) {
        controls.enableZoom = false; // Yaqinlashish o'chirilgan
        controls.enableRotate = true;
        controls.autoRotate = true; // Doimiy sekin aylanish yoqildi
        controls.autoRotateSpeed = 0.8; // Aylanish tezligi
      }
    }
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-6 md:px-16 flex flex-col justify-between overflow-hidden border-t border-white/10"
    >
      {/* Header Title */}
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-4 h-[2px] bg-[#ff4d00]" />
          <span className="text-[10px] font-mono tracking-widest text-[#ff4d00] uppercase">
            GEOGRAFIK MIJOZLAR
          </span>
        </div>
        <h2 className="text-4xl sm:text-7xl font-extrabold uppercase tracking-tight text-white">
          DUNYO BO'YLAB FIKRLAR
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pt-6">
        {/* Left Side: 3D Globe (Kichraytirilgan va yozuvdan pastroqda) */}
        <div className="lg:col-span-7 h-[380px] sm:h-[480px] flex items-center justify-center relative">
          <div className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center">
            <Globe
              ref={globeRef}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              backgroundColor="rgba(0,0,0,0)"
              atmosphereColor="#ff4d00"
              atmosphereAltitude={0.15}
              htmlElementsData={testimonials}
              htmlElement={(d: any) => {
                const isSelected = d.id === current.id;
                const el = document.createElement("div");

                el.innerHTML = isSelected
                  ? `
                    <div style="
                      background: rgba(15, 15, 15, 0.95);
                      border: 1px solid #ff4d00;
                      padding: 6px 10px;
                      border-radius: 6px;
                      color: white;
                      font-family: monospace;
                      font-size: 10px;
                      box-shadow: 0 0 12px rgba(255, 77, 0, 0.4);
                      white-space: nowrap;
                      pointer-events: none;
                      transform: translate(-50%, -120%);
                    ">
                      <div style="color: #ff4d00; font-weight: bold; margin-bottom: 2px;">📍 ${d.city}</div>
                      <div>${d.name}</div>
                    </div>
                  `
                  : `
                    <div style="
                      background: rgba(255, 255, 255, 0.3);
                      width: 8px;
                      height: 8px;
                      border-radius: 50%;
                      cursor: pointer;
                      border: 1.5px solid white;
                      transition: all 0.3s;
                    "></div>
                  `;

                el.onclick = () => {
                  const idx = testimonials.findIndex((t) => t.id === d.id);
                  if (idx !== -1) setCurrentIndex(idx);
                };
                return el;
              }}
            />
          </div>
        </div>

        {/* Right Side: Active Testimonial Card */}
        <div className="lg:col-span-5">
          <div className="bg-black/80 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 shadow-2xl relative">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-[#ff4d00]/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] font-mono text-xs">
                  📍 {current.city}
                </div>

                <div className="flex space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#ff4d00] text-[#ff4d00]"
                    />
                  ))}
                </div>

                <p className="text-base sm:text-lg font-light text-gray-200 italic leading-relaxed">
                  "{current.review}"
                </p>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-bold text-white text-base tracking-wide">
                    {current.name}
                  </h4>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    {current.company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-4 border-t border-white/10">
              <span className="font-mono text-xs text-gray-500">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
              <div className="flex space-x-3">
                <button
                  onClick={prevTestimonial}
                  className="w-9 h-9 rounded-full border border-white/20 bg-black/50 flex items-center justify-center text-white hover:border-[#ff4d00] hover:text-[#ff4d00] transition-all cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-9 h-9 rounded-full border border-white/20 bg-black/50 flex items-center justify-center text-white hover:border-[#ff4d00] hover:text-[#ff4d00] transition-all cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 max-w-7xl w-full mx-auto text-center text-[10px] font-mono text-gray-500 tracking-widest uppercase mt-8">
        INTERACTIVE 3D GLOBE CLIENT FEEDBACK
      </div>
    </section>
  );
};
