import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';

const files = globSync('src/**/*.{ts,tsx}');
let updated = 0;

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  const newContent = content.replace(/(\.jsx|\.js)(['"])/g, '$2');
  if (content !== newContent) {
    writeFileSync(file, newContent, 'utf8');
    updated++;
    console.log(`Updated ${file}`);
  }
}
console.log(`Total files updated: ${updated}`);
