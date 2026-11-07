"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/golden-visa", label: "Golden Visa" },
  { href: "/the-fund", label: "The Fund" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-gold/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm tracking-wide text-charcoal hover:text-forest">{l.label}</Link>
          ))}
          <Link href="/get-started" className="btn !py-2.5">Get Started</Link>
        </nav>
        <button className="md:hidden border border-forest px-3 py-2 text-xs uppercase tracking-widest text-forest" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Main" className="flex flex-col gap-1 border-t border-gold/60 px-5 pb-6 pt-3 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-charcoal">{l.label}</Link>
          ))}
          <Link href="/get-started" onClick={() => setOpen(false)} className="btn mt-2">Get Started</Link>
        </nav>
      )}
    </header>
  );
}
