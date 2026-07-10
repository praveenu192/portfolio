import fs from 'fs';
import path from 'path';

const srcDir = './components';
const destDir = './src/components';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

for (const file of files) {
    if (file.endsWith('.jsx')) {
        let content = fs.readFileSync(path.join(srcDir, file), 'utf-8');
        
        // Replace React destructuring with import
        const reactDestructureRegex = /const\s+\{([^}]+)\}\s*=\s*React;/;
        const match = content.match(reactDestructureRegex);
        
        if (match) {
            content = content.replace(reactDestructureRegex, `import React, { ${match[1].trim()} } from 'react';`);
        } else {
            content = `import React from 'react';\n` + content;
        }

        // Add export default at the end
        const componentName = file.replace('.jsx', '');
        if (!content.includes(`export default ${componentName}`)) {
            content += `\nexport default ${componentName};\n`;
        }

        fs.writeFileSync(path.join(destDir, file), content);
        console.log(`Refactored and moved ${file}`);
    }
}
