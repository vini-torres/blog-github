/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    colors: {
      blue: '#3294F8',
      'base-title': '#E7EDF4',
      'base-subtitle': '#C4D4E3',
      'base-text': '#AFC2D4',
      'base-span': '#7B96B2',
      'base-label': '#3A436B',
      'base-border': '#1C2F41',
      'base-post': '#112131',
      'base-profile': '#0B1B2B',
      'base-bg': '#071422',
      'base-input': '#040F1A',
    },
    fontFamily: {
      nunito: 'Nunito Sans',
    },
    screens: {
      small: '400px',
      xsm: '510px',
      sm: '650px',
      larger: '900px',
    },
  },
  plugins: [],
}
