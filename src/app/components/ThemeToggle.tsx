"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-lg border border-[var(--accent)]
                 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white
                 transition-colors"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}