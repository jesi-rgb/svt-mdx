const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'Work Sans', 'system-ui'],
        mono: ['monospace'],
        title: ['Bueno']
      }
    }
  },

  plugins: [require('daisyui')],

  daisyui: {
    logs: false,
    themes: [
      'autumn',
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#EEEDDD',
          'primary-focus': '#999999',
          'primary-content': '#2A303C',
          accent: '#EEEDDD',
          'accent-focus': '#999999',
          'accent-content': '#2A303C',
          secondary: '#AAA',
          'secondary-content': '#2A303C',
          'base-content': '#CCC',
          'base-100': '#2A303C'
        }
      }
    ]
  }
};

module.exports = config;
