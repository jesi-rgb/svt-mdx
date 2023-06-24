import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
    quotes: true,
    backticks: true,
    ellipses: true
  },

  layout: {
    blog: './src/routes/blog/layout.svelte'
  },

  remarkPlugins: [],
  rehypePlugins: []
});

export default config;
