module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        "feldgrau": {
          DEFAULT: "#4d5d53",
          600: "#3E4A42",
          700: "#323B35",
          800: "#282F2A",
        },
        "aqua": "#d5e6d6"
      },
      fontFamily: {
        'sans': ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        "serif": ["Lora", "ui-serif", "Georgia"],
      },
      typography:({ theme }) => ({
        looma: {
          css: {
            '--tw-prose-body': theme('colors.feldgrau[700]'),
            '--tw-prose-headings': theme('colors.feldgrau[700]'),
            '--tw-prose-lead': theme('colors.feldgrau[700]'),
            '--tw-prose-links': theme('colors.feldgrau[700]'),
            '--tw-prose-bold': theme('colors.feldgrau[700]'),
            '--tw-prose-counters': theme('colors.feldgrau[700]'),
            '--tw-prose-bullets': theme('colors.feldgrau[700]'),
            '--tw-prose-hr': theme('colors.feldgrau[700]'),
            '--tw-prose-quotes': theme('colors.feldgrau[700]'),
            '--tw-prose-quote-borders': theme('colors.feldgrau[700]'),
            '--tw-prose-captions': theme('colors.feldgrau[700]'),
            '--tw-prose-code': theme('colors.feldgrau[700]'),
            '--tw-prose-pre-code': theme('colors.feldgrau[700]'),
            '--tw-prose-pre-bg': theme('colors.feldgrau[700]'),
            '--tw-prose-th-borders': theme('colors.feldgrau[700]'),
            '--tw-prose-td-borders': theme('colors.feldgrau[700]'),
            '--tw-prose-invert-body': theme('colors.feldgrau[700]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.feldgrau[700]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.feldgrau[700]'),
            '--tw-prose-invert-bullets': theme('colors.feldgrau[700]'),
            '--tw-prose-invert-hr': theme('colors.feldgrau[700]'),
            '--tw-prose-invert-quotes': theme('colors.feldgrau[700]'),
            '--tw-prose-invert-quote-borders': theme('colors.feldgrau[700]'),
            '--tw-prose-invert-captions': theme('colors.feldgrau[700]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.feldgrau[700]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.feldgrau[700]'),
            '--tw-prose-invert-td-borders': theme('colors.feldgrau[700]'),
          },
        }
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"),require("@tailwindcss/forms"),],
};
