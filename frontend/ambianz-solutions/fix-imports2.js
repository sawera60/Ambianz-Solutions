import fs from 'fs';
import path from 'path';

const fixes = [
  { match: /from "\.\.\/\.\.\/\.\.\/images\/([^'"]*)';/g, replace: 'from "../../../images/$1";' },
  { match: /from "\.\.\/\.\.\/\.\.\/context\/([^'"]*)';/g, replace: 'from "../../../context/$1";' },
  { match: /from "\.\.\/\.\.\/\.\.\/components\/([^'"]*)';/g, replace: 'from "../../../components/$1";' },
  { match: /from "\.\.\/\.\.\/components\/GetQuote\/([^'"]*)';/g, replace: 'from "../../components/GetQuote/$1";' }
];

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

function runFixes(dir) {
  walk(dir, (filePath) => {
    if (filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let original = content;
      fixes.forEach(fix => {
        content = content.replace(fix.match, fix.replace);
      });
      if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed quotes: ${filePath}`);
      }
    }
  });
}

const pagesDir = path.join(process.cwd(), 'src', 'pages');
runFixes(pagesDir);
console.log("Quotes fixed.");
