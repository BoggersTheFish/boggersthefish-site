export function FieldGuideScene() {
  return (
    <figure
      className="field-guide-scene relative min-h-[420px] overflow-hidden rounded-md border border-gold/45"
      aria-label="Illustrated field-guide scene of TS notes, graph nodes, books, and labels"
    >
      <div className="scene-sky" />
      <div className="scene-hills scene-hills-back" />
      <div className="scene-hills scene-hills-front" />

      <div className="absolute left-[8%] top-[12%] rotate-[-5deg] rounded-md border border-gold/45 bg-parchment px-4 py-3 shadow-paper">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-brown">Field note</div>
        <div className="mt-2 space-y-1 text-sm font-semibold text-ink">
          <p>Propagate</p>
          <p>Relax</p>
          <p>Break</p>
          <p>Evolve</p>
        </div>
      </div>

      <div className="absolute right-[10%] top-[13%] w-36 rotate-[4deg] rounded-md border border-brown/35 bg-parchment-light p-4 shadow-paper">
        <p className="field-label text-brown">Local constraint truth</p>
        <div className="mt-3 h-px bg-brown/30" />
        <p className="mt-3 text-xs leading-5 text-ink/75">
          Stable nodes hold until pressure changes the graph.
        </p>
      </div>

      <div className="absolute left-[35%] top-[9%] flex h-44 w-44 items-center justify-center rounded-full border border-gold/30 bg-forest/35 shadow-scene">
        <div className="fish-mark text-gold" aria-hidden="true">
          <span className="crown">♕</span>
          <span className="fish">BTF</span>
        </div>
      </div>

      <div className="graph-sketch absolute bottom-[22%] left-[13%]" aria-hidden="true">
        <span className="node n1" />
        <span className="node n2" />
        <span className="node n3" />
        <span className="node n4" />
        <span className="edge e1" />
        <span className="edge e2" />
        <span className="edge e3" />
        <span className="edge e4" />
      </div>

      <div className="absolute bottom-[15%] right-[14%] w-48 rotate-[-4deg] rounded border border-brown/40 bg-parchment p-3 shadow-paper">
        <div className="notebook-lines" />
        <p className="relative text-center font-serif text-lg font-semibold text-ink">
          Tension → relaxation
        </p>
      </div>

      <div className="book-stack absolute bottom-[12%] right-[4%]" aria-hidden="true">
        <span>TENSION</span>
        <span>CONSTRAINTS</span>
        <span>TRUTH</span>
      </div>

      <div className="absolute bottom-[9%] left-[36%] rounded-full border border-gold/50 bg-moss/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cream shadow-scene">
        substrate · surface · grounding
      </div>
    </figure>
  );
}
