export default function Languages() {
  return (
    <section className="py-24 bg-[var(--background)] mb-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-[var(--foreground)] relative inline-block">
          Languages
          <span className="block w-16 h-1 bg-[var(--accent)] rounded-full mt-2"></span>
        </h2>

        <div className="bg-[var(--card-bg)] p-6 md:p-8 rounded-2xl shadow-md">
          <ul className="space-y-4 text-[var(--secondary)]">
            <li>
              <span className="font-semibold text-[var(--foreground)]">Greek</span> — Native
            </li>
            <li>
              <span className="font-semibold text-[var(--foreground)]">English</span> — C2
            </li>
            <li>
              <span className="font-semibold text-[var(--foreground)]">Albanian</span> — Native
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}