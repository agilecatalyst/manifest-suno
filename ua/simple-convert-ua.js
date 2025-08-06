const fs = require('fs');

function simpleConvertUA() {
    try {
        // Read the Ukrainian markdown file
        const markdownContent = fs.readFileSync('draft_lumin_2025.md', 'utf8');
        
        // Enhanced conversion with A5 formatting for Ukrainian
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
            // Convert quotes (lines starting with >)
            .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
            // Convert lists
            .replace(/^- (.*$)/gm, '<li>$1</li>')
            .replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
            // Convert code blocks
            .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>')
            // Convert inline code
            .replace(/`(.*?)`/g, '<code>$1</code>')
            // Wrap paragraphs
            .split('\n\n')
            .map(paragraph => {
                if (paragraph.trim() === '') return '';
                if (paragraph.startsWith('<h') || paragraph.startsWith('<li>') || 
                    paragraph.startsWith('<hr>') || paragraph.startsWith('<blockquote>') ||
                    paragraph.startsWith('<pre>')) {
                    return paragraph;
                }
                return `<p>${paragraph}</p>`;
            })
            .join('\n\n');
        
        // Wrap lists
        htmlContent = htmlContent
            .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
            .replace(/<\/ul>\s*<ul>/g, '');
        
        // Read the Ukrainian template
        let template = fs.readFileSync('simple-book-template-ua.html', 'utf8');
        
        // Insert the content
        template = template.replace('<!-- Content will be inserted here -->', htmlContent);
        
        // Write the complete HTML file
        fs.writeFileSync('draft_lumin_2025.html', template);
        
        console.log('✅ Ukrainian HTML file created: ua/draft_lumin_2025.html');
        console.log('📖 This preserves ALL content from the Ukrainian markdown');
        console.log('🌐 Open ua/draft_lumin_2025.html in your browser and print to PDF');
        console.log('🇺🇦 Ukrainian A5 layout with Cyrillic fonts');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

simpleConvertUA(); 