import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileCheck2, ScrollText } from "lucide-react";
import { PUBLIC_RECEIPTS } from "@/lib/tsData";

export const metadata: Metadata = {
  title: "Receipts - BoggersTheFish",
  description:
    "Public TS receipts for TS-Reasoner, TensionLM, TS-Codex-OS, CIG provenance, and proof-bank experiments.",
};

function ReceiptField({
  label,
  value,
}: {
  label: "claim" | "command" | "artifact" | "limitation";
  value: string;
}) {
  const isCommand = label === "command";

  return (
    <div className="min-w-0 border-t border-[#b98a32]/25 pt-3">
      <div className="mb-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#8f6a2a]">
        {label}
      </div>
      {isCommand ? (
        <pre className="overflow-x-auto rounded-md border border-[#b98a32]/30 bg-[#102015] px-3 py-2 text-xs leading-relaxed text-[#f6edcf]">
          <code>{value}</code>
        </pre>
      ) : (
        <p className="text-sm leading-6 text-[#1f2118]/80">{value}</p>
      )}
    </div>
  );
}

export default function ReceiptsPage() {
  return (
    <main className="min-h-screen bg-[#102015] text-[#f6edcf]">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#d5a23c]">
            Public receipts
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-[#f6edcf] sm:text-6xl">
            Receipts
          </h1>
          <p className="mt-5 text-base leading-8 text-[#f6edcf]/80">
            Claims that should be taken seriously need a command, an artifact, a limitation, and a link.
            This page is the short route for researchers, funders, and technical readers checking the TS stack.
          </p>
        </div>

        <div className="mt-8 rounded-md border border-[#b98a32]/35 bg-[#15281b]/75 px-4 py-3 text-sm leading-6 text-[#f6edcf]/82 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
          <span className="font-bold text-[#d5a23c]">Claim discipline:</span>{" "}
          broad claims route through receipts. Each entry below names what was checked, how to rerun it, what file to inspect, and what it still does not prove.
        </div>

        <div className="mt-8 rounded-md border border-[#b98a32]/25 bg-[#15281b]/45 p-4">
          <div className="grid gap-3 sm:grid-cols-3">
            {["TS-Reasoner", "TensionLM", "TS-Codex-OS", "CIG", "Proof Bank", "Tour"].map((item) => (
              <div
                key={item}
                className="rounded-md border border-[#b98a32]/40 bg-[#15281b]/75 px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#f6edcf]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5">
          {PUBLIC_RECEIPTS.map((receipt, index) => (
            <article
              key={receipt.id}
              className="rounded-md border border-[#b98a32]/45 bg-[#f3e3b3] p-5 text-[#1f2118] shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
            >
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="mb-3 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#8f6a2a]">
                    <FileCheck2 className="h-3.5 w-3.5" />
                    Receipt {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-serif text-2xl font-semibold leading-tight text-[#1f2118]">
                    {receipt.title}
                  </h2>
                </div>
                <Link
                  href={receipt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#8f4e22] underline-offset-4 hover:underline"
                >
                  Open
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <ReceiptField label="claim" value={receipt.claim} />
                <ReceiptField label="command" value={receipt.command} />
                <ReceiptField label="artifact" value={receipt.artifact} />
                <ReceiptField label="limitation" value={receipt.limitation} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#b98a32]/25 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm leading-6 text-[#f6edcf]/75">
            <ScrollText className="h-5 w-5 text-[#d5a23c]" />
            Receipts before claims. Commands before narrative.
          </div>
          <Link
            href="https://github.com/BoggersTheFish/TS-Start-Here"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 font-bold text-[#d5a23c] underline-offset-4 hover:underline"
          >
            Start Here
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
