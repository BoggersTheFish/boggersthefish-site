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
  { href: "/about", label: "About" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contact", label: "Contact" },
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
    note: "Source repositories, experiments, and project code.",
    external: true,
  },
  {
    label: "Hugging Face",
    href: "https://huggingface.co/BoggersTheFish",
    note: "Model artifacts, checkpoints, and research receipts.",
    external: true,
  },
  {
    label: "Canonical Home",
    href: "https://www.boggersthefish.com/",
    note: "The public entrypoint for the research archive.",
    external: true,
  },
  {
    label: "Docs",
    href: "/docs",
    note: "Guides, references, and technical notes.",
  },
];
