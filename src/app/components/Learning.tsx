"use client";

import { SiFlask, SiPython, SiSpringboot, SiReact } from "react-icons/si";

export default function Learning() {
  const courses = [
    {
      name: "Flask Web Development",
      platform: "Udemy",
      icon: <SiFlask className="w-6 h-6 text-[var(--accent)]" />,
    },
    {
      name: "Python for Data Science & Machine Learning",
      platform: "Udemy",
      icon: <SiPython className="w-6 h-6 text-[var(--accent)]" />,
    },
    {
      name: "Spring Boot",
      platform: "Self-study & Projects",
      icon: <SiSpringboot className="w-6 h-6 text-[var(--accent)]" />,
    },
    {
      name: "React",
      platform: "Self-study & Projects",
      icon: <SiReact className="w-6 h-6 text-[var(--accent)]" />,
    },
  ];

  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-[var(--foreground)] relative inline-block">
          Currently Learning
          <span className="block w-16 h-1 bg-[var(--accent)] rounded-full mt-2"></span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.name}
              className="flex items-center gap-4 p-6 bg-[var(--card-bg)] rounded-2xl border border-transparent shadow-md hover:shadow-xl hover:border-[var(--accent)] transition-all"
            >
              {course.icon}
              <div>
                <h3 className="font-semibold text-[var(--foreground)] text-lg">
                  {course.name}
                </h3>
                <p className="text-[var(--secondary)] text-sm">
                  {course.platform}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}