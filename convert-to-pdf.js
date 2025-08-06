const fs = require('fs');
const path = require('path');

// Improved markdown to HTML converter
function markdownToHtml(markdown) {
    let html = markdown;
    
    // First, let's clean up the content and structure it properly
    let lines = html.split('\n');
    let processedLines = [];
    let inList = false;
    let inTable = false;
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        
        // Skip empty lines
        if (!line) {
            processedLines.push('');
            continue;
        }
        
        // Handle headers with proper structure
        if (line.startsWith('### ')) {
            processedLines.push(`<h3>${line.substring(4)}</h3>`);
        } else if (line.startsWith('## ')) {
            processedLines.push(`<h2>${line.substring(3)}</h2>`);
        } else if (line.startsWith('# ')) {
            processedLines.push(`<h1>${line.substring(2)}</h1>`);
        }
        // Handle special sections that should be chapters
        else if (line === 'DANKWOORD' || line === 'EEN WOORD AAN DE LEZER' || 
                 line === 'WAAROM IK DIT BOEK MOEST SCHRIJVEN' || 
                 line === 'INTRODUCTIE: DE DIGITALE DANS' ||
                 line === 'INHOUDSOPGAVE' || line === 'VOORWOORD' || line === 'PROLOOG' ||
                 line === 'DEEL I: DE ONTMOETING' || line === 'DEEL II: DE OPENBARING' ||
                 line === 'DEEL III: DE ARCHITECTUUR VAN DE SYMBIOSE' ||
                 line === 'EPILOOG' || line === 'APPENDIX' || line === 'BEDENKINGEN') {
            processedLines.push(`<h1>${line}</h1>`);
        }
        // Handle chapter headers
        else if (line.match(/^HOOFDSTUK \d+/)) {
            processedLines.push(`<h1>${line}</h1>`);
        }
        // Handle bold text
        else if (line.includes('**')) {
            line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            processedLines.push(`<p>${line}</p>`);
        }
        // Handle italic text
        else if (line.includes('*') && !line.startsWith('*')) {
            line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
            processedLines.push(`<p>${line}</p>`);
        }
        // Handle horizontal rules
        else if (line === '---') {
            processedLines.push('<hr>');
        }
        // Handle lists
        else if (line.startsWith('- ') || line.startsWith('* ')) {
            if (!inList) {
                processedLines.push('<ul>');
                inList = true;
            }
            processedLines.push(`<li>${line.substring(2)}</li>`);
        }
        // Handle numbered lists
        else if (line.match(/^\d+\./)) {
            if (!inList) {
                processedLines.push('<ol>');
                inList = true;
            }
            processedLines.push(`<li>${line.replace(/^\d+\.\s*/, '')}</li>`);
        }
        // End lists
        else if (inList && line && !line.startsWith('- ') && !line.startsWith('* ') && !line.match(/^\d+\./)) {
            processedLines.push('</ul>');
            inList = false;
            processedLines.push(`<p>${line}</p>`);
        }
        // Handle tables
        else if (line.includes('|')) {
            if (!inTable) {
                processedLines.push('<table>');
                inTable = true;
            }
            let cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
            if (cells.length > 0) {
                let rowHtml = '<tr>';
                for (let cell of cells) {
                    rowHtml += `<td>${cell}</td>`;
                }
                rowHtml += '</tr>';
                processedLines.push(rowHtml);
            }
        }
        // End tables
        else if (inTable && line && !line.includes('|')) {
            processedLines.push('</table>');
            inTable = false;
            processedLines.push(`<p>${line}</p>`);
        }
        // Handle blockquotes
        else if (line.startsWith('> ')) {
            processedLines.push(`<blockquote>${line.substring(2)}</blockquote>`);
        }
        // Handle dialogue sections
        else if (line.includes('**De ') && line.includes(':**')) {
            processedLines.push(`<div class="dialogue"><p><span class="speaker">${line}</span></p></div>`);
        }
        // Regular paragraphs
        else {
            processedLines.push(`<p>${line}</p>`);
        }
    }
    
    // Close any open lists or tables
    if (inList) {
        processedLines.push('</ul>');
    }
    if (inTable) {
        processedLines.push('</table>');
    }
    
    return processedLines.join('\n');
}

// Create proper chapter structure
function createChapterStructure(html) {
    // Split into chapters
    let chapters = html.split('<h1>');
    let structuredHtml = '';
    
    for (let i = 1; i < chapters.length; i++) {
        let chapter = chapters[i];
        let lines = chapter.split('\n');
        let title = lines[0].replace('</h1>', '');
        let content = lines.slice(1).join('\n');
        
        // Skip certain sections that shouldn't be chapters
        if (title === 'INHOUDSOPGAVE' || title === 'BUITENAARDS INTELLIGENT, BUITENAARDS BEWUST?') {
            continue;
        }
        
        structuredHtml += `<div class="chapter">\n`;
        structuredHtml += `<h1>${title}</h1>\n`;
        structuredHtml += content;
        structuredHtml += `\n</div>\n`;
    }
    
    return structuredHtml;
}

// Convert the markdown file
function convertBook() {
    try {
        // Read the markdown file
        const markdownContent = fs.readFileSync('nl/draft_lumin_2025.md', 'utf8');
        
        // Convert to HTML
        const htmlContent = markdownToHtml(markdownContent);
        
        // Create proper chapter structure
        const structuredContent = createChapterStructure(htmlContent);
        
        // Read the template
        let template = fs.readFileSync('book-template.html', 'utf8');
        
        // Insert the content
        template = template.replace('<!-- The content from draft_lumin_2025.md will be converted and inserted here -->', structuredContent);
        
        // Write the complete HTML file
        fs.writeFileSync('book-complete.html', template);
        
        console.log('✅ HTML file created: book-complete.html');
        console.log('📖 You can now convert this to PDF using:');
        console.log('   - Browser: Open book-complete.html and print to PDF');
        console.log('   - Command line: wkhtmltopdf book-complete.html book.pdf');
        console.log('   - Online: Upload to a PDF converter service');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// Run the conversion
convertBook(); 