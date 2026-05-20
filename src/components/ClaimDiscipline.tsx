export function ClaimDiscipline({ text = "Claims are bounded to the linked experiment scale. Broad capability claims require benchmark receipts." }: { text?: string }) {
  return (
    <div className="mb-8 rounded-md border border-gold/35 bg-forest/70 px-4 py-3 text-sm leading-6 text-cream/80 shadow-scene">
      <span className="font-bold text-gold">Claim discipline:</span> {text}
    </div>
  );
}
