export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 gap-16 pb-24 max-w-7xl mx-auto">
      
      {/* ================= TEXT SECTION ================= */}
      <div className="flex-1 text-center md:text-left">
        {/* Subtitle */}
        <p className="text-sm tracking-widest text-[var(--accent)] font-semibold uppercase">
          Backend · Data · Software Engineering
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
          Hi, I'm{" "}
          <span className="text-[var(--primary)]">Florian Cenko</span>
        </h1>

        {/* Description */}
        <p className="max-w-xl mt-6 text-[var(--secondary)] text-lg md:text-base leading-relaxed">
          Graduate of Applied Informatics with a strong focus on back-end systems,
          data-driven applications, and scalable software solutions using Python
          and Java.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row mt-10 gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg shadow-lg
                       hover:scale-105 hover:shadow-xl transition-transform"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-[var(--primary)] text-[var(--primary)]
                       font-semibold rounded-lg hover:bg-[var(--primary)]
                       hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* ================= IMAGE SECTION ================= */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl md:mr-32">
          {/* Accent Ring */}
          <div className="absolute inset-0 rounded-full ring-4 ring-[var(--accent)]/30"></div>

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