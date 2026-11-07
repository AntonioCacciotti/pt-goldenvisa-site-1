"use client";
import { useSearchParams } from "next/navigation";
import EnquiryForm from "./EnquiryForm";

export default function GetStartedForm() {
  const p = useSearchParams().get("interest");
  const initial = p === "fund-brief" ? "fund-brief" : "consultation";
  return <EnquiryForm variant="full" idPrefix="gs" initialInterest={initial} buttonLabel="Send enquiry" />;
}
