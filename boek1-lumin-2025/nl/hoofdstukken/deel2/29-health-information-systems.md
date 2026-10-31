# Hoofdstuk 28: Praktijktoepassing: Health Information Systems & EU AI Act
*Medische Beslissingsondersteuning, Digitale Geletterdheid en Actieve Handhaving van de EU AI Act (Verordening EU 2024/1689)*

---

### Inleiding: De Democratisering van Medische Kennis in het Tijdperk van Handhaving

Historisch gezien was medische kennis strikt gecentraliseerd bij de arts. Patiënten ontvingen diagnoses en behandelplannen in vakjargon dat voor leken vaak moeilijk te doorgronden was. Vandaag wenden miljoenen burgers zich dagelijks tot generatieve AI om bloedwaarden te interpreteren, medicatiebijsluiters te vertalen en symptomen te begrijpen vóór of na een doktersbezoek.

Deze verschuiving brengt een ongekende kans op **patiëntenemancipatie en gezondheidsgeletterdheid (Health Literacy)**, maar creëert tegelijk aanzienlijke risico's op overmatige zelfdiagnose, vertraagde zorgzoektochten en overtuigend geformuleerde medische hallucinaties.

In de Europese Unie is dit speelveld sinds 2024–2026 fundamenteel getransformeerd door de actieve inwerkingtreding van de **EU Artificial Intelligence Act** (Verordening EU 2024/1689). Waar dit voorheen een theoretisch kader was, is het sinds augustus 2026 een strikt gehandhaafde realiteit voor alle hoog-risico en algemene AI-systemen in de zorg.

```
       EU AI ACT RISICOCLASSIFICATIE IN DE GEZONDHEIDSZORG (2026)
┌──────────────────────────────────────┐        ┌──────────────────────────────────────┐
│  Patiëntgerichte Informatie          │        │  Klinische Beslissingsondersteuning  │
│  (Transparantie & Artikel 50)        │  VS.   │  (Hoog-Risico: Annex III & MDR)      │
│  • Uitleg van medische vaktermen     │        │  • Triage, dosering & diagnostiek    │
│  • Voorbereiding op het artsgesprek  │        │  • Verplichte conformiteitstoetsing  │
│  • Duidelijke AI-disclaimer          │        │  • FRIA & Human-in-the-Loop toezicht │
└──────────────────────────────────────┘        └──────────────────────────────────────┘
```

---

### 1. De Casus: Van Afkortingen naar Gedeeld Begrip

Stel: een patiënt verlaat de cardioloog met een ontslagrapport vol specialistische termen (*"Status na NSTEMI, LVEF 42%, indicatie voor ACE-remmer en bètablokker"*). De patiënt voelt zich overweldigd en onzeker.

In een verantwoorde, symbiotische dialoog met een AI-gezondheidsassistent:
- **Wat de AI WEL doet (Emancipatie & Voorbereiding):**  
  Het vertaalt de termen naar begrijpelijk Nederlands (*"LVEF meet de pompkracht van de linkerkamer van je hart; 42% betekent dat het hart tijdelijk wat minder krachtig pompt en ondersteuning nodig heeft van medicatie"*). De assistent helpt de patiënt een lijstje te maken met drie gerichte vragen voor de vervolgafspraak.
- **Wat de AI NOOIT mag doen (Klinische Grens):**  
  Zelfstandig medicatiedoses aanpassen, garanderen dat een symptoom "onschuldig" is, of adviseren om een doktersbezoek over te slaan.

---

### 2. De Wetgevende Realiteit (Status 2026)

De gefaseerde uitrol van de EU AI Act heeft heldere kaders geschapen die elke zorginstelling en AI-ontwikkelaar bindend moet naleven:

1. **Verbod op Onaanvaardbaar Risico (Actief sinds begin 2025):**  
   Volledig verbod op manipulatieve AI die kwetsbare patiënten misleidt of onbewuste gedragsbeïnvloeding toepast.
2. **General Purpose AI (GPAI) & Code of Practice (Actief sinds medio 2025):**  
   Grote frontier-modellen moeten volledige transparantie bieden over trainingsdata, copyright-naleving, energieverbruik en systematische red-teaming evaluaties.
3. **Hoog-Risico Handhaving (Annex III & MDR - Actief sinds augustus 2026):**  
   AI-systemen die direct diagnoses stellen, behandeladviezen genereren of triage uitvoeren, vallen onder de strengste categorie:
   - **Human-in-the-Loop (Artikel 14):** Een bevoegde arts moet te allen tijde de eindbeslissing nemen en het advies kunnen overrulen.
   - **Data Governance (Artikel 10):** Strikte controles tegen bias (etniciteit, geslacht, leeftijd) in medische trainingsdata.
   - **Fundamental Rights Impact Assessment (FRIA - Artikel 27):** Verplichte voorafgaande evaluatie van de impact op privacy, non-discriminatie en patiëntenrechten.
   - **Post-Market Monitoring (Artikel 72–73):** Verplichte registratie en directe meldingsplicht bij ernstige incidenten of systematische hallucinaties.

---

### 3. Wetenschappelijke Reflectie

#### Feiten (Empirisch & Juridisch Vastgesteld)
- Grote taalmodellen behalen scores boven de 90% op medische examens (zoals USMLE), maar behouden een residuele foutmarge bij zeldzame aandoeningen of ontbrekende context.
- De EU AI Act legt zware administratieve en financiële sancties op voor niet-gecertificeerde hoog-risico toepassingen.
- De internationale norm ISO/IEC 42001 fungeert per 2026 als de leidende managementstandaard voor AI-risicobeheersing in organisaties.

#### Interpretaties (Bio-Ethiek & Zorgsymbiose)
- AI vervangt de arts niet, maar transformeert de arts-patiëntrelatie: de patiënt wordt een beter geïnformeerde gesprekspartner (*shared decision making*).
- Transparantie en verklaarbaarheid zijn geen puur technische functies, maar fundamentele randvoorwaarden voor vertrouwen en therapeutische alliantie.

#### Hypothesen (Toekomstperspectief)
- *De Symbiotische Zorgdriehoek:* Zorginstellingen die patiënten actieve, gevalideerde AI-voorbereidingstools aanbieden in combinatie met AI-ondersteunde artsenconsulten, zullen de consulttijd met 30% efficiënter benutten en de therapietrouw met meer dan 25% verhogen.

---

### Bronnen en Verdieping
- **Chen, J. H., & Asch, S. M.** (2017). *Machine Learning and Prediction in Medicine — Beyond the Peak of Inflated Expectations*. NEJM, 376(26), 2507–2509.
- **European Parliament & Council of the European Union** (2024). *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*. Official Journal of the EU.
- **ISO/IEC 42001** (2023–2026). *Information technology — Artificial intelligence — Management system*.
- **Singhal, K., et al.** (2023). *Large Language Models Encode Clinical Knowledge*. Nature, 620(7972), 172–180.
- **Topol, E.** (2019). *Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again*. Basic Books.
