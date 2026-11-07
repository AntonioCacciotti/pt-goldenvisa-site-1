/* Visible marker for missing content. Format: [TO BE PROVIDED: ...] */
export default function Placeholder({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline border border-dashed px-2 py-0.5 text-[0.95em] ${dark ? "border-gold text-ivory" : "border-gold text-charcoal bg-gold/10"}`}>
      {children}
    </span>
  );
}
