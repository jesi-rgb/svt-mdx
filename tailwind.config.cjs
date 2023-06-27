const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'Hind', 'system-ui'],
        mono: ['Tabular', 'monospace']
      }
    }
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: ['autumn']
  }
};

module.exports = config;
