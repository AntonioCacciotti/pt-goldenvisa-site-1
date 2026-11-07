export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-forest">
      <span className="h-px w-10 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}
