const fs = require('fs');
const path = require('path');

// Simple markdown to HTML converter
function markdownToHtml(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Paragraphs
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';
    
    // Lists
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Tables
    html = html.replace(/\| (.*?) \|/g, '<td>$1</td>');
    html = html.replace(/(<td>.*<\/td>)/s, '<tr>$1</tr>');
    html = html.replace(/(<tr>.*<\/tr>)/s, '<table>$1</table>');
    
    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    // Clean up
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p><h[1-6]>/g, '<h$1>');
    html = html.replace(/<\/h[1-6]><\/p>/g, '</h$1>');
    
    return html;
}

// Convert the markdown file
function convertBook() {
    try {
        // Read the markdown file
        const markdownContent = fs.readFileSync('nl/draft_lumin_2025.md', 'utf8');
        
        // Convert to HTML
        const htmlContent = markdownToHtml(markdownContent);
        
        // Read the template
        let template = fs.readFileSync('book-template.html', 'utf8');
        
        // Insert the content
        template = template.replace('<!-- The content from draft_lumin_2025.md will be converted and inserted here -->', htmlContent);
        
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