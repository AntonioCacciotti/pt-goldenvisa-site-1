import Link from "next/link";
import Logo from "./Logo";
import Placeholder from "./Placeholder";

export default function Footer() {
  return (
    <footer className="on-dark mt-24 bg-forest text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 font-serif text-xl text-ivory/90">Connecting you to a future in Europe.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          <Link href="/golden-visa" className="hover:underline">Golden Visa</Link>
          <Link href="/the-fund" className="hover:underline">The Fund</Link>
          <Link href="/get-started" className="hover:underline">Get Started</Link>
          <span className="my-2 block h-px w-12 bg-gold" aria-hidden="true" />
          <Link href="/important-information" className="hover:underline">Important Information</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </nav>
        <div className="space-y-3 text-sm">
          <p><Placeholder dark>[TO BE PROVIDED: contact email]</Placeholder></p>
          <p><Placeholder dark>[TO BE PROVIDED: registered company name and address]</Placeholder></p>
        </div>
      </div>
      <div className="border-t border-gold/50 py-6 text-center text-xs tracking-wide text-ivory/80">
        © {new Date().getFullYear()} Sintra Silvan. All rights reserved.
      </div>
    </footer>
  );
}
