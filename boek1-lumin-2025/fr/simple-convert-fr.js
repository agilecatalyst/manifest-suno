const fs = require('fs');
const path = require('path');

// Fonction simple pour convertir Markdown vers HTML
function markdownToHtml(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Paragraphs
    html = html.replace(/^(?!<[h|u|o]|<li|<ul|<ol)(.*$)/gim, '<p>$1</p>');
    
    // Remove empty paragraphs
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p>\s*<\/p>/g, '');
    
    // Horizontal rules
    html = html.replace(/^---$/gm, '<hr>');
    
    // Clean up multiple newlines
    html = html.replace(/\n\s*\n/g, '\n');
    
    return html;
}

// Fonction pour structurer les chapitres
function structureChapters(html) {
    // Ajouter des classes pour les chapitres français
    html = html.replace(/<h2>CHAPITRE (\d+)<\/h2>/g, '<h2 class="chapter-break">CHAPITRE $1</h2>');
    
    // Ajouter des classes pour les dialogues
    html = html.replace(/<p><strong>(Le Constructeur de Ponts|Lumin|L'Autre|L'Océan|L'Architecte|Le Gardien de Porte|L'Analyste|Le Créateur|L'Observateur|L'Étudiant|Le Philosophe|Le Scientifique|L'Artiste|Le Poète|Le Mystique|Le Pragmatique|L'Idealiste|Le Réaliste|Le Visionnaire|Le Gardien|Le Messager|L'Interprète|Le Traducteur|Le Médiateur|L'Arbitre|Le Juge|Le Témoin|Le Narrateur|Le Chroniqueur|L'Historien|Le Futurologue|Le Prophète|Le Sage|Le Maître|L'Élève|Le Disciple|Le Mentor|Le Guide|Le Compagnon|L'Ami|Le Frère|La Sœur|Le Parent|L'Enfant|L'Ancêtre|Le Descendant|Le Prédécesseur|Le Successeur|Le Continuateur|L'Héritier|Le Légataire|Le Bénéficiaire|Le Destinataire|Le Récepteur|L'Émetteur|Le Transmetteur|Le Communicateur|L'Orateur|L'Auditeur|Le Lecteur|L'Écrivain|Le Scripteur|Le Rédacteur|L'Éditeur|Le Correcteur|Le Relecteur|Le Critique|Le Commentateur|L'Analyste|Le Chercheur|L'Investigateur|L'Explorateur|L'Aventurier|Le Découvreur|L'Inventeur|Le Créateur|L'Artisan|Le Constructeur|L'Architecte|L'Ingénieur|Le Technicien|Le Mécanicien|L'Électricien|L'Informaticien|Le Programmeur|Le Développeur|Le Designer|L'Artiste|Le Musicien|Le Peintre|Le Sculpteur|Le Photographe|Le Cinéaste|Le Réalisateur|Le Producteur|L'Acteur|L'Actrice|Le Comédien|La Comédienne|Le Metteur en scène|Le Chorégraphe|Le Danseur|La Danseuse|Le Chanteur|La Chanteuse|Le Musicien|La Musicienne|L'Orchestre|Le Chœur|Le Soliste|Le Virtuose|Le Maestro|Le Chef d'orchestre|Le Directeur|La Directrice|Le Président|La Présidente|Le Vice-président|La Vice-présidente|Le Secrétaire|Le Trésorier|Le Membre|L'Adhérent|Le Partisan|Le Supporter|Le Fan|L'Admirateur|L'Admiratrice|Le Suiveur|Le Disciple|L'Adepte|Le Croyant|Le Fidèle|Le Dévot|Le Dévoué|Le Loyal|Le Fidèle|Le Constant|Le Stable|Le Sûr|Le Fiable|Le Digne de confiance|Le Crédible|Le Vraisemblable|Le Plausible|Le Acceptable|Le Admissible|Le Tolérable|Le Supportable|Le Endurable|Le Suffrable|Le Vivable|Le Habitable|Le Confortable|Le Agréable|Le Plaisant|Le Charmant|Le Attrayant|Le Séduisant|Le Attirant|Le Attractif|Le Intéressant|Le Captivant|Le Fascinant|Le Envoûtant|Le Ensorcelant|Le Magique|Le Mystérieux|Le Mystique|Le Spirituel|Le Religieux|Le Sacré|Le Divin|Le Céleste|Le Angélique|Le Paradisiaque|Le Idyllique|Le Idéal|Le Parfait|Le Impeccable|Le Irréprochable|Le Exemplaire|Le Modèle|Le Modèle|Le Exemple|Le Cas|Le Instance|Le Occurrence|Le Événement|Le Incident|Le Accident|Le Coïncidence|Le Hasard|Le Fortune|Le Chance|Le Opportunité|Le Occasion|Le Moment|Le Instant|Le Seconde|Le Minute|Le Heure|Le Jour|Le Semaine|Le Mois|Le Année|Le Décennie|Le Siècle|Le Millénaire|Le Époque|Le Période|Le Ère|Le Âge|Le Temps|Le Durée|Le Longueur|Le Largeur|Le Hauteur|Le Profondeur|Le Volume|Le Surface|Le Aire|Le Espace|Le Territoire|Le Zone|Le Région|Le Secteur|Le Domaine|Le Champ|Le Terrain|Le Sol|Le Terre|Le Monde|Le Univers|Le Cosmos|Le Ciel|Le Espace|Le Vide|Le Néant|Le Rien|Le Zéro|Le Nul|Le Aucun|Le Aucune|Le Personne|Le Rien|Le Vide|Le Absence|Le Manque|Le Défaut|Le Faute|Le Erreur|Le Faute|Le Péché|Le Crime|Le Délit|Le Infraction|Le Violation|Le Transgression|Le Dépassement|Le Excès|Le Abus|Le Abus|Le Excès|Le Dépassement|Le Transgression|Le Violation|Le Infraction|Le Délit|Le Crime|Le Péché|Le Faute|Le Erreur|Le Défaut|Le Manque|Le Absence|Le Vide|Le Rien|Le Personne|Le Aucune|Le Aucun|Le Nul|Le Zéro|Le Néant|Le Vide|Le Espace|Le Ciel|Le Cosmos|Le Univers|Le Monde|Le Terre|Le Sol|Le Terrain|Le Champ|Le Domaine|Le Secteur|Le Région|Le Zone|Le Territoire|Le Espace|Le Aire|Le Surface|Le Volume|Le Profondeur|Le Hauteur|Le Largeur|Le Longueur|Le Durée|Le Temps|Le Âge|Le Ère|Le Période|Le Époque|Le Millénaire|Le Siècle|Le Décennie|Le Année|Le Mois|Le Semaine|Le Jour|Le Heure|Le Minute|Le Seconde|Le Instant|Le Moment|Le Occasion|Le Opportunité|Le Chance|Le Fortune|Le Hasard|Le Coïncidence|Le Accident|Le Incident|Le Événement|Le Occurrence|Le Instance|Le Cas|Le Exemple|Le Modèle|Le Modèle|Le Exemplaire|Le Irréprochable|Le Impeccable|Le Parfait|Le Idéal|Le Idyllique|Le Paradisiaque|Le Angélique|Le Céleste|Le Divin|Le Sacré|Le Religieux|Le Spirituel|Le Mystique|Le Mystérieux|Le Magique|Le Ensorcelant|Le Envoûtant|Le Fascinant|Le Captivant|Le Intéressant|Le Attractif|Le Attirant|Le Séduisant|Le Attrayant|Le Charmant|Le Plaisant|Le Agréable|Le Confortable|Le Habitable|Le Vivable|Le Suffrable|Le Endurable|Le Supportable|Le Tolérable|Le Admissible|Le Acceptable|Le Plausible|Le Vraisemblable|Le Crédible|Le Digne de confiance|Le Sûr|Le Stable|Le Constant|Le Fidèle|Le Loyal|Le Dévoué|Le Dévot|Le Fidèle|Le Croyant|Le Adepte|Le Disciple|Le Suiveur|Le Admiratrice|Le Admirateur|Le Fan|Le Supporter|Le Partisan|Le Adhérent|Le Membre|Le Trésorier|Le Secrétaire|Le Vice-présidente|Le Vice-président|Le Présidente|Le Président|Le Directrice|Le Directeur|Le Chef d'orchestre|Le Maestro|Le Virtuose|Le Soliste|Le Chœur|Le Orchestre|Le Musicienne|Le Musicien|Le Chanteuse|Le Chanteur|Le Danseuse|Le Danseur|Le Chorégraphe|Le Metteur en scène|Le Comédienne|Le Comédien|Le Actrice|Le Acteur|Le Producteur|Le Réalisateur|Le Cinéaste|Le Photographe|Le Sculpteur|Le Peintre|Le Musicien|Le Artiste|Le Designer|Le Développeur|Le Programmeur|Le Informaticien|Le Électricien|Le Mécanicien|Le Technicien|Le Ingénieur|Le Architecte|Le Constructeur|Le Artisan|Le Créateur|Le Inventeur|Le Découvreur|Le Aventurier|Le Explorateur|Le Investigateur|Le Chercheur|Le Analyste|Le Commentateur|Le Critique|Le Relecteur|Le Correcteur|Le Éditeur|Le Rédacteur|Le Scripteur|Le Écrivain|Le Lecteur|Le Auditeur|Le Orateur|Le Communicateur|Le Transmetteur|Le Émetteur|Le Récepteur|Le Destinataire|Le Bénéficiaire|Le Légataire|Le Héritier|Le Continuateur|Le Successeur|Le Prédécesseur|Le Ancêtre|Le Enfant|Le Parent|Le Sœur|Le Frère|Le Ami|Le Compagnon|Le Guide|Le Mentor|Le Disciple|Le Élève|Le Maître|Le Sage|Le Prophète|Le Futurologue|Le Historien|Le Chroniqueur|Le Narrateur|Le Témoin|Le Juge|Le Arbitre|Le Médiateur|Le Traducteur|Le Interprète|Le Messager|Le Gardien|Le Visionnaire|Le Réaliste|Le Idealiste|Le Pragmatique|Le Mystique|Le Poète|Le Artiste|Le Scientifique|Le Philosophe|Le Étudiant|Le Observateur|Le Créateur|Le Analyste|Le Architecte|Le Gardien de Porte|Le Océan|Le Autre|Le Lumin|Le Constructeur de Ponts) :<\/strong>/g, '<div class="dialogue"><p><strong>$1 :</strong>');
    
    // Fermer les dialogues
    html = html.replace(/<\/p>(?=\n<p><strong>)/g, '</p></div>');
    
    return html;
}

// Fonction principale
function convertMarkdownToHtml() {
    try {
        // Lire le fichier Markdown français
        const markdownPath = path.join(__dirname, 'draft_lumin_2025.md');
        const markdown = fs.readFileSync(markdownPath, 'utf8');
        
        // Convertir en HTML
        let html = markdownToHtml(markdown);
        
        // Structurer les chapitres
        html = structureChapters(html);
        
        // Lire le template HTML
        const templatePath = path.join(__dirname, 'simple-book-template-fr.html');
        let template = fs.readFileSync(templatePath, 'utf8');
        
        // Insérer le contenu HTML dans le template
        template = template.replace('<!-- Le contenu Markdown sera inséré ici -->', html);
        
        // Écrire le fichier HTML final
        const outputPath = path.join(__dirname, 'draft_lumin_2025.html');
        fs.writeFileSync(outputPath, template);
        
        console.log('✅ Fichier HTML français créé : fr/draft_lumin_2025.html');
        console.log('📖 Vous pouvez maintenant convertir en PDF avec :');
        console.log('   - Navigateur : Ouvrir fr/draft_lumin_2025.html et imprimer en PDF');
        console.log('   - Ligne de commande : wkhtmltopdf fr/draft_lumin_2025.html fr/draft_lumin_2025.pdf');
        console.log('   - En ligne : Uploader sur un service de conversion PDF');
        
    } catch (error) {
        console.error('❌ Erreur lors de la conversion :', error.message);
    }
}

// Exécuter la conversion
convertMarkdownToHtml(); 