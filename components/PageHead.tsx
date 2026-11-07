import SectionLabel from "./SectionLabel";
export default function PageHead({ label, title, line }: { label: string; title: string; line?: string }) {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-8 pt-20">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="text-5xl md:text-6xl">{title}</h1>
      {line && <p className="mt-6 text-lg italic text-charcoal">{line}</p>}
    </section>
  );
}
