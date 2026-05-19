import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, HeartHandshake, ScrollText } from "lucide-react";
import { contributorPaths } from "@/content/site";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [BookOpen, FlaskConical, ScrollText, HeartHandshake];

export function ContributorPaths() {
  return (
    <section className="page-shell pt-2">
      <SectionHeading eyebrow="Choose your path" title="A cleaner way into the archive">
        <p>
          Different visitors need different first moves. This section keeps the
          serious routes obvious.
        </p>
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-4">
        {contributorPaths.map((path, index) => {
          const Icon = icons[index] ?? BookOpen;
          return (
            <Link key={path.href} href={path.href} className="group block">
              <ParchmentCard className="h-full hover:-translate-y-1 hover:border-gold/80">
                <div className="diagram-icon mb-4" aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-ink">{path.label}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/75">{path.body}</p>
                <span className="brass-link mt-5">
                  Open route
                  <ArrowRight className="h-4 w-4" />
                </span>
              </ParchmentCard>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
