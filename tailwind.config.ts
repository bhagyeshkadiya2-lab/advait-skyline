import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deepBrown: '#6B3A1F',   // darkest bg, footer, overlays
          primaryBrown: '#7B4A2D', // navbar, section headers, primary CTAs
          copper: '#C4843A',       // accent lines, hover states, icon fills
          gold: '#C9973A',         // badge highlights, "39+ amenities" callouts, star elements
          cream: '#F5EFE6',        // light section backgrounds, cards
          charcoal: '#1C110A',     // body text on light backgrounds
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
