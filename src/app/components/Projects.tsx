"use client";

import { projects } from "@/components/data/projects";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Projects() {
  const [sliderRef, slider] = useKeenSlider({
    slides: { perView: 1, spacing: 24 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
  });

  return (
    <section id="projects" className="py-24 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-[var(--foreground)] relative inline-block">
          Featured Projects
          <span className="block w-16 h-1 bg-[var(--accent)] rounded-full mt-2"></span>
        </h2>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {projects.slice(0, 6).map((project, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-[var(--card-bg)] p-6 rounded-2xl border border-transparent hover:border-[var(--accent)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform flex flex-col min-h-[460px]"
              >
                <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{project.title}</h3>
                <p className="text-xs uppercase tracking-wide text-[var(--accent)] mb-4">{project.category}</p>
                <p className="text-sm text-[var(--secondary)] mb-4 whitespace-pre-line leading-relaxed">{project.description}</p>

                {project.tech && (
                  <div className="mt-auto">
                    <p className="text-xs font-semibold text-[var(--foreground)] mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3 flex-wrap">
                  {project.github &&
                    (typeof project.github === "string"
                      ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2 text-sm font-semibold rounded-md border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                          GitHub
                        </a>
                      )
                      : Object.entries(project.github).map(([key, url]) => (
                          <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 text-sm font-semibold rounded-md border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                          >
                            {key === "frontEnd" ? "Front-End Repo" : "Back-End Repo"}
                          </a>
                        ))
                    )
                  }
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => slider.current?.prev()}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-[var(--card-bg)] border border-[var(--accent)]/30 p-2 rounded-full shadow hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            ◀
          </button>

          <button
            onClick={() => slider.current?.next()}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-[var(--card-bg)] border border-[var(--accent)]/30 p-2 rounded-full shadow hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            ▶
          </button>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/Florian-Cenko"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors"
          >
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}