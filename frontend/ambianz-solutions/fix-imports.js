import fs from 'fs';
import path from 'path';

// Fixes for files in src/pages/*/components/
const componentDirFixes = [
  { match: /from ['"]\.\.\/\.\.\/images\//g, replace: 'from "../../../images/' },
  { match: /from ['"]\.\.\/\.\.\/context\//g, replace: 'from "../../../context/' },
  { match: /from ['"]\.\.\/\.\.\/components\//g, replace: 'from "../../../components/' }
];

// Fixes for files in src/pages/*/
const pageDirFixes = [
  { match: /from ['"]\.\.\/images\//g, replace: 'from "../../images/' }, // these are actually correct if they were already ../../images
  { match: /from ['"]\.\.\/GetQuote\//g, replace: 'from "../../components/GetQuote/' }
];

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

function runFixes(dir, fixes) {
  walk(dir, (filePath) => {
    if (filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let original = content;
      fixes.forEach(fix => {
        content = content.replace(fix.match, fix.replace);
      });
      if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  });
}

const pagesDir = path.join(process.cwd(), 'src', 'pages');

const servicesComponents = path.join(pagesDir, 'Services', 'components');
const homeComponents = path.join(pagesDir, 'Home', 'components');
const servicesPage = path.join(pagesDir, 'Services');
const homePage = path.join(pagesDir, 'Home');

// Apply fixes to components
if (fs.existsSync(servicesComponents)) runFixes(servicesComponents, componentDirFixes);
if (fs.existsSync(homeComponents)) runFixes(homeComponents, componentDirFixes);

// Apply specific fixes to pages
runFixes(servicesPage, [
    { match: /from ['"]\.\.\/GetQuote\/GetQuote['"]/g, replace: 'from "../../components/GetQuote/GetQuote"' }
]);

console.log("Fixes applied. Run 'npm run build' to verify.");
