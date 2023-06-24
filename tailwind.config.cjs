const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'Hind', 'system-ui'],
        mono: ['Tabular']
      }
    }
  },

  plugins: []
};

module.exports = config;
