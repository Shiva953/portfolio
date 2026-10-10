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
        mono: ["var(--font-supply)", "ui-monospace", "SFMono-Regular", "monospace"],
        display: ["var(--font-grotesk)", "var(--font-montreal)", "ui-sans-serif", "sans-serif"],
        roboto: ["var(--font-roboto-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        blend: [
          "var(--font-montreal-spacing)",
          "var(--font-roboto-mono)",
          "var(--font-montreal)",
          "ui-monospace",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
