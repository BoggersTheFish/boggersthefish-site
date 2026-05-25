export function FieldGuideScene() {
  const nodes = [
    { label: "local", className: "left-[12%] top-[18%]" },
    { label: "global", className: "right-[10%] top-[22%]" },
    { label: "repair", className: "bottom-[18%] left-[17%]" },
    { label: "refuse", className: "bottom-[16%] right-[13%]" },
  ];

  return (
    <figure
      className="field-guide-scene relative min-h-[470px] overflow-hidden rounded-md border border-gold/45"
      aria-label="Dark TS research engine visual with tension rings, constraint nodes, and trace receipts"
    >
      <div className="engine-grid" aria-hidden="true" />
      <div className="engine-orbit engine-orbit-one" aria-hidden="true" />
      <div className="engine-orbit engine-orbit-two" aria-hidden="true" />

      <div className="engine-core" aria-hidden="true">
        <div className="engine-core-mark">TS</div>
      </div>

      {nodes.map((node) => (
        <div key={node.label} className={`constraint-node ${node.className}`}>
          <span />
          {node.label}
        </div>
      ))}

      <div className="receipt-panel receipt-panel-left">
        <p className="field-label text-gold/85">trace receipt</p>
        <div className="mt-3 space-y-2 font-mono text-[0.68rem] leading-5 text-cream/78">
          <p>candidate: direct_chain</p>
          <p>local_tension: 0.85</p>
          <p>issue: quantifier_jump</p>
        </div>
      </div>

      <div className="receipt-panel receipt-panel-right">
        <p className="field-label text-gold/85">settlement</p>
        <div className="mt-3 space-y-2 font-mono text-[0.68rem] leading-5 text-cream/78">
          <p>rejected: overclaim</p>
          <p>repair_path: abstain</p>
          <p>answer: insufficient</p>
        </div>
      </div>

      <div className="terminal-panel">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="h-2 w-2 rounded-full bg-gold/45" />
          <span className="h-2 w-2 rounded-full bg-cream/35" />
        </div>
        <pre className="font-mono text-[0.69rem] leading-5 text-cream/78">
          <code>{`$ python3 inference.py --question ...
trace -> artifacts/latest_trace.json
settled_answer: Not enough information`}</code>
        </pre>
      </div>
    </figure>
  );
}
