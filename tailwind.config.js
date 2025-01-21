/** @type {import('tailwindcss').Config} */

function generateHSLShades(h, s, lBase) {
  const shades = {};
  for (let i = 0; i <= 10; i++) {
    const lightness = lBase + (i - 10 / 2) * (100 / 10);
    shades[i * 100] = `hsl(${h}, ${s}%, ${Math.min(100, Math.max(0, lightness))}%)`;
  }
  return shades;
}


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        accent: "var(--color-accent)",
      }
    },
  },
  plugins: [],
}

