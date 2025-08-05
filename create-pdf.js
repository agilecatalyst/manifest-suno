const puppeteer = require('puppeteer');
const fs = require('fs');

async function createPDF() {
    try {
        console.log('🚀 Starting PDF conversion...');
        
        // Check if HTML file exists
        if (!fs.existsSync('book-complete.html')) {
            console.log('❌ book-complete.html not found. Running conversion first...');
            require('./convert-to-pdf.js');
        }
        
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // Load the HTML file
        const htmlPath = `file://${process.cwd()}/book-complete.html`;
        console.log('📄 Loading HTML file...');
        await page.goto(htmlPath, { waitUntil: 'networkidle0' });
        
        // Set viewport for A5
        await page.setViewport({
            width: 148, // A5 width in mm
            height: 210, // A5 height in mm
            deviceScaleFactor: 2 // For better quality
        });
        
        console.log('🖨️  Generating PDF...');
        
        // Generate PDF
        await page.pdf({
            path: 'book.pdf',
            format: 'A5',
            printBackground: true,
            margin: {
                top: '2cm',
                right: '1.5cm',
                bottom: '2cm',
                left: '1.5cm'
            },
            displayHeaderFooter: false,
            preferCSSPageSize: true
        });
        
        await browser.close();
        
        console.log('✅ PDF created successfully: book.pdf');
        console.log('📖 File size:', fs.statSync('book.pdf').size, 'bytes');
        
    } catch (error) {
        console.error('❌ Error creating PDF:', error.message);
        console.log('💡 Try the browser method instead:');
        console.log('   1. Open book-complete.html in your browser');
        console.log('   2. Press Cmd+P (Mac) or Ctrl+P (Windows)');
        console.log('   3. Save as PDF');
    }
}

// Check if Puppeteer is installed
try {
    require('puppeteer');
    createPDF();
} catch (error) {
    console.log('📦 Puppeteer not installed. Installing...');
    const { execSync } = require('child_process');
    
    try {
        execSync('npm install puppeteer', { stdio: 'inherit' });
        console.log('✅ Puppeteer installed successfully!');
        createPDF();
    } catch (installError) {
        console.error('❌ Failed to install Puppeteer:', installError.message);
        console.log('💡 Please use the browser method instead:');
        console.log('   1. Open book-complete.html in your browser');
        console.log('   2. Press Cmd+P (Mac) or Ctrl+P (Windows)');
        console.log('   3. Save as PDF');
    }
} 