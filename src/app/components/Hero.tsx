export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 gap-14 pb-24 max-w-7xl mx-auto">
      
      {/* ================= TEXT ================= */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-sm tracking-widest text-[var(--accent)] font-semibold uppercase">
          Software Engineering · Data · AI
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
          Hi, I'm <span className="text-[var(--primary)]">Florian Cenko</span>
        </h1>

        <p className="max-w-xl mx-auto md:mx-0 mt-6 text-[var(--secondary)] text-base md:text-lg leading-relaxed">
          Applied Informatics graduate with an interest in full-stack software development and data-driven applications, with academic experience in Python and Java.
        </p>

        <div className="flex flex-col sm:flex-row mt-10 gap-4 justify-center md:justify-start">
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

      {/* ================= IMAGE ================= */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl">
          <div className="absolute inset-0 rounded-full ring-4 ring-[var(--accent)]/30"></div>
          <img src="/profile.jpg" alt="Florian Cenko" className="w-full h-full object-cover relative z-10" />
        </div>
      </div>
    </section>
  );
}