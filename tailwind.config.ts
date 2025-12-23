import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        slate: "#94a3b8",
        "light-slate": "#e2e8f0",
        "lightest-slate": "#f8fafc",
        green: "#64ffda",
      },
    },
},
  plugins: [],
};
export default config;