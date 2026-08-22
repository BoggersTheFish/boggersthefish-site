export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Open Source" },
  { href: "/enthusia", label: "Enthusia SMP" },
  { href: "/about", label: "About" },
];

export const quickLinks = [
  {
    label: "PRIME v1.0.0",
    href: "https://doi.org/10.5281/zenodo.22058441",
    note: "The current verifier-governed architecture and sealed release.",
    external: true,
  },
  {
    label: "Publications",
    href: "/publications",
    note: "Permanent Zenodo records, versions, DOIs, and artifact boundaries.",
  },
  {
    label: "Open Source",
    href: "/projects",
    note: "Current repositories plus the preserved research lineage.",
  },
  {
    label: "Enthusia SMP",
    href: "/enthusia",
    note: "Minecraft server development, plugins, and community systems.",
  },
  {
    label: "GitHub",
    href: "https://github.com/BoggersTheFish",
    note: "Public research software and server-development work.",
    external: true,
  },
  {
    label: "Hugging Face",
    href: "https://huggingface.co/BoggersTheFish",
    note: "Earlier model artifacts, checkpoints, and research receipts.",
    external: true,
  },
];
