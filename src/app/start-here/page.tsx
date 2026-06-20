import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { TSCycleDiagram } from "@/components/Diagrams";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Start Here",
  description:
    "A plain-language guide to the current BoggersTheFish verifier-first systems research.",
  path: "/start-here",
});

const programmes = [
  {
    name: "Reasoning and language",
    system: "ts-chat-language → TS-Reasoner",
    question:
      "Can human language become explicit semantic state, then pass through typed verification without a chatbot bypass?",
  },
  {
    name: "Model science",
    system: "Ten-SON-LM ← TensionLM",
    question:
      "Does a tension signal causally improve revision and routing, or is it only an ordinary learned gate with a dramatic name?",
  },
  {
    name: "Adaptive inference",
    system: "TSQ",
    question:
      "Can tension and verifier failures allocate precision more efficiently than always-low or always-high execution?",
  },
  {
    name: "Verified computing",
    system: "bogbin + TensionForge",
    question:
      "Can storage, execution, training, persistence, and rollback expose exact state transitions and receipts?",
  },
];

const isItems = [
  "A verifier-first engineering programme",
  "A collection of falsifiable model and runtime experiments",
  "A way to expose semantic, graph, compute, and state transitions",
  "A public archive that keeps negative results and superseded ideas visible",
];

const isNotItems = [
  "Not a finished AGI",
  "Not a theory-of-everything proof",
  "Not a general theorem prover",
  "Not a production operating system",
  "Not proof that tension beats standard methods",
  "Not permission to treat confidence as evidence",
];

const nextRoutes = [
  {
    title: "Understand the architecture",
    body: "Read the current projects as four separate programmes with explicit interfaces.",
    href: "/projects",
  },
  {
    title: "Inspect evidence",
    body: "Start with experiment setup, receipts, failures, and limitations.",
    href: "/proof-bank",
  },
  {
    title: "Trace the history",
    body: "See how the current stack emerged from 52 repositories.",
    href: "/lineage",
  },
  {
    title: "Read the research framing",
    body: "Open the broader questions without inflating the claims.",
    href: "/research",
  },
];

export default function StartHerePage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Begin here</p>
        <h1>TS is a research programme, not one magical repository.</h1>
        <p>
          The current work separates human language, verifier authority,
          learned mechanisms, adaptive compute, and deterministic systems so
          each claim can be tested at the correct boundary.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {programmes.map((programme) => (
          <ParchmentCard key={programme.name} tone="dark">
            <p className="field-label text-gold">{programme.name}</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-cream">
              {programme.system}
            </h2>
            <p className="mt-3 text-sm leading-7 text-cream/76">
              {programme.question}
            </p>
          </ParchmentCard>
        ))}
      </div>

      <div className="mt-8">
        <TSCycleDiagram />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <ParchmentCard>
          <p className="field-label mb-4 text-brown">What TS is</p>
          <div className="space-y-2">
            {isItems.map((item) => (
              <p key={item} className="text-sm leading-7 text-ink/75">
                {item}
              </p>
            ))}
          </div>
        </ParchmentCard>
        <ParchmentCard>
          <p className="field-label mb-4 text-brown">What TS is not</p>
          <div className="space-y-2">
            {isNotItems.map((item) => (
              <p key={item} className="text-sm leading-7 text-ink/75">
                {item}
              </p>
            ))}
          </div>
        </ParchmentCard>
      </div>

      <SectionHeading className="mt-14" title="The intended route">
        <p>
          A usable turn should pass through explicit boundaries rather than
          hiding everything inside one model response.
        </p>
      </SectionHeading>
      <ParchmentCard tone="dark">
        <div className="grid gap-4 text-sm leading-7 text-cream/78 md:grid-cols-5">
          <p>
            <strong className="text-gold">1. Compile</strong>
            <br />
            Human text becomes semantic frames and a MeaningGraph.
          </p>
          <p>
            <strong className="text-gold">2. Verify</strong>
            <br />
            Typed checks decide what has support.
          </p>
          <p>
            <strong className="text-gold">3. Update</strong>
            <br />
            Accepted state changes; rejected candidates do not contaminate it.
          </p>
          <p>
            <strong className="text-gold">4. Plan</strong>
            <br />
            The system selects a response act from verified state.
          </p>
          <p>
            <strong className="text-gold">5. Render</strong>
            <br />
            Language expresses the plan without inventing new authority.
          </p>
        </div>
      </ParchmentCard>

      <SectionHeading className="mt-14" title="Where to go next">
        <p>Pick the route matching the kind of understanding you want.</p>
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {nextRoutes.map((route) => (
          <ParchmentCard key={route.title}>
            <h2 className="font-serif text-2xl font-semibold text-ink">
              {route.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">
              {route.body}
            </p>
            <Link href={route.href} className="brass-link mt-5">
              Open route <ArrowRight className="h-4 w-4" />
            </Link>
          </ParchmentCard>
        ))}
      </div>

      <SectionHeading className="mt-14" title="Active project nodes">
        <p>
          These carry the current code. Historical repositories live in the
          lineage rather than competing on this page.
        </p>
      </SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={project.href}
            className="parchment-card rounded-md border p-4 transition hover:-translate-y-1"
          >
            <h3 className="font-serif text-xl font-semibold text-ink">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              {project.shortDescription}
            </p>
            <span className="brass-link mt-4">
              Open node
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
