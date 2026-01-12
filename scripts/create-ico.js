/**
 * Script to create a proper ICO file from PNG favicons
 * Requires: npm install --save-dev to-ico
 */

const fs = require('fs');
const path = require('path');
const toIco = require('to-ico');

const outputDir = path.join(process.cwd(), 'public');

async function createIcoFile() {
    try {
        const pngFiles = [
            path.join(outputDir, 'favicon-16x16.png'),
            path.join(outputDir, 'favicon-32x32.png'),
        ];

        // Check if PNG files exist
        for (const file of pngFiles) {
            if (!fs.existsSync(file)) {
                console.error(`Error: ${file} not found. Please run scripts/generate-favicons.js first.`);
                process.exit(1);
            }
        }

        console.log('Creating favicon.ico from PNG files...');
        
        // Read PNG files as buffers
        const pngBuffers = pngFiles.map(file => fs.readFileSync(file));
        
        // Convert to ICO
        const ico = await toIco(pngBuffers);
        fs.writeFileSync(path.join(outputDir, 'favicon.ico'), ico);

        console.log('✅ Created favicon.ico successfully!');

    } catch (error) {
        if (error.code === 'MODULE_NOT_FOUND') {
            console.error('Error: png-to-ico package is required.');
            console.error('Please install it by running: npm install --save-dev png-to-ico');
        } else {
            console.error('Error creating ICO file:', error);
        }
        process.exit(1);
    }
}

createIcoFile();
