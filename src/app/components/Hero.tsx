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

      {/* ================= TEXT COLUMN ================= */}
      <div className="flex-1 flex flex-col items-start text-left gap-4">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-[var(--primary)]">{typedName}</span>
          <span className="border-r-2 border-[var(--primary)] animate-pulse ml-1"></span>
        </h1>

        {/* Subline */}
        <p className="text-sm tracking-widest text-[var(--accent)] font-semibold mt-2 uppercase">
          Software Engineering · Data · AI
        </p>

        {/* Description */}
        <p className="mt-4 text-[var(--secondary)] text-base md:text-lg leading-relaxed max-w-xl">
          Applied Informatics graduate with an interest in full-stack software development and data-driven applications, with academic experience in Python and Java.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row mt-6 gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg shadow hover:scale-105 hover:shadow-xl transition-transform"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* ================= IMAGE COLUMN ================= */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl">
          <div className="absolute inset-0 rounded-full ring-4 ring-[var(--accent)]/30"></div>
          <img
            src="/profile.jpg"
            alt="Florian Cenko"
            className="w-full h-full object-cover relative z-10 rounded-full"
          />
        </div>
      </div>

    </section>
  );
}