const node = "rounded-md border border-gold/40 bg-forest/75 px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-cream";
const arrow = "text-gold/80";

export function TSCycleDiagram() {
  const steps = ["Propagate", "Relax", "Break", "Evolve"];
  return (
    <div className="grid gap-3 rounded-md border border-gold/25 bg-forest/45 p-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
      {steps.map((step, index) => (
        <div key={step} className="contents">
          <div className={node}>{step}</div>
          {index < steps.length - 1 ? <div className={`${arrow} hidden items-center sm:flex`}>→</div> : null}
        </div>
      ))}
    </div>
  );
}

export function ProjectStackDiagram() {
  return (
    <div className="rounded-md border border-gold/25 bg-forest/45 p-4">
      <div className="mb-3 grid gap-3 sm:grid-cols-3">
        {["Docs", "Proof Bank", "Website"].map((item) => <div key={item} className={node}>{item}</div>)}
      </div>
      <div className="mb-3 grid gap-3 sm:grid-cols-3">
        {["CIG", "TensionLM", "Proof Ranker"].map((item) => <div key={item} className={node}>{item}</div>)}
      </div>
      <div className={node}>TS-Core graph/tension substrate</div>
    </div>
  );
}

export function ReceiptAnatomyDiagram() {
  return (
    <div className="grid gap-2 rounded-md border border-gold/25 bg-forest/45 p-4 sm:grid-cols-5">
      {["Claim", "Setup", "Result", "Limit", "Replay"].map((item) => <div key={item} className={node}>{item}</div>)}
    </div>
  );
}

export function CIGMiniDiagram() {
  return (
    <div className="grid gap-2 rounded-md border border-gold/25 bg-forest/45 p-4 sm:grid-cols-5">
      {["Claim", "Evidence", "Source", "Confidence", "Contradiction"].map((item) => <div key={item} className={node}>{item}</div>)}
    </div>
  );
}

export function TensionLMMiniDiagram() {
  return (
    <div className="grid gap-2 rounded-md border border-gold/25 bg-forest/45 p-4 sm:grid-cols-4">
      {["Token pairs", "Sigmoid tension field", "Value aggregation", "Inspectable telemetry"].map((item) => <div key={item} className={node}>{item}</div>)}
    </div>
  );
}
