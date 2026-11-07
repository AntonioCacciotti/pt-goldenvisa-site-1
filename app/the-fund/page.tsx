import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import SectionLabel from "@/components/SectionLabel";
import Placeholder from "@/components/Placeholder";
import EnquiryForm from "@/components/EnquiryForm";
import { fundPoints } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Fund",
  description: "A qualifying Golden Visa fund route, regulated and run from Luxembourg. Details are shared privately, on request.",
};

export default function Page() {
  return (
    <>
      <PageHead label="THE FUND" title="The Fund." line="Discreet by design. Details on request." />
      <section className="mx-auto max-w-4xl px-5 pt-8">
        <ol className="space-y-10">
          {fundPoints.map((p, i) => (
            <li key={p.title} className="border-t border-gold pt-6">
              <span className="text-sm tracking-widest text-forest">0{i + 1}</span>
              <h2 className="mt-2 text-3xl">{p.title}</h2>
              <p className="mt-3">{p.body}{p.body && " "}{p.extra}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="mx-auto max-w-4xl px-5 pt-20">
        <SectionLabel>THE PRIVATE BRIEF</SectionLabel>
        <h2 className="text-3xl md:text-4xl">What the private brief covers</h2>
        <p className="mt-5"><Placeholder>[TO BE PROVIDED: list of topics in the fund brief]</Placeholder></p>
      </section>
      <section className="mx-auto max-w-2xl px-5 pt-20">
        <SectionLabel>REQUEST THE BRIEF</SectionLabel>
        <EnquiryForm variant="short" idPrefix="fund" buttonLabel="Request the Fund Brief" />
      </section>
    </>
  );
}
