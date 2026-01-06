export default function Strengths() {
  const strengths = [
    "Back-end development using Python and Java, with focus on clean and maintainable code",
    "Designing and integrating RESTful APIs for practical applications",
    "Strong foundation in Object-Oriented Programming (OOP) principles",
    "Basic data analysis and Machine Learning skills for data-driven projects",
    "Ability to translate academic concepts into functional software solutions",
    "Motivated to continuously learn and improve through projects and hands-on experimentation",
  ];

  return (
    <section className="py-24 bg-[var(--background)] mb-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-[var(--foreground)] relative inline-block">
          Core Strengths
          <span className="block w-16 h-1 bg-[var(--accent)] rounded-full mt-2"></span>
        </h2>

        <div className="bg-[var(--card-bg)] p-6 md:p-10 rounded-2xl shadow-md">
          <ul className="space-y-3 text-[var(--secondary)] list-disc list-inside">
            {strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}