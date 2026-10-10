import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--line)",
        surface: "var(--surface)",
        live: "var(--live)",
      },
      fontFamily: {
        sans: ["var(--font-montreal)", "ui-sans-serif", "system-ui", "sans-serif"],
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
