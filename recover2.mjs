import fs from 'fs';

const logPath = 'C:/Users/Admin/.gemini/antigravity/brain/2880e76b-8797-4900-9f2a-5a7678c7fcad/.system_generated/logs/overview.txt';
const log = fs.readFileSync(logPath, 'utf8');

const lines = log.split('\n');
let slide1JsxContent = '';
let slide1CssContent = '';

for (let i = lines.length - 1; i >= 0; i--) {
  if (!lines[i].trim()) continue;
  try {
    const obj = JSON.parse(lines[i]);
    if (obj.tool_calls) {
      for (const call of obj.tool_calls) {
        if (call.name === 'write_to_file' || call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') {
          const args = call.args;
          if (args && typeof args === 'object') {
            const target = args.TargetFile || args.TargetFile;
            if (target && target.includes('Slide1.jsx')) {
                console.log("Found Slide1.jsx action at step " + obj.step_index);
            }
          }
        }
      }
    }
  } catch (e) {
    // console.log("error on line " + i);
  }
}
