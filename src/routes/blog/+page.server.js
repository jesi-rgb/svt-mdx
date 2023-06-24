import fs from 'fs';
export function load({ params }) {
  const path = process.cwd() + '/src/routes/blog/';
  let fileNames = fs.readdirSync(path).filter((e) => !e.endsWith('.svelte') && !e.endsWith('.js')); //remove actual files

  return {
    posts: fileNames
  };
}
