import fs from 'fs';

const logPath = 'C:/Users/Admin/.gemini/antigravity/brain/2880e76b-8797-4900-9f2a-5a7678c7fcad/.system_generated/logs/overview.txt';
const log = fs.readFileSync(logPath, 'utf8');

const lines = log.split('\n');
const files = {};

function unescapeContent(str) {
  if (typeof str === 'string' && str.startsWith('"') && str.endsWith('"')) {
     try { 
        return JSON.parse(str); 
     } catch (e) {
        console.error("Failed to parse", e.message);
        try {
           return JSON.parse('"' + str.slice(1, -1).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"');
        } catch (e2) {}
     }
  }
  return str;
}

for (let i = 0; i < lines.length; i++) {
  if (!lines[i].trim()) continue;
  try {
    const obj = JSON.parse(lines[i]);
    if (obj.tool_calls) {
      for (const call of obj.tool_calls) {
        if (call.name === 'write_to_file') {
          const args = call.args;
          const target = (args.TargetFile || '').replace(/"/g, '');
          let content = unescapeContent(args.CodeContent);
          if (target && target.includes('Slide1.')) {
            files[target] = content;
          }
        }
        if (call.name === 'replace_file_content') {
          const args = call.args;
          const target = (args.TargetFile || '').replace(/"/g, '');
          let tc = unescapeContent(args.TargetContent);
          let rc = unescapeContent(args.ReplacementContent);
          if (target && target.includes('Slide1.') && files[target]) {
             files[target] = files[target].replace(tc, rc);
          }
        }
        if (call.name === 'multi_replace_file_content') {
          const args = call.args;
          const target = (args.TargetFile || '').replace(/"/g, '');
          if (target && target.includes('Slide1.') && files[target]) {
             for (const chunk of args.ReplacementChunks) {
                let tc = unescapeContent(chunk.TargetContent);
                let rc = unescapeContent(chunk.ReplacementContent);
                files[target] = files[target].replace(tc, rc);
             }
          }
        }
      }
    }
  } catch (e) {
  }
}

for (const [path, content] of Object.entries(files)) {
  fs.writeFileSync('D:/MINDX-WEB94/UEH/CLM_Presentation/src/components/RECOVER_' + path.split('\\').pop().split('/').pop(), content);
}
console.log('Reconstructed files!');
