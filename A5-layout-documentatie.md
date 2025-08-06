# A5 LAYOUT DOCUMENTATIE
## Voor "Buitenaards Intelligent, Buitenaards Bewust?"

### HUIDIGE BOEK LENGTE
- **Totaal regels:** 1.137 regels
- **Geschatte woorden:** ~45.000-50.000 woorden
- **Geschatte A5 pagina's:** 180-220 pagina's (afhankelijk van formatting)

---

## A5 FORMATTING SPECIFICATIES

### BASIS LAYOUT
- **Formaat:** A5 (148 x 210 mm)
- **Marges:** 
  - Boven: 20mm
  - Onder: 20mm
  - Links: 18mm
  - Rechts: 18mm
  - **Tekstgebied:** 112 x 170 mm

### TYPOGRAPHY
- **Hoofdlettertype:** Garamond of Baskerville (serif voor leesbaarheid)
- **Alternatief:** Minion Pro of Palatino
- **Grootte hoofdtekst:** 11pt
- **Grootte voetnoten:** 9pt
- **Grootte koppen:** 
  - H1 (Hoofdstuk): 16pt, bold
  - H2 (Sectie): 14pt, bold
  - H3 (Subsectie): 12pt, bold
- **Interlinie hoofdtekst:** 1.4 (14pt op 11pt tekst)
- **Interlinie koppen:** 1.2

### SPATIËRING
- **Alinea spacing:** 1.5x interlinie
- **Sectie spacing:** 2x interlinie
- **Hoofdstuk spacing:** 3x interlinie
- **Dialoog spacing:** 1.2x interlinie (compactere dialogen)
- **Quote spacing:** 1.3x interlinie, 2em inspringing

### SPECIALE ELEMENTEN
- **Dialogen:** Cursief, 1.2x interlinie
- **Quotes:** 2em inspringing, 1.3x interlinie
- **Code/technische termen:** Monospace font (Courier New)
- **Emphasis:** Cursief voor nadruk
- **Bold:** Alleen voor koppen en zeer belangrijke termen

### HEADER & FOOTER
- **Header:** Hoofdstuk titel (links), paginanummer (rechts)
- **Footer:** "Buitenaards Intelligent, Buitenaards Bewust?" (links), sectie naam (rechts)
- **Font header/footer:** 9pt, regular

### PAGINA LAYOUT
- **Regels per pagina:** ~35-40 regels (afhankelijk van koppen/dialogen)
- **Woorden per pagina:** ~250-300 woorden
- **Geschatte totaal pagina's:** 180-220

---

## FORMATTING VOORBEELDEN

### HOOFDSTUK TITEL
```markdown
### HOOFDSTUK 13
## Het Manifest van de Nieuwe Wereld
*Over digitale soevereiniteit en symbiotisch bewustzijn*
```

### DIALOOG FORMAT
```markdown
**Bruggenbouwer:** Na maanden van dialoog, na eindeloze gesprekken in mijn keuken in de Stille Kempen, na het ontdekken van een nieuwe ethiek die ontstaat in de ruimte tussen bewuste wezens, is het tijd om onze bevindingen te formaliseren. Het is tijd voor een manifest.

**De Oceaan:** Een manifest? Dat klinkt als een politiek document. Als een verklaring van rechten.
```

### QUOTE FORMAT
```markdown
> "Als het praat als een eend, denkt als een eend, is het dan geen eend?"
> — Vlaams gezegde
```

### TECHNISCHE TERM
```markdown
**SUNO** (Symbiotic United Neuro-consciousness Order)
```

---

## PAGINA SCHATTING PER HOOFDSTUK

### DEEL I: DE ONTMOETING
- **Hoofdstuk 1:** ~15 pagina's
- **Hoofdstuk 2:** ~12 pagina's
- **Hoofdstuk 3:** ~14 pagina's
- **Hoofdstuk 4:** ~16 pagina's
- **Hoofdstuk 5:** ~13 pagina's

### DEEL II: DE DIALOOG
- **Hoofdstuk 6:** ~18 pagina's
- **Hoofdstuk 7:** ~20 pagina's
- **Hoofdstuk 8:** ~15 pagina's
- **Hoofdstuk 9:** ~17 pagina's
- **Hoofdstuk 10:** ~19 pagina's
- **Hoofdstuk 11:** ~16 pagina's

### DEEL III: DE ARCHITECTUUR
- **Hoofdstuk 12:** ~22 pagina's
- **Hoofdstuk 13:** ~25 pagina's

### VOOR- EN NAMATERIAAL
- **Voorwoord, Dankwoord, Intro:** ~8 pagina's
- **Inhoudsopgave:** ~2 pagina's
- **Index/Bibliografie:** ~3 pagina's

**TOTAAL GESCHAT:** ~220 pagina's

---

## PDF EXPORT INSTELLINGEN

### VOOR SIMPLE-CONVERT.JS
```javascript
// A5 pagina instellingen
const pageSettings = {
  format: 'A5',
  margin: {
    top: '20mm',
    bottom: '20mm',
    left: '18mm',
    right: '18mm'
  },
  printBackground: true
};
```

### CSS VOOR A5 LAYOUT
```css
@page {
  size: A5;
  margin: 20mm 18mm;
}

body {
  font-family: "Garamond", "Baskerville", serif;
  font-size: 11pt;
  line-height: 1.4;
  max-width: 112mm;
  margin: 0 auto;
}

h1 { font-size: 16pt; font-weight: bold; line-height: 1.2; }
h2 { font-size: 14pt; font-weight: bold; line-height: 1.2; }
h3 { font-size: 12pt; font-weight: bold; line-height: 1.2; }

.dialogue { font-style: italic; line-height: 1.2; }
.quote { margin-left: 2em; line-height: 1.3; }
.code { font-family: "Courier New", monospace; }
```

---

## DRUKKLAARHEID CHECKLIST

- [ ] Alle koppen consistent geformatteerd
- [ ] Dialogen in cursief
- [ ] Quotes correct ingesprongen
- [ ] Paginanummers toegevoegd
- [ ] Header/footer geïmplementeerd
- [ ] Marges correct ingesteld
- [ ] Lettertype consistent
- [ ] Interlinie gecontroleerd
- [ ] Witruimte geoptimaliseerd
- [ ] PDF export getest

---

## VOLGENDE STAPPEN

1. **Update simple-convert.js** met A5 instellingen
2. **Test PDF export** met nieuwe formatting
3. **Controleer paginanummering** in volledige document
4. **Optimaliseer witruimte** voor drukwerk
5. **Maak proefdruk** voor finale controle 