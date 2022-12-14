/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1500a1",
        borderFooter: "#00dcc9",
        textColor: "#6f6366"
      },
      minWidth: {
        '14r': '14rem',
      },
      backgroundImage: {
        'back-img': "url('./src/assets/content/bg-content.jpg')",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
}
