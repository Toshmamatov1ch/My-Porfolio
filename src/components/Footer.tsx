import React, { useState } from "react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Obuna bo'lindi: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white border-t border-gray-200 dark:border-zinc-800 pt-16 pb-8 px-6 md:px-16 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        {/* 1. Yangiliklarga obuna bo'lish */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <span className="text-xs tracking-widest text-gray-500 dark:text-zinc-400 uppercase font-semibold">
              YANGILIKLARGA OBUNA
            </span>
            <h3 className="text-xl font-medium mt-3 mb-6 text-gray-800 dark:text-zinc-200 leading-snug">
              Yangi loyihalar va dizayn yangiliklaridan birinchilardan bo'ling.
            </h3>

            <form
              onSubmit={handleSubscribe}
              className="flex items-center w-full max-w-md"
            >
              <input
                type="email"
                placeholder="Email manzilingiz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-zinc-300 border border-gray-300 dark:border-zinc-800 px-4 py-3 text-sm rounded-l-md focus:outline-none focus:border-gray-500 dark:focus:border-zinc-600 flex-1 placeholder-gray-400 dark:placeholder-zinc-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold text-xs tracking-wider px-6 py-3.5 rounded-r-md transition-colors duration-200 uppercase cursor-pointer"
              >
                OBUNA
              </button>
            </form>

            <p className="text-xs text-gray-500 dark:text-zinc-500 mt-3">
              Obuna bo'lish orqali{" "}
              <a
                href="#privacy"
                className="text-gray-700 dark:text-zinc-400 underline hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Maxfiylik siyosati
              </a>
              ni qabul qilasiz.
            </p>
          </div>
        </div>

        {/* 2. Xizmatlar */}
        <div className="lg:col-span-3 lg:pl-8">
          <span className="text-xs tracking-widest text-gray-500 dark:text-zinc-400 uppercase font-semibold">
            XIZMATLAR
          </span>
          <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-zinc-300">
            {[
              "Veb-saytlar",
              "Veb-ilovalar",
              "CRM Tizimlari",
              "LMS Platformalar",
              "Telegram Botlar",
              "Xavfsizlik Auditi",
            ].map((service, index) => (
              <li key={index}>
                <a
                  href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Navigatsiya */}
        <div className="lg:col-span-2">
          <span className="text-xs tracking-widest text-gray-500 dark:text-zinc-400 uppercase font-semibold">
            NAVIGATSIYA
          </span>
          <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-zinc-300">
            {[
              { name: "Asosiy", href: "#home" },
              { name: "Xizmatlar", href: "#services" },
              { name: "Jarayon", href: "#process" },
              { name: "Ishlar", href: "#projects" },
              { name: "Fikrlar", href: "#testimonials" },
              { name: "Savollar", href: "#faq" },
              { name: "Aloqa", href: "#contact" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Aloqa va Ijtimoiy tarmoqlar */}
        <div className="lg:col-span-3 space-y-6">
          <div>
            <span className="text-xs tracking-widest text-gray-500 dark:text-zinc-400 uppercase font-semibold">
              ALOQA
            </span>

            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="text-xs text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  MANZIL
                </p>
                <p className="text-gray-800 dark:text-zinc-200">
                  Toshkent, O'zbekiston
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  EMAIL
                </p>
                <a
                  href="mailto:hello@marsforge.uz"
                  className="text-gray-800 dark:text-zinc-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  hello@marsforge.uz
                </a>
              </div>

              <div>
                <p className="text-xs text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  TELEFON
                </p>
                <a
                  href="tel:+998917851238"
                  className="text-gray-800 dark:text-zinc-200 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                >
                  +998 91 785 12 38
                </a>
              </div>
            </div>
          </div>

          {/* Ijtimoiy Tarmoqlar (SVG Ikonkalar) */}
          <div>
            <span className="text-xs tracking-widest text-gray-400 dark:text-zinc-500 uppercase font-semibold block mb-3">
              BIZNI KUZATING
            </span>
            <div className="flex gap-3">
              {/* Telegram */}
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-md border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-[#121212] flex items-center justify-center text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-zinc-600 transition-all duration-200"
                aria-label="Telegram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.098.155.23.171.326.016.096.036.313.02.485z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-md border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-[#121212] flex items-center justify-center text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-zinc-600 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-md border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-[#121212] flex items-center justify-center text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-zinc-600 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pastki qism */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 dark:border-zinc-900 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 dark:text-zinc-500 gap-4">
        <p>© 2026 | MARS FORGE</p>
        <p className="tracking-widest uppercase">
          YARATUVCHI{" "}
          <span className="text-gray-800 dark:text-zinc-200 font-bold ml-1">
            HAQIJONOV-DEV
          </span>
        </p>
      </div>
    </footer>
  );
};
