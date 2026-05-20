export type RoadmapStatus = "Live" | "In progress" | "Planned" | "Blocked" | "Experimental";

export type RoadmapSection = {
  title: "Now" | "Next" | "Later";
  items: { title: string; status: RoadmapStatus }[];
};

export const roadmap: RoadmapSection[] = [
  {
    title: "Now",
    items: [
      { title: "Clean site and project map", status: "Live" },
      { title: "Finish proof-bank receipts", status: "In progress" },
      { title: "Improve reproducible demos", status: "In progress" },
      { title: "Link repos and model cards properly", status: "In progress" },
    ],
  },
  {
    title: "Next",
    items: [
      { title: "TS-Core v0.1 clean package", status: "Planned" },
      { title: "CIG MVP with claims/evidence/provenance", status: "Planned" },
      { title: "TensionLM matched softmax-vs-sigmoid benchmark receipts", status: "Planned" },
      { title: "Proof Ranker v5 / TS Reasoner integration", status: "Experimental" },
    ],
  },
  {
    title: "Later",
    items: [
      { title: "Public demo video", status: "Planned" },
      { title: "Interactive graph/tension visualizer", status: "Planned" },
      { title: "Better docs and install guides", status: "In progress" },
      { title: "Research statement / fellowship-ready package", status: "Planned" },
      { title: "Funded compute path", status: "Blocked" },
    ],
  },
];
