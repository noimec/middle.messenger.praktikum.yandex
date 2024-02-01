import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from "vite-plugin-handlebars";
import fs from 'fs';

function getHtmlEntries () {
    const folderPath = resolve(__dirname, 'src');
    const htmlFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.html'));
    const entries = {};
  
    htmlFiles.forEach(file => {
      const fileName = file.replace('.html', '');
      entries[fileName] = resolve(folderPath, file);
    });
  
    return entries;
}

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        ...getHtmlEntries()
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
        username: 'Test12'
      }
    })
  ]
});
