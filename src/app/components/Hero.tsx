"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const fullName = "Florian Cenko";
  const [typedName, setTypedName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setTypedName((prev) => prev + fullName[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-20 gap-10 pb-24 pt-16 md:pt-0 max-w-7xl mx-auto">
      
      {/* ================= LEFT COLUMN (TEXT + MOBILE IMAGE) ================= */}
      <div className="flex-1 flex flex-col items-start text-left gap-4 w-full">
        
        {/* ΑΥΤΟ ΕΙΝΑΙ ΤΟ CONTAINER ΠΟΥ ΖΗΤΗΣΕΣ ΓΙΑ ΤΟ ΚΙΝΗΤΟ */}
        <div className="flex items-center justify-between w-full p-4 md:p-0 md:block bg-black/5 rounded-2xl md:bg-transparent">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="text-[var(--primary)]">{typedName}</span>
            <span className="border-r-2 border-[var(--primary)] animate-pulse ml-1"></span>
          </h1>

          {/* Image only visible on Mobile */}
          <div className="md:hidden w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-lg border-2 border-[var(--accent)]/30 flex-shrink-0 ml-4">
            <img
              src="/profile.jpg"
              alt="Florian Cenko"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Subline */}
        <div className="px-4 md:px-0"> {/* Padding και εδώ για να στοιχίζεται με το παραπάνω container στο κινητό */}
            <p className="text-xs sm:text-sm tracking-widest text-[var(--accent)] font-semibold mt-2 uppercase">
            Software Engineering · Data · AI
            </p>

            {/* Description */}
            <p className="mt-4 text-[var(--secondary)] text-base md:text-lg leading-relaxed max-w-xl">
            Applied Informatics graduate with an interest in full-stack software development and data-driven applications, with academic experience in Python and Java.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row mt-6 gap-4 w-full sm:w-auto">
            <a
                href="#projects"
                className="px-8 py-3 bg-[var(--primary)] text-white text-center font-semibold rounded-lg shadow hover:scale-105 hover:shadow-xl transition-transform"
            >
                View Projects
            </a>

            <a
                href="#contact"
                className="px-8 py-3 border border-[var(--primary)] text-[var(--primary)] text-center font-semibold rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors"
            >
                Contact Me
            </a>
            </div>
        </div>
      </div>

      {/* ================= RIGHT COLUMN (DESKTOP IMAGE) ================= */}
      <div className="hidden md:flex flex-1 justify-end">
        <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-xl border-4 border-[var(--accent)]/30">
          <img
            src="/profile.jpg"
            alt="Florian Cenko"
            className="w-full h-full object-cover relative z-10"
          />
        </div>
      </div>

    </section>
  );
}