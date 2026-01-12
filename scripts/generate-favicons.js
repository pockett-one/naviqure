/**
 * Script to generate favicon files (ICO) from the main logo PNG
 * This generates both desktop (favicon.ico) and mobile (apple-icon.png) icons
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available, if not, provide instructions
let sharp;
try {
    sharp = require('sharp');
} catch (e) {
    console.error('Error: sharp package is required to generate favicons.');
    console.error('Please install it by running: npm install --save-dev sharp');
    console.error('\nAlternatively, you can use an online tool to convert:');
    console.error('1. Go to https://convertio.co/png-ico/ or https://www.icoconverter.com/');
    console.error('2. Upload public/assets/logo/main-logo-256px.png');
    console.error('3. Download the ICO file and save it as public/favicon.ico');
    console.error('4. For Apple icons, resize the PNG to 180x180 and save as public/apple-icon.png');
    process.exit(1);
}

const sourceLogo = path.join(process.cwd(), 'public', 'assets', 'logo', 'main-logo-256px.png');
const outputDir = path.join(process.cwd(), 'public');

// Check if source file exists
if (!fs.existsSync(sourceLogo)) {
    console.error(`Error: Source logo not found at ${sourceLogo}`);
    process.exit(1);
}

async function generateFavicons() {
    try {
        console.log('Generating favicon files from main-logo-256px.png...\n');

        // First, ensure the source image has transparency
        // Remove any white/light background and ensure alpha channel
        const processedLogo = await sharp(sourceLogo)
            .ensureAlpha() // Ensure alpha channel exists
            .toBuffer();

        // Generate favicon-16x16.png with full transparency (32-bit RGBA)
        await sharp(processedLogo)
            .resize(16, 16, { 
                fit: 'contain', 
                background: { r: 0, g: 0, b: 0, alpha: 0 } // Fully transparent background
            })
            .png({ 
                compressionLevel: 9,
                adaptiveFiltering: true,
                force: true
                // Don't use palette mode - we need 32-bit RGBA for full transparency
            })
            .toFile(path.join(outputDir, 'favicon-16x16.png'));

        // Generate favicon-32x32.png with full transparency (32-bit RGBA)
        await sharp(processedLogo)
            .resize(32, 32, { 
                fit: 'contain', 
                background: { r: 0, g: 0, b: 0, alpha: 0 } // Fully transparent background
            })
            .png({ 
                compressionLevel: 9,
                adaptiveFiltering: true,
                force: true
                // Don't use palette mode - we need 32-bit RGBA for full transparency
            })
            .toFile(path.join(outputDir, 'favicon-32x32.png'));

        // Generate apple-icon.png (180x180 for iOS) with full transparency
        await sharp(processedLogo)
            .resize(180, 180, { 
                fit: 'contain', 
                background: { r: 0, g: 0, b: 0, alpha: 0 } 
            })
            .png({ 
                compressionLevel: 9,
                adaptiveFiltering: true,
                force: true
            })
            .toFile(path.join(outputDir, 'apple-icon.png'));

        // Generate android-chrome icons for PWA with full transparency
        await sharp(processedLogo)
            .resize(192, 192, { 
                fit: 'contain', 
                background: { r: 0, g: 0, b: 0, alpha: 0 } 
            })
            .png({ 
                compressionLevel: 9,
                adaptiveFiltering: true,
                force: true
            })
            .toFile(path.join(outputDir, 'android-chrome-192x192.png'));

        await sharp(processedLogo)
            .resize(512, 512, { 
                fit: 'contain', 
                background: { r: 0, g: 0, b: 0, alpha: 0 } 
            })
            .png({ 
                compressionLevel: 9,
                adaptiveFiltering: true,
                force: true
            })
            .toFile(path.join(outputDir, 'android-chrome-512x512.png'));

        console.log('✅ Generated favicon files:');
        console.log('   - favicon-16x16.png');
        console.log('   - favicon-32x32.png');
        console.log('   - apple-icon.png');
        console.log('   - android-chrome-192x192.png');
        console.log('   - android-chrome-512x512.png');
        console.log('\n⚠️  Note: To create a proper .ico file, you can:');
        console.log('   1. Use an online converter: https://convertio.co/png-ico/');
        console.log('   2. Upload favicon-32x32.png and download as favicon.ico');
        console.log('   3. Or install png-to-ico: npm install --save-dev png-to-ico');
        console.log('   4. Then run: node scripts/create-ico.js');

    } catch (error) {
        console.error('Error generating favicons:', error);
        process.exit(1);
    }
}

generateFavicons();
