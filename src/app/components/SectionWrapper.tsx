export default function SectionWrapper({ children }: { children: React.ReactNode }) {
  return <section className="py-24 bg-[var(--background)] mb-15">{children}</section>;
}