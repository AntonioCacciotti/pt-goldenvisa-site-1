import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import SectionLabel from "@/components/SectionLabel";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "The Portugal Golden Visa",
  description: "How the Portugal Golden Residence Permit Program works, which investments qualify, and the rules for the fund route.",
};

const routes = [
  ["Venture capital / private equity fund", "€500,000"],
  ["Donation to the arts", "€250,000"],
  ["Donation to research", "€500,000"],
  ["Creating a company", "10 jobs, or €500,000 + 5 jobs"],
];

export default function Page() {
  return (
    <>
      <PageHead label="GOLDEN VISA" title="The Portugal Golden Visa." />
      <div className="mx-auto max-w-4xl space-y-16 px-5 pt-8">
        <section>
          <SectionLabel>WHAT IT IS</SectionLabel>
          {/* [TO BE CONFIRMED BY LEGAL COUNSEL]: the "average stay of seven days per year" rule below. */}
          <p>The Portugal Golden Residence Permit Program is a five-year residence-by-investment program for people from outside the EU.</p>
          <p className="mt-4">The permit allows free movement across Europe&apos;s Schengen Area and requires an average stay of only seven days per year in Portugal.</p>
        </section>

        <section>
          <SectionLabel>WHICH INVESTMENTS QUALIFY</SectionLabel>
          <p className="mb-6">Since 7 October 2023:</p>
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Qualifying investment routes and amounts</caption>
            <thead>
              <tr className="border-b border-gold text-sm uppercase tracking-widest text-forest">
                <th scope="col" className="py-3 pr-4 font-medium">Route</th>
                <th scope="col" className="py-3 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {routes.map(([r, a]) => (
                <tr key={r} className="border-b border-gold/40">
                  <th scope="row" className="py-4 pr-4 font-normal">{r}</th>
                  <td className="py-4">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-5 italic">Sintra Silvan specialises in the fund route.</p>
        </section>

        <section>
          <SectionLabel>FUND ROUTE — THE RULES</SectionLabel>
          <ul className="space-y-3">
            <li className="border-t border-gold/60 pt-3">You cannot use property to qualify for the Golden Visa.</li>
            <li className="border-t border-gold/60 pt-3">The fund cannot hold property directly. It can buy companies that use property for their business, such as hotels or factories.</li>
            <li className="border-t border-gold/60 pt-3">At least 60% of the fund must be invested in companies with a registered office in Portugal.</li>
          </ul>
        </section>

        <section>
          <SectionLabel>RESIDENCE AND CITIZENSHIP</SectionLabel>
          <p className="mb-5">The Golden Visa can be the start of a path to Portuguese citizenship.</p>
          <dl className="space-y-4">
            <div className="border-t border-gold/60 pt-3">
              <dt className="font-semibold text-forest">Permanent residence</dt>
              <dd>May be possible after 5 years.</dd>
            </div>
            <div className="border-t border-gold/60 pt-3">
              <dt className="font-semibold text-forest">Citizenship</dt>
              <dd><Placeholder>[TO BE CONFIRMED BY LEGAL COUNSEL: current residence period required]</Placeholder></dd>
            </div>
          </dl>
        </section>

        <p className="pt-4"><Link href="/get-started?interest=consultation" className="btn">Request a Private Consultation</Link></p>
      </div>
    </>
  );
}
