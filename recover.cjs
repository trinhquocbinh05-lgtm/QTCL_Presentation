const fs = require('fs');
const log = fs.readFileSync('C:/Users/Admin/.gemini/antigravity/brain/2880e76b-8797-4900-9f2a-5a7678c7fcad/.system_generated/logs/overview.txt', 'utf8');

const lines = log.split('\n');
let slide1JsxContent = '';
let slide1CssContent = '';

for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('write_to_file') && lines[i].includes('Slide1.jsx')) {
    const match = lines[i].match(/"CodeContent":"(.*?)","Description"/);
    if (match && !slide1JsxContent) {
      slide1JsxContent = match[1];
    }
  }
  if (lines[i].includes('write_to_file') && lines[i].includes('Slide1.css')) {
    const match = lines[i].match(/"CodeContent":"(.*?)","Description"/);
    if (match && !slide1CssContent) {
      slide1CssContent = match[1];
    }
  }
}

if (slide1JsxContent) fs.writeFileSync('d:/MINDX-WEB94/UEH/CLM_Presentation/src/components/Slide1_recovered.jsx', JSON.parse('"' + slide1JsxContent + '"'));
if (slide1CssContent) fs.writeFileSync('d:/MINDX-WEB94/UEH/CLM_Presentation/src/components/Slide1_recovered.css', JSON.parse('"' + slide1CssContent + '"'));
console.log('Recovered!');
