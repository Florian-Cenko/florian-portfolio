export default function Footer() {
  return (
    <footer className="mt-24">
      {/* Divider */}
      <div className="divider max-w-6xl mx-auto"></div>

      {/* Content */}
      <div className="py-8 text-center text-sm text-[var(--secondary)] ">
        <p className="font-medium text-[var(--foreground)]">
          Florian Cenko
        </p>
        <p className="mt-1">
          Software Engineer · Backend & Data
        </p>
        <p className="mt-4 text-xs">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}