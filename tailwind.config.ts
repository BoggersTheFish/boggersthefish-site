import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#182312",
          dark: "#10170d",
          mid: "#22301a",
        },
        moss: "#22301a",
        parchment: {
          DEFAULT: "#d8c28d",
          light: "#f3e7c5",
        },
        paper: "#d8c28d",
        "paper-dark": "#b99d62",
        ink: "#10170d",
        gold: "#c9a45c",
        "gold-dim": "#8c6f38",
        brown: "#5a3d22",
        cream: "#f3e7c5",
        sienna: "#9a4f32",
        "ts-purple": {
          DEFAULT: "#c9a45c",
          light: "#f3e7c5",
          dark: "#22301a",
          dim: "#8c6f38",
          faint: "rgba(201, 164, 92, 0.1)",
        },
        border: "rgba(201, 164, 92, 0.24)",
        background: "#10170d",
        foreground: "#f3e7c5",
        muted: "#182312",
        "muted-foreground": "rgba(243, 231, 197, 0.75)",
        card: "#182312",
        "card-foreground": "#f3e7c5",
        accent: "#c9a45c",
        "accent-foreground": "#10170d",
        destructive: "#9a4f32",
        ring: "#c9a45c",
        input: "#22301a",
        popover: "#182312",
        "popover-foreground": "#f3e7c5",
        primary: "#c9a45c",
        "primary-foreground": "#10170d",
        secondary: "#22301a",
        "secondary-foreground": "#f3e7c5",
      },
      backgroundImage: {
        "grid-purple":
          "linear-gradient(rgba(184, 148, 77, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 225, 184, 0.035) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-ts":
          "linear-gradient(135deg, #b8944d 0%, #4f6f39 52%, #102015 100%)",
        "gradient-ts-text":
          "linear-gradient(135deg, #efe1b8 0%, #b8944d 48%, #4f6f39 100%)",
        "gradient-fade-up":
          "linear-gradient(to top, #102015 0%, transparent 100%)",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
      fontFamily: {
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "Fira Code",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "EB Garamond", "Cormorant Garamond", "Georgia", "serif"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        propagate: "propagate 1.5s ease-out forwards",
        "wave-flow": "wave-flow 4s ease-in-out infinite",
        "node-float": "node-float 6s ease-in-out infinite",
        "grid-pulse": "grid-pulse 5s ease-in-out infinite",
        "text-glow": "text-glow 2s ease-in-out infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.4s ease-out forwards",
        "spin-slow": "spin 8s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "bounce-gentle": "bounce-gentle 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px #b8944d, 0 0 10px rgba(184, 148, 77, 0.55), 0 0 20px rgba(79, 111, 57, 0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 15px rgba(184, 148, 77, 0.9), 0 0 30px rgba(79, 111, 57, 0.7), 0 0 60px rgba(184, 148, 77, 0.35)",
          },
        },
        propagate: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
        "wave-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "node-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(0.5deg)" },
          "66%": { transform: "translateY(5px) rotate(-0.5deg)" },
        },
        "grid-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "text-glow": {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(184, 148, 77, 0.45)",
          },
          "50%": {
            textShadow:
              "0 0 20px rgba(239, 225, 184, 0.55), 0 0 40px rgba(79, 111, 57, 0.35)",
          },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(184, 148, 77, 0.3)" },
          "50%": { borderColor: "rgba(184, 148, 77, 0.8)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      boxShadow: {
        ts: "0 0 10px rgba(184, 148, 77, 0.65), 0 0 20px rgba(79, 111, 57, 0.36)",
        "ts-lg":
          "0 0 20px rgba(184, 148, 77, 0.8), 0 0 40px rgba(79, 111, 57, 0.45), 0 0 80px rgba(184, 148, 77, 0.16)",
        "ts-inner": "inset 0 0 20px rgba(184, 148, 77, 0.18)",
        "ts-card":
          "0 0 0 1px rgba(184, 148, 77, 0.18), 0 4px 20px rgba(3, 10, 6, 0.55)",
        "ts-card-hover":
          "0 0 0 1px rgba(184, 148, 77, 0.4), 0 8px 40px rgba(3, 10, 6, 0.65), 0 0 30px rgba(79, 111, 57, 0.18)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
