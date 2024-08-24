/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "lightorange": "#ffb84c",
        "lightgreen": "#86efac",
        "lightpurple": "#6f70c0",
        "purple": "#5a5ac3",
        "orange": "#f16767",
        "cyan": "#33bbc5",
        "dark": '#292d3e',
        "lessdark": "#25293a"
      }
    },
  },
  plugins: [],
}
