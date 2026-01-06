import { FaPython, FaJava, FaDatabase, FaReact, FaTools } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaPython className="w-6 h-6 text-[var(--accent)]" />,
      items: ["Python", "Java", "C"],
    },
    {
      title: "Back-End",
      icon: <FaDatabase className="w-6 h-6 text-[var(--accent)]" />,
      items: ["Flask", "Spring Boot", "REST APIs"],
    },
    {
      title: "Front-End",
      icon: <FaReact className="w-6 h-6 text-[var(--accent)]" />,
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Data & Machine Learning",
      icon: <SiTensorflow className="w-6 h-6 text-[var(--accent)]" />,
      items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras"],
    },
    {
      title: "Tools & Practices",
      icon: <FaTools className="w-6 h-6 text-[var(--accent)]" />,
      items: ["Git", "GitHub", "GitHub API", "Code Analysis Tools"],
    },
  ];

  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-[var(--foreground)] relative inline-block">
          Technical Skills
          <span className="block w-16 h-1 bg-[var(--accent)] rounded-full mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillCategories.map((skill) => (
            <div
              key={skill.title}
              className="bg-[var(--card-bg)] p-6 rounded-2xl border border-transparent shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="font-semibold text-lg text-[var(--foreground)]">{skill.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}