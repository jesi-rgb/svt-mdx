import fs from 'fs';
import path from 'path';

export function load({ params }) {
  const pathDir = path.join(process.cwd(), 'src/routes/blog');
  console.log(pathDir);

  let fileNames = fs
    .readdirSync(pathDir)
    .filter((e) => !e.endsWith('.svelte') && !e.endsWith('.js')); //remove actual files

  return {
    posts: fileNames
  };
}
