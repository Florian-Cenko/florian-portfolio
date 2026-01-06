export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="divider max-w-6xl mx-auto"></div>
      <div className="py-8 text-center text-sm text-[var(--secondary)]">
        <p className="font-medium text-[var(--foreground)]">Florian Cenko</p>
        <p className="mt-1">Junior Software Enginner ·  Data & AI</p>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}