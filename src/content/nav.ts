export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/start-here", label: "Start Here" },
  { href: "/projects", label: "Current Work" },
  { href: "/lineage", label: "Lineage" },
  { href: "/proof-bank", label: "Proof Bank" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
];

export const quickLinks = [
  {
    label: "Current Work",
    href: "/projects",
    note: "The eight projects carrying the active research.",
  },
  {
    label: "Project Lineage",
    href: "/lineage",
    note: "The ideas, failures, and successors behind 52 repositories.",
  },
  {
    label: "Proof Bank",
    href: "/proof-bank",
    note: "Experiments, receipts, negative results, and limitations.",
  },
  {
    label: "Start Here",
    href: "/start-here",
    note: "A plain-language map of the current architecture.",
  },
  {
    label: "GitHub",
    href: "https://github.com/BoggersTheFish",
    note: "The reduced source surface after the repository cleanup.",
    external: true,
  },
  {
    label: "Hugging Face",
    href: "https://huggingface.co/BoggersTheFish",
    note: "Model artifacts, checkpoints, and research receipts.",
    external: true,
  },
];
