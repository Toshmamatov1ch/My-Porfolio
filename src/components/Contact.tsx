import React, { useState } from "react";
import { Send, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Forma yuborish mantiqiy kodi (masalan, EmailJS yoki API call)
    alert("Xabaringiz qabul qilindi! Tez orada bog'lanaman.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-24 px-6 md:px-12 flex flex-col justify-center border-t border-gray-200 dark:border-white/10 transition-colors duration-300"
    >
      {/* Background Grid Pattern */}
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
            // 06. ALOQA
          </span>
          <div className="h-px w-12 bg-[#ff4d00]/50" />
        </div>

        {/* Title */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight">
            BIRGELIKDA <span className="text-[#ff4d00]">ISHLAYMIZMI?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-light mt-3 max-w-xl">
            Loyiha g'oyangiz bormi yoki savollaringiz bormi? Menga xabar
            qoldiring, tez orada javob beraman.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-white/5 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">
                    EMAIL
                  </span>
                  <a
                    href="mailto:diyorbek.toshmamatov@gmail.com"
                    className="text-base font-semibold hover:text-[#ff4d00] transition-colors"
                  >
                    diyorbek.toshmamatov@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">
                    JOYLASHUV
                  </span>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    Toshkent, O'zbekiston
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">
                    TELEGRAM
                  </span>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold hover:text-[#ff4d00] transition-colors flex items-center gap-1"
                  >
                    <span>@diyorbek_dev</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-white/5 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                    ISMINGIZ
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Ismingizni kiriting"
                    className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-[#ff4d00] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                    EMAIL MANZILINGIZ
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="email@example.com"
                    className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-[#ff4d00] transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                  XABARINGIZ
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Loyiha haqida qisqacha ma'lumot bering..."
                  className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-[#ff4d00] transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff4d00] hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>XABARNI YUBORISH</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
