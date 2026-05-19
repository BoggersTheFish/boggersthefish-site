export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/start-here", label: "Start Here" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/proof-bank", label: "Proof Bank" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support / BGC" },
];

export const quickLinks = [
  {
    label: "Start Here",
    href: "/start-here",
    note: "Begin with the framework map.",
  },
  {
    label: "Proof Bank",
    href: "/proof-bank",
    note: "Experiments, receipts, and limitations.",
  },
  {
    label: "GitHub",
    href: "https://github.com/BoggersTheFish",
    note: "TODO: replace with the final organization/project index if needed.",
    external: true,
  },
  {
    label: "Hugging Face",
    href: "https://huggingface.co/BoggersTheFish",
    note: "TODO: replace with the canonical model collection if needed.",
    external: true,
  },
  {
    label: "Docs",
    href: "/docs",
    note: "Guides, references, and technical notes.",
  },
];
