import type { Config } from "tailwindcss";

const config: Config = {
     daisyui: {
          themes: ["light", "dark", "cupcake", "garden", "funky", "forest", "aqua", "lofi", "cyberpunk", "synthwave", "retro", "valentine", "black", "luxury", "dracula", "lemonade"],
     },
     content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
     theme: {},
     plugins: [require("daisyui")],
};
export default config;
