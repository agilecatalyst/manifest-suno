const fs = require('fs');
const puppeteer = require('puppeteer');

// Simple markdown to HTML converter
function markdownToHtml(markdown) {
    let html = markdown;
    
    // Basic markdown conversions
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>');
    html = html.replace(/\n\n/g, '</p><p>');
    
    // Wrap in paragraphs
    html = '<p>' + html + '</p>';
    html = html.replace(/<p><\/p>/g, '');
    
    return html;
}

// Create a simple HTML template
function createHtmlTemplate(content, title = 'Document') {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <style>
        body {
            font-family: 'Crimson Text', Georgia, serif;
            line-height: 1.6;
            margin: 2cm;
            font-size: 12pt;
        }
        h1, h2, h3 {
            font-family: 'Inter', Arial, sans-serif;
            color: #2c3e50;
        }
        h1 { font-size: 24pt; margin-top: 2em; }
        h2 { font-size: 18pt; margin-top: 1.5em; }
        h3 { font-size: 14pt; margin-top: 1em; }
        p { margin-bottom: 1em; }
        li { margin-bottom: 0.5em; }
        @page {
            size: A5;
            margin: 2cm;
        }
    </style>
</head>
<body>
    ${content}
</body>
</html>`;
}

async function convertMarkdownToPdf(inputFile, outputFile) {
    try {
        // Read markdown file
        const markdown = fs.readFileSync(inputFile, 'utf8');
        
        // Convert to HTML
        const htmlContent = markdownToHtml(markdown);
        
        // Create full HTML document
        const title = inputFile.replace('.md', '').split('/').pop();
        const html = createHtmlTemplate(htmlContent, title);
        
        // Write temporary HTML file
        const tempHtmlFile = inputFile.replace('.md', '_temp.html');
        fs.writeFileSync(tempHtmlFile, html);
        
        // Launch browser and convert to PDF
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Load the HTML file
        await page.goto(`file://${process.cwd()}/${tempHtmlFile}`);
        
        // Generate PDF
        await page.pdf({
            path: outputFile,
            format: 'A5',
            printBackground: true,
            margin: {
                top: '2cm',
                right: '1.5cm',
                bottom: '2cm',
                left: '1.5cm'
            }
        });
        
        await browser.close();
        
        // Clean up temporary file
        fs.unlinkSync(tempHtmlFile);
        
        console.log(`✅ PDF created: ${outputFile}`);
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// Usage
const inputFile = process.argv[2] || 'nl/draft_lumin_2025.md';
const outputFile = process.argv[3] || 'output.pdf';

convertMarkdownToPdf(inputFile, outputFile); 