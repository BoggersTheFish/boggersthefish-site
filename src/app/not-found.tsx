import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";

export default function NotFound() {
  return (
    <section className="page-shell flex min-h-[60vh] items-center justify-center">
      <ParchmentCard className="max-w-xl text-center">
        <p className="field-label mb-3 text-brown">Missing archive card</p>
        <h1 className="font-serif text-5xl font-semibold text-ink">404</h1>
        <p className="mt-4 text-sm leading-7 text-ink/75">
          This note is not in the public field guide yet. Return to the stable
          index and follow an existing route.
        </p>
        <Link href="/" className="plaque-button mt-6 bg-forest text-cream">
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>
      </ParchmentCard>
    </section>
  );
}
