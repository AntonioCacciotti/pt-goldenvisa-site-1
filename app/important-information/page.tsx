import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Important Information",
  description: "Important information about Sintra Silvan and the use of this website.",
};

const blocks = [
  { h: "Who Sintra Silvan is", t: "Sintra Silvan introduces and connects. It does not give legal or tax advice. Legal and tax advice comes from qualified partners.", note: "[TO BE CONFIRMED BY LEGAL COUNSEL]" },
  { h: "Investment risk", t: "", note: "[TO BE PROVIDED BY LEGAL COUNSEL: investment risk warning]" },
  { h: "No offer to invest", t: "Nothing on this site is an offer to invest.", note: "[TO BE CONFIRMED BY LEGAL COUNSEL]" },
];

export default function Page() {
  return (
    <>
      <PageHead label="IMPORTANT INFORMATION" title="Important Information." />
      <div className="mx-auto max-w-4xl space-y-10 px-5 pt-8">
        {blocks.map((b) => (
          <section key={b.h} className="border-t border-gold pt-6">
            <h2 className="text-2xl">{b.h}</h2>
            {b.t && <p className="mt-3">{b.t}</p>}
            <p className="mt-3"><Placeholder>{b.note}</Placeholder></p>
          </section>
        ))}
      </div>
    </>
  );
}
