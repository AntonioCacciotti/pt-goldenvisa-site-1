import Link from "next/link";
/* Text-only wordmark until a real logo is provided. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Sintra Silvan, home" className={`font-serif text-2xl tracking-[0.22em] ${light ? "text-ivory" : "text-forest"}`}>
      SINTRA SILVAN
    </Link>
  );
}
