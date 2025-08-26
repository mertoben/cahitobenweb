/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Accent palette (gold on dark theme)
        'accent': '#EAB308',         // gold
        'accent-dark': '#CA8A04',    // darker gold
        'accent-fg': '#111111'       // readable foreground on gold
      },
      container: {
        center: true,
        padding: "1rem"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
}
