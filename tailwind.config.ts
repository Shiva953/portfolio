import type { Config } from "tailwindcss";

export default {
  // Hover styles apply only on devices that can hover, so they never stick after a tap.
  future: { hoverOnlyWhenSupported: true },
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
        // The three type roles are set in globals.css, so each font variant changes one place.
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"],
        // Coding ligatures are off so sequences like "www" or "->" stay literal.
        mono: [["var(--font-meta)"], { fontFeatureSettings: '"calt" 0, "liga" 0' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
