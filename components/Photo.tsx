/* Labelled placeholder image frame. Replace with a compressed next/image when photos are supplied. */
export default function Photo({ what, className = "" }: { what: string; className?: string }) {
  return (
    <div role="img" aria-label={`Placeholder for photograph: ${what}`} className={`flex items-center justify-center border border-gold/60 bg-ivory-deep p-6 text-center text-sm text-charcoal ${className}`}>
      [TO BE PROVIDED: photo of {what}]
    </div>
  );
}
