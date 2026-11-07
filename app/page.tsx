import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, Globe2, ShieldCheck, Languages, MapPinned, Euro } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import Placeholder from "@/components/Placeholder";
import Photo from "@/components/Photo";
import EnquiryForm from "@/components/EnquiryForm";
import { fundPoints } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sintra Silvan | Portugal Golden Visa by Introduction",
  description: "A private introduction to the Portugal Golden Visa. Connecting you to a future in Europe.",
};

const steps = [
  { n: "01", t: "Invest €500,000", r: " in a qualifying investment fund." },
  { n: "02", t: "Live, work and study in Portugal", r: ", and travel freely across Europe's Schengen Area." },
  { n: "03", t: "Begin your path to Portuguese citizenship.", r: "" },
];

const why = [
  { i: Landmark, t: "One of the oldest countries in Europe, with a rich history." },
  { i: Globe2, t: "One of the world's most globalised and peaceful nations." },
  { i: ShieldCheck, t: "Very safe, with a low crime rate." },
  { i: Languages, t: "English widely spoken, especially in tourist regions." },
  { i: MapPinned, t: "Member of Europe's Schengen Area." },
  { i: Euro, t: "Uses the euro (since 2002)." },
];

const paths = [
  { h: "Just exploring", t: "Read how the Golden Visa works.", href: "/golden-visa", cta: "Golden Visa" },
  { h: "Want the details", t: "Request the private fund brief.", href: "/get-started?interest=fund-brief", cta: "Request the brief" },
  { h: "Ready to talk", t: "Book a private consultation.", href: "/get-started?interest=consultation", cta: "Book a consultation" },
];

export default function Home() {
  return (
    <>
      {/* 4.1 Hero */}
      <section className="on-dark bg-forest">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-ivory">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />PORTUGAL GOLDEN VISA
            </p>
            <h1 className="text-5xl md:text-7xl">Your Connection to European Opportunity.</h1>
            <p className="mt-8 text-xl text-ivory/90">Discover the Golden Visa path to Portugal.</p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link href="/get-started" className="btn btn-light">Request a Private Consultation</Link>
              <a href="#how-it-works" className="text-link text-sm">How it works</a>
            </div>
          </div>
          <Photo what="Sintra palace amid forest" className="min-h-72 !bg-forest-deep !text-ivory md:min-h-96" />
        </div>
      </section>

      {/* 4.2 How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-6 px-5 pt-28">
        <SectionLabel>HOW IT WORKS</SectionLabel>
        <ol className="mt-10 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="border-t border-gold pt-6">
              <span className="font-serif text-4xl text-forest">{s.n}</span>
              <p className="mt-4 text-lg"><strong className="font-semibold">{s.t}</strong>{s.r}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10"><Link href="/golden-visa" className="text-link">Learn More</Link></p>
      </section>

      {/* 4.3 The Fund preview */}
      <section className="mx-auto max-w-6xl px-5 pt-28">
        <SectionLabel>THE FUND</SectionLabel>
        <h2 className="text-4xl md:text-5xl">Three things to know.</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {fundPoints.map((p, i) => (
            <li key={p.title} className="border-t border-gold pt-6">
              <span className="text-sm tracking-widest text-forest">0{i + 1}</span>
              <h3 className="mt-2 text-2xl">{p.title}</h3>
              {p.body && <p className="mt-3">{p.body}</p>}
            </li>
          ))}
        </ol>
        <p className="mt-12 italic">Full details are shared privately.</p>
        <div className="mt-6 flex flex-wrap items-center gap-8">
          <Link href="/get-started?interest=fund-brief" className="btn">Request the Fund Brief</Link>
          <Link href="/the-fund" className="text-link">Learn More</Link>
        </div>
      </section>

      {/* 4.4 Why Portugal */}
      <section className="mx-auto max-w-6xl px-5 pt-28">
        <SectionLabel>WHY PORTUGAL</SectionLabel>
        <ul className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {why.map(({ i: Icon, t }) => (
            <li key={t} className="flex items-start gap-4 border-t border-gold pt-5">
              <Icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-forest" strokeWidth={1.5} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4.5 By introduction */}
      <section className="mx-auto mt-28 max-w-6xl px-5">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Photo what="Lisbon architecture" className="min-h-64" />
          <div>
            <SectionLabel>BY INTRODUCTION</SectionLabel>
            <h2 className="text-4xl md:text-5xl">The right introduction changes everything.</h2>
            <p className="mt-6">
              <Placeholder>[TO BE PROVIDED: who is in Sintra Silvan&apos;s network — e.g. which types of advisers, lawyers, bankers — and what the firm does for the client]</Placeholder>
            </p>
          </div>
        </div>
      </section>

      {/* Appointment request (added by client request) */}
      <section id="book" className="on-dark mt-28 scroll-mt-6 bg-forest">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2">
          <div>
            <p className="mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-ivory">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />PRIVATE CONSULTATION
            </p>
            <h2 className="text-4xl md:text-5xl">Request a time to speak.</h2>
            <p className="mt-6 text-ivory/90">Choose the day and time that suit you. A member of our team will be in touch personally to confirm.</p>
          </div>
          <div className="bg-ivory p-6 text-charcoal md:p-8">
            <EnquiryForm variant="appointment" idPrefix="home" buttonLabel="Request an Appointment" />
          </div>
        </div>
      </section>

      {/* 4.6 Three paths */}
      <section className="mx-auto max-w-6xl px-5 pt-28">
        <h2 className="text-4xl md:text-5xl">Where would you like to begin?</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paths.map((p) => (
            <Link key={p.h} href={p.href} className="group flex flex-col border border-gold/70 p-8 transition hover:bg-ivory-deep">
              <h3 className="text-2xl">{p.h}</h3>
              <p className="mt-3 flex-1">{p.t}</p>
              <span className="mt-8 text-sm uppercase tracking-widest text-forest underline decoration-gold underline-offset-8">{p.cta}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
