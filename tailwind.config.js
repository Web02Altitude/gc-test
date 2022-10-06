module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    }),
    require('@tailwindcss/aspect-ratio'),
  ],
}
