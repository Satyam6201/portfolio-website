import fs from 'fs';
import path from 'path';

const stylesDir = 'c:/Users/satya/OneDrive/Desktop/ReactJs/Portfolio/src/styles';

const files = fs.readdirSync(stylesDir).filter(f => f.endsWith('.css'));

const sectionClasses = [
  '.home', '.about', '.achievements', '.blog', '.certifications', '.contact', 
  '.education', '.funfacts', '.goal-section', '.hiring-container', '.hobbies', 
  '.projects', '.techstack', '.volunteer'
];

files.forEach(file => {
  const filePath = path.join(stylesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip background declarations from main section classes
  sectionClasses.forEach(cls => {
    // Regex to find the class block and remove its background rules
    // Match the class, open brace, then anything until close brace
    const blockRegex = new RegExp(`(${cls.replace('.', '\\.')}\\s*\\{[^}]*?\\})`, 'g');
    
    content = content.replace(blockRegex, (match) => {
      // Remove background and background-color lines inside the block
      let newBlock = match.replace(/^\s*background(-color)?\s*:.*?;[\r\n]*/gm, '');
      // Remove color: lines that force dark text, to allow inheritance of white text
      newBlock = newBlock.replace(/^\s*color\s*:\s*(#000|black|#333|#222).*?;[\r\n]*/gim, '');
      return newBlock;
    });
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Processed CSS files to remove individual section backgrounds.');
