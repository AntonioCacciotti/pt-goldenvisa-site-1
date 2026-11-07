"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export type Variant = "full" | "short" | "appointment";

const FORM_NAME: Record<Variant, string> = { full: "get-started", short: "fund-brief", appointment: "appointment" };
const THANKS = "Thank you. A member of our team will be in touch personally.";
const THANKS_APPT = "Thank you. A member of our team will be in touch personally to confirm a time.";

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm text-charcoal">
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="text-charcoal/70"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

export default function EnquiryForm({ variant, idPrefix, initialInterest, buttonLabel }: { variant: Variant; idPrefix: string; initialInterest?: "consultation" | "fund-brief"; buttonLabel: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [interest, setInterest] = useState<"consultation" | "fund-brief">(initialInterest ?? "consultation");
  const [minDate, setMinDate] = useState("");
  const [tz, setTz] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().slice(0, 10));
    try { setTz(Intl.DateTimeFormat().resolvedOptions().timeZone); } catch { /* ignore */ }
  }, []);
  useEffect(() => { if (initialInterest) setInterest(initialInterest); }, [initialInterest]);

  const id = (n: string) => `${idPrefix}-${n}`;
  const formName = FORM_NAME[variant];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    data.forEach((v, k) => body.append(k, String(v)));
    try {
      const res = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="border border-gold/60 bg-ivory-deep p-8 font-serif text-2xl text-forest">
        {variant === "appointment" ? THANKS_APPT : THANKS}
      </p>
    );
  }

  return (
    <form name={formName} method="POST" onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden"><label>Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>

      <Field id={id("name")} label="Full name" required>
        <input id={id("name")} name="name" required autoComplete="name" className="field" />
      </Field>
      <Field id={id("email")} label="Email" required>
        <input id={id("email")} name="email" type="email" required autoComplete="email" className="field" />
      </Field>
      {variant !== "short" && (
        <Field id={id("phone")} label="Phone">
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" className="field" />
        </Field>
      )}
      <Field id={id("country")} label="Country of residence" required>
        <input id={id("country")} name="country" required autoComplete="country-name" className="field" />
      </Field>

      {variant === "full" && (
        <fieldset>
          <legend className="mb-2 text-sm text-charcoal">I would like</legend>
          <div className="space-y-2">
            {([["consultation", "a private consultation"], ["fund-brief", "the fund brief"]] as const).map(([v, l]) => (
              <label key={v} className="flex items-center gap-3">
                <input type="radio" name="interest" value={v} checked={interest === v} onChange={() => setInterest(v)} className="h-4 w-4 accent-[#1F3A2E]" />
                {l}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      {variant === "short" && <input type="hidden" name="interest" value="fund-brief" />}
      {variant === "appointment" && (
        <>
          <input type="hidden" name="interest" value="consultation" />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id={id("date")} label="Preferred date" required>
              <input id={id("date")} name="preferred_date" type="date" required min={minDate} className="field" />
            </Field>
            <Field id={id("time")} label="Preferred time of day" required>
              <select id={id("time")} name="preferred_time" required defaultValue="" className="field">
                <option value="" disabled>Select</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </Field>
          </div>
          <Field id={id("tz")} label="Your time zone" required>
            <input id={id("tz")} name="timezone" required value={tz} onChange={(e) => setTz(e.target.value)} className="field" />
          </Field>
        </>
      )}

      {variant === "full" && (
        <>
          <Field id={id("heard")} label="How did you hear about us?">
            <input id={id("heard")} name="heard" className="field" />
          </Field>
          <Field id={id("message")} label="Message">
            <textarea id={id("message")} name="message" rows={5} className="field" />
          </Field>
        </>
      )}

      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 accent-[#1F3A2E]" />
        <span>I agree to my details being used to respond to this enquiry, as described in the <Link href="/privacy-policy" className="text-link">Privacy Policy</Link>. *</span>
      </label>

      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : buttonLabel}
      </button>
      {status === "error" && <p role="alert" className="text-sm text-[#8a1f1f]">Your message could not be sent. Please try again.</p>}
    </form>
  );
}
