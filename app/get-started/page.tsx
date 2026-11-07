import type { Metadata } from "next";
import { Suspense } from "react";
import PageHead from "@/components/PageHead";
import GetStartedForm from "@/components/GetStartedForm";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Request a private consultation or the fund brief. Every enquiry is handled personally and in confidence.",
};

export default function Page() {
  return (
    <>
      <PageHead label="GET STARTED" title="Request a private consultation." line="Every enquiry is handled personally and in confidence." />
      <section className="mx-auto max-w-2xl px-5 pb-8">
        <Suspense fallback={<p>Loading form.</p>}>
          <GetStartedForm />
        </Suspense>
      </section>
    </>
  );
}
