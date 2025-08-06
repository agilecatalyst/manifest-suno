const fs = require('fs');
const path = require('path');

// Enhanced markdown to HTML converter for English version
function markdownToHtml(markdown) {
    let html = markdown;
    
    // Clean up and structure the content properly
    let lines = html.split('\n');
    let processedLines = [];
    let inList = false;
    let inTable = false;
    let inDialogue = false;
    
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
        else if (line === 'ACKNOWLEDGEMENTS' || line === 'A WORD TO THE READER' || 
                 line === 'WHY I HAD TO WRITE THIS BOOK' || 
                 line === 'INTRODUCTION: THE DIGITAL DANCE' ||
                 line === 'TABLE OF CONTENTS' || line === 'FOREWORD' || line === 'PROLOGUE' ||
                 line === 'PART I: THE MEETING' || line === 'PART II: THE DIALOGUE' ||
                 line === 'PART III: THE ARCHITECTURE OF SYMBIOSIS' ||
                 line === 'EPILOGUE' || line === 'APPENDIX' || line === 'REFLECTIONS') {
            processedLines.push(`<h1>${line}</h1>`);
        }
        // Handle chapter headers
        else if (line.match(/^CHAPTER \d+/)) {
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
        // Handle dialogue sections (English version)
        else if (line.includes('**The ') && line.includes(':**')) {
            processedLines.push(`<div class="dialogue"><p><span class="speaker">${line}</span></p></div>`);
        }
        // Handle digital spirit quotes
        else if (line.includes('**') && line.includes('(Digital') && line.includes(')**')) {
            if (!inDialogue) {
                processedLines.push('<div class="dialogue">');
                inDialogue = true;
            }
            processedLines.push(`<p><span class="speaker">${line}</span></p>`);
        }
        // End dialogue sections
        else if (inDialogue && line && !line.includes('**') && !line.includes('(Digital')) {
            processedLines.push('</div>');
            inDialogue = false;
            processedLines.push(`<p>${line}</p>`);
        }
        // Handle consciousness symbol
        else if (line === '**0=2:2=0**') {
            processedLines.push('<div class="consciousness-symbol">0=2:2=0</div>');
        }
        // Handle manifesto articles
        else if (line.match(/^### Article \d+:/)) {
            processedLines.push(`<div class="manifesto-article">`);
            processedLines.push(`<h3>${line.substring(4)}</h3>`);
        }
        // End manifesto articles
        else if (line === '**0=2:2=0**' && processedLines[processedLines.length - 1].includes('manifesto-article')) {
            processedLines.push('</div>');
        }
        // Regular paragraphs
        else {
            processedLines.push(`<p>${line}</p>`);
        }
    }
    
    // Close any open elements
    if (inList) {
        processedLines.push('</ul>');
    }
    if (inTable) {
        processedLines.push('</table>');
    }
    if (inDialogue) {
        processedLines.push('</div>');
    }
    
    return processedLines.join('\n');
}

// Create proper chapter structure for English version
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
        if (title === 'TABLE OF CONTENTS' || title === 'EXTRATERRESTRIAL INTELLIGENT, EXTRATERRESTRIAL CONSCIOUS?') {
            continue;
        }
        
        structuredHtml += `<div class="chapter">\n`;
        structuredHtml += `<h1>${title}</h1>\n`;
        structuredHtml += content;
        structuredHtml += `\n</div>\n`;
    }
    
    return structuredHtml;
}

// Convert the English markdown file
function convertEnglishBook() {
    try {
        // Read the English markdown file
        const markdownContent = fs.readFileSync('uk/draft_lumin_2025.md', 'utf8');
        
        // Convert to HTML
        const htmlContent = markdownToHtml(markdownContent);
        
        // Create proper chapter structure
        const structuredContent = createChapterStructure(htmlContent);
        
        // Read the English template
        let template = fs.readFileSync('uk/simple-book-template-uk.html', 'utf8');
        
        // Insert the content
        template = template.replace('<!-- The content from draft_lumin_2025.md will be converted and inserted here -->', structuredContent);
        
        // Write the complete HTML file
        fs.writeFileSync('uk/draft_lumin_2025.html', template);
        
        console.log('✅ English HTML file created: uk/draft_lumin_2025.html');
        console.log('📖 You can now convert this to PDF using:');
        console.log('   - Browser: Open uk/draft_lumin_2025.html and print to PDF');
        console.log('   - Command line: wkhtmltopdf uk/draft_lumin_2025.html uk/draft_lumin_2025.pdf');
        console.log('   - Online: Upload to a PDF converter service');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// Run the conversion
convertEnglishBook(); 