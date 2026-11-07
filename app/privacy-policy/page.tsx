import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sintra Silvan handles the personal details you share with us.",
};

const blocks = ["Who is responsible for your data", "What we collect and why", "How long we keep it", "Your rights", "Contact for privacy questions"];

export default function Page() {
  return (
    <>
      <PageHead label="PRIVACY POLICY" title="Privacy Policy." />
      <div className="mx-auto max-w-4xl space-y-10 px-5 pt-8">
        {blocks.map((h) => (
          <section key={h} className="border-t border-gold pt-6">
            <h2 className="text-2xl">{h}</h2>
            <p className="mt-3"><Placeholder>[TO BE PROVIDED BY LEGAL COUNSEL: {h.toLowerCase()}]</Placeholder></p>
          </section>
        ))}
      </div>
    </>
  );
}
