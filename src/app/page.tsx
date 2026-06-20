import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BGCNotice } from "@/components/BGCNotice";
import { ContributorPaths } from "@/components/ContributorPaths";
import { Hero } from "@/components/Hero";
import { ParchmentCard } from "@/components/ParchmentCard";
import { ProjectCard } from "@/components/ProjectCard";
import { QuickLinks } from "@/components/QuickLinks";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";
import { lineageCount } from "@/content/lineage";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
});

const programmes = [
  {
    title: "Reasoning and language",
    body: "ts-chat-language compiles human input into explicit semantic state. TS-Reasoner decides what may be accepted, repaired, remembered, or rejected.",
    route: "/projects/ts-chat-language",
  },
  {
    title: "Model science",
    body: "Ten-SON-LM asks whether learned tension causally improves a recurrent semantic workspace. TensionLM remains the earlier attention-based evidence line.",
    route: "/projects/ten-son-lm",
  },
  {
    title: "Adaptive inference",
    body: "TSQ explores precision escalation driven by tension and verifier failure. It does not claim an efficiency win until distinct numerical paths are measured.",
    route: "/projects/tsq",
  },
  {
    title: "Verified computing",
    body: "bogbin develops deterministic state, capabilities, persistence, and rollback. TensionForge tests verified training on legacy commodity hardware.",
    route: "/projects/bogos",
  },
];

const fieldNotes = [
  {
    title: "Ten-SON Milestone 1: Partial",
    body: "Delayed recall, balanced brackets, and a synthetic next-token task learned. Copy missed threshold. Tension evidence is promising on one task and mixed elsewhere.",
  },
  {
    title: "TensionForge: correct, currently slow",
    body: "The RX 480 path has forward, backward, optimizer, and recurrent parity receipts, but the tested runtime is substantially slower than PyTorch CPU.",
  },
  {
    title: "TSQ: runtime before quantization proof",
    body: "Routing, repair, evaluation, data, and adapter tooling exist. Genuine adaptive-precision evidence waits for materially different low/high numerical backends.",
  },
  {
    title: "TSLC + TS-Reasoner: first complete vertical slice",
    body: "Bounded text now reaches MeaningGraph, deterministic bridging, verifier-gated accept/repair/reject, deterministic rendering, and unified turn receipts. The 30-case evaluation passes every hard gate without an external language model.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="page-shell pb-4">
        <div className="grid gap-5 lg:grid-cols-[1.45fr_0.75fr]">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
          <QuickLinks />
          <div className="lg:col-span-2">
            <BGCNotice />
          </div>
        </div>
      </section>

      <section className="page-shell">
        <SectionHeading eyebrow="Current architecture" title="Four programmes, one evidence rule">
          <p>
            Each programme has a different job. None may convert fluency,
            confidence, naming, or version count into proof.
          </p>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programmes.map((programme) => (
            <Link
              key={programme.title}
              href={programme.route}
              className="ts-card p-5 hover:-translate-y-0.5"
            >
              <h2 className="font-serif text-2xl font-semibold text-cream">
                {programme.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-cream/76">
                {programme.body}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">
                Open programme <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell pt-2">
        <SectionHeading eyebrow="Current evidence" title="Field notes, including the failures">
          <p>
            The archive records what happened, not just what sounds impressive.
          </p>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          {fieldNotes.map((note) => (
            <ParchmentCard key={note.title} tone="dark">
              <h2 className="font-serif text-2xl font-semibold text-cream">
                {note.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-cream/76">{note.body}</p>
            </ParchmentCard>
          ))}
        </div>
      </section>

      <section className="page-shell pt-2">
        <ParchmentCard
          tone="dark"
          className="grid gap-6 md:grid-cols-[0.75fr_1.25fr]"
        >
          <div>
            <p className="field-label text-gold">Permanent lineage</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-cream">
              {lineageCount} repositories become one readable history.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-cream/78">
              Old repositories can be deleted without pretending they never
              existed. The lineage archive records each meaningful idea, what
              survived, what failed, and which current project inherited it.
            </p>
            <Link href="/lineage" className="brass-link mt-5 text-gold">
              Explore the project lineage
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ParchmentCard>
      </section>

      <section className="page-shell pt-2">
        <ParchmentCard
          tone="dark"
          className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="field-label text-gold">Claim boundary</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-cream">
              Runnable mechanisms are real. Broad conclusions still need proof.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Not a finished AGI.",
              "Not a general theorem prover.",
              "Not a production operating system.",
              "Not an adaptive-quantization win yet.",
              "Verifier authority is separate from model confidence.",
              "Negative results and regressions stay visible.",
            ].map((item) => (
              <p
                key={item}
                className="flex gap-3 rounded-md border border-gold/20 bg-black/20 p-3 text-sm leading-6 text-cream/78"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {item}
              </p>
            ))}
          </div>
        </ParchmentCard>
      </section>

      <ContributorPaths />
    </>
  );
}
