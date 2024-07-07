module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      colors: {
        'brand': {
          honeydew: '#EEFCF0',
          lavenderblush: '#E8D9E2',
          platinum: '#DEE5E5',
          darkcyan: '#0D9488',
          darkgreen: '#082D0F',
          magentahaze: '#8E5572'
        }
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
