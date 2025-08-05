# PDF Conversie Instructies

## ✅ HTML Bestand Gemaakt
Het bestand `book-complete.html` is succesvol aangemaakt met professionele A5 boekstyling.

## 📖 Conversie Opties

### Optie 1: Browser (Aanbevolen)
1. Open `book-complete.html` in je browser (Chrome, Safari, Firefox)
2. Druk `Cmd+P` (Mac) of `Ctrl+P` (Windows)
3. Kies "Save as PDF"
4. Stel de instellingen in:
   - **Paper size**: A5
   - **Margins**: Default
   - **Options**: ✓ Background graphics
   - **More settings**: ✓ Headers and footers (uitvinken)

### Optie 2: Online Tools
Upload `book-complete.html` naar:
- **WeasyPrint** (online versie)
- **HTML to PDF converters**
- **Prince HTML to PDF** (betaalde service)

### Optie 3: Command Line (Als je tools hebt)
```bash
# Met Puppeteer (Node.js)
npm install puppeteer
node -e "
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/book-complete.html');
  await page.pdf({
    path: 'book.pdf',
    format: 'A5',
    printBackground: true,
    margin: { top: '2cm', right: '1.5cm', bottom: '2cm', left: '1.5cm' }
  });
  await browser.close();
})();
"
```

### Optie 4: Pandoc (Als geïnstalleerd)
```bash
pandoc nl/draft_lumin_2025.md -o book.pdf --pdf-engine=wkhtmltopdf
```

## 🎨 Styling Features
- **A5 formaat** met professionele marges
- **Crimson Text** voor body text (elegante serif)
- **Inter** voor headers (moderne sans-serif)
- **Page numbers** automatisch toegevoegd
- **Chapter breaks** voor nieuwe pagina's
- **Professional typography** met juiste line-height en spacing

## 📋 Volgende Stappen
1. Test de HTML in je browser
2. Converteer naar PDF met je voorkeursmethode
3. Controleer de layout en typografie
4. Pas eventueel de styling aan in `book-template.html`

## 🔧 Aanpassingen
Als je de styling wilt aanpassen:
- Bewerk `book-template.html`
- Run opnieuw: `node convert-to-pdf.js`
- Test de nieuwe versie

## 💡 Tips
- **Chrome/Safari** geven meestal de beste resultaten
- **Print preview** gebruiken om layout te controleren
- **Background graphics** aanzetten voor volledige styling
- **A5 formaat** zorgt voor professionele boekuitstraling 