export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--background)] mb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* ================= SECTION TITLE ================= */}
        <h2 className="text-3xl font-semibold mb-8 text-[var(--foreground)] relative inline-block">
          About Me
          <span className="block w-16 h-1 bg-[var(--accent)] rounded-full mt-2"></span>
        </h2>

        {/* ================= CONTENT ================= */}
        <div className="bg-[var(--card-bg)] p-8 md:p-10 rounded-2xl shadow-md space-y-4">
          <p className="text-[var(--secondary)] leading-relaxed">
            I recently graduated from the Department of Applied Informatics at the University of Macedonia. I enjoy building practical applications that solve real-world problems and am passionate about learning how to design reliable, data-driven software systems.
          </p>

          <p className="text-[var(--secondary)] leading-relaxed">
            During my studies, I worked on a variety of academic and personal projects that helped me understand software development, system design, and problem-solving in practice. I value clean, maintainable code and enjoy exploring new tools and technologies to continuously improve my skills.
          </p>

          <p className="text-[var(--secondary)] leading-relaxed">
            I am particularly interested in creating applications that have a real impact, whether through automating tasks, analyzing data, or enhancing user experiences. I am eager to contribute to projects where I can learn, collaborate with others, and grow as a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}