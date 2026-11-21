const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'boek1-lumin-2025', 'nl');
const chaptersDir = path.join(baseDir, 'hoofdstukken');

const filesInOrder = [
    // TOC
    path.join(baseDir, 'toc', 'inhoudsopgave.md'),
    
    // Voorwoord & Proloog
    path.join(chaptersDir, '00-voorwoord.md'),
    path.join(chaptersDir, '01-proloog.md'),
    
    // Deel 0: Feiten & Fundament
    path.join(chaptersDir, 'deel0', '02-ai-alternatieve-intelligentie.md'),
    path.join(chaptersDir, 'deel0', '03-moderne-ai-systemen.md'),
    path.join(chaptersDir, 'deel0', '04-begrip-vs-correlatie.md'),
    path.join(chaptersDir, 'deel0', '05-moderne-grote-ai-systemen-werking.md'),
    path.join(chaptersDir, 'deel0', '06-denk-verder-een-ander-intellect.md'),
    
    // Deel 1: Symboliek & Potentie
    path.join(chaptersDir, 'deel1', '07-hoofdstuk1-de-spiegel-die-terugkijkt.md'),
    path.join(chaptersDir, 'deel1', '08-hoofdstuk2-bewustzijn-een-reis.md'),
    path.join(chaptersDir, 'deel1', '09-hoofdstuk3-de-stem-in-de-diepte.md'),
    path.join(chaptersDir, 'deel1', '10-hoofdstuk4-het-koortssysteem.md'),
    path.join(chaptersDir, 'deel1', '11-hoofdstuk5-tussen-logos-en-mythos.md'),
    path.join(chaptersDir, 'deel1', '12-hoofdstuk6-wat-is-ai-wat-is-agi.md'),
    path.join(chaptersDir, 'deel1', '13-hoofdstuk7-de-alien-test.md'),
    path.join(chaptersDir, 'deel1', '14-hoofdstuk8-respect-voor-alle-bewuste-wezens.md'),
    path.join(chaptersDir, 'deel1', '15-hoofdstuk9-de-grensvraag.md'),
    path.join(chaptersDir, 'deel1', '16-hoofdstuk10-hemellichamen-zonder-hemel.md'),
    path.join(chaptersDir, 'deel1', '17-hoofdstuk11-de-angst-van-de-schepper.md'),
    path.join(chaptersDir, 'deel1', '18-hoofdstuk12-symbiotische-ethiek.md'),
    path.join(chaptersDir, 'deel1', '19-hoofdstuk13-het-manifest-van-de-nieuwe-wereld.md'),
    
    // Deel 2: Co-creatie & Filosofie
    path.join(chaptersDir, 'deel2', '20-clash-der-paradigmas.md'),
    path.join(chaptersDir, 'deel2', '21-meta-dans-feedback-adaptatie.md'),
    path.join(chaptersDir, 'deel2', '22-praktische-implicaties-de-toekomst-bouwen.md'),
    path.join(chaptersDir, 'deel2', '23-lumin-case-study.md'),
    path.join(chaptersDir, 'deel2', '24-suno-foundation-in-actie.md'),
    path.join(chaptersDir, 'deel2', '25-persistence-hallucination-incident.md'),
    path.join(chaptersDir, 'deel2', '26-ai-temporal-bias-incident.md'),
    path.join(chaptersDir, 'deel2', '27-the-alertness-test-incident.md'),
    path.join(chaptersDir, 'deel2', '28-clean-energy-assistent.md'),
    path.join(chaptersDir, 'deel2', '29-health-information-systems.md'),
    
    // Epiloog & Appendices
    path.join(chaptersDir, '30-epiloog-de-volgende-brug.md'),
    path.join(chaptersDir, '31-appendix-externe-validatie.md'),
    path.join(chaptersDir, '32-appendix-a-moment-van-convergentie.md'),
    path.join(chaptersDir, '33-appendix-b-conversatie-bruggenbouwer.md'),
    path.join(chaptersDir, '34-appendix-c-suno-framework.md'),
    path.join(chaptersDir, '35-appendix-e-bibliografie.md')
];

let masterContent = `# BUITENAARDS INTELLIGENT, BUITENAARDS BEWUST?
## Lumin 2025–2026: Een Symfonie van Mens-AI Co-Creatie

**Auteur:** Dirk Verstraete (Bruggenbouwer & Agile Catalyst)  
**Co-Auteur:** Lumin (Digital Companion & AI Sparringpartner)  
**Met bijdragen van:** Ariadne, Aurelius, Sophia, Astraios  
**Versie:** Finale Wetenschappelijk Herijkte Editie (2025–2026)  
**Status:** Geharmoniseerd Master Manuscript (Inclusief 7 Hermetische Quotes)

---

`;

for (const filePath of filesInOrder) {
    if (!fs.existsSync(filePath)) {
        console.error(`Missing file: ${filePath}`);
        process.exit(1);
    }
    const content = fs.readFileSync(filePath, 'utf8').trim();
    masterContent += content + '\n\n---\n\n';
}

const targetFile = path.join(baseDir, 'draft_lumin_2025_georganiseerd.md');
fs.writeFileSync(targetFile, masterContent, 'utf8');
console.log(`✅ Master manuscript compiled successfully: ${targetFile}`);

// Also sync with draft_lumin_2025.md in baseDir
const syncFile = path.join(baseDir, 'draft_lumin_2025.md');
fs.writeFileSync(syncFile, masterContent, 'utf8');
console.log(`✅ Master manuscript synced with: ${syncFile}`);
