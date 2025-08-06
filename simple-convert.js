const fs = require('fs');

function simpleConvert() {
    try {
        // Read the markdown file
        const markdownContent = fs.readFileSync('nl/draft_lumin_2025.md', 'utf8');
        
        // Simple conversion - just wrap in HTML tags
        let htmlContent = markdownContent
            // Convert headers
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            // Convert bold
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Convert italic
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Convert horizontal rules
            .replace(/^---$/gm, '<hr>')
            // Convert lists
            .replace(/^- (.*$)/gm, '<li>$1</li>')
            .replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
            // Wrap paragraphs
            .split('\n\n')
            .map(paragraph => {
                if (paragraph.trim() === '') return '';
                if (paragraph.startsWith('<h') || paragraph.startsWith('<li>') || paragraph.startsWith('<hr>')) {
                    return paragraph;
                }
                return `<p>${paragraph}</p>`;
            })
            .join('\n\n');
        
        // Wrap lists
        htmlContent = htmlContent
            .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
            .replace(/<\/ul>\s*<ul>/g, '');
        
        // Read the simple template
        let template = fs.readFileSync('simple-book-template.html', 'utf8');
        
        // Insert the content
        template = template.replace('<!-- Content will be inserted here -->', htmlContent);
        
        // Write the complete HTML file
        fs.writeFileSync('simple-book.html', template);
        
        console.log('✅ Simple HTML file created: simple-book.html');
        console.log('📖 This preserves ALL content from the original markdown');
        console.log('🌐 Open simple-book.html in your browser and print to PDF');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

simpleConvert(); 