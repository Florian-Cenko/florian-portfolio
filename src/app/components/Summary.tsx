export default function Summary() {
  return (
    <section className="py-24 bg-[var(--background)] mb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* ================= SECTION TITLE ================= */}
        <h2 className="text-3xl font-semibold mb-8 text-[var(--foreground)] relative inline-block">
          Professional Summary
          <span className="block w-16 h-1 bg-[var(--accent)] rounded-full mt-2"></span>
        </h2>

        {/* ================= CONTENT ================= */}
        <div className="bg-[var(--card-bg)] p-8 rounded-2xl shadow-md space-y-4">
          <p className="text-[var(--secondary)] leading-relaxed">
            Recent Applied Informatics graduate with a strong interest in back-end development and data-oriented applications. Familiar with Python, Java, and building small-scale projects.  
          </p>

          <p className="text-[var(--secondary)] leading-relaxed">
            Motivated to learn, adapt, and contribute to high-quality software projects. Eager to apply problem-solving skills, collaborate with teams, and grow as a professional software engineer.  
          </p>

          <p className="text-[var(--secondary)] leading-relaxed">
            Interested in building reliable, maintainable, and data-driven applications that can have a real-world impact. Continuously improving through projects, coursework, and hands-on experimentation.
          </p>
        </div>
      </div>
    </section>
  );
}