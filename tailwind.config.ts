import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Theme colours live in globals.css. fg and bg are RGB channels so opacity
      // modifiers like text-fg/70 work in both themes.
      colors: {
        fg: "rgb(var(--fg) / <alpha-value>)",
        bg: "rgb(var(--bg) / <alpha-value>)",
        raised: "rgb(var(--raised) / <alpha-value>)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--line)",
        surface: "var(--surface)",
        live: "var(--live)",
      },
      boxShadow: {
        dock: "var(--dock-shadow)",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "ui-sans-serif", "system-ui", "sans-serif"],
        // Terminal text. Coding ligatures are off so sequences like "www" or "->" stay literal.
        mono: [
          ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
          { fontFeatureSettings: '"calt" 0, "liga" 0' },
        ],
        // The SHIVA wordmark.
        supply: ["var(--font-supply)", "ui-monospace", "SFMono-Regular", "monospace"],
        display: ["var(--font-geist-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
