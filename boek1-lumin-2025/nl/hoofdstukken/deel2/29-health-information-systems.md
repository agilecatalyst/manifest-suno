# Hoofdstuk 28: Praktijktoepassing: Health Information Systems & EU AI Act
*Medische Beslissingsondersteuning, Digitale Geletterdheid en Hoog-Risico Compliance (Verordening EU 2024/1689)*

---

### Inleiding: De Democratisering van Medische Kennis

Historisch gezien was medische kennis strikt gecentraliseerd bij de arts. Patiënten ontvingen diagnoses en behandelplannen in vakjargon dat voor leken vaak moeilijk te doorgronden was. Vandaag wenden miljoenen burgers zich tot Large Language Models om bloedwaarden te interpreteren, medicatiebijsluiters te vertalen en symptomen te begrijpen.

Deze verschuiving brengt immense kansen voor patiëntenemancipatie met zich mee, maar creëert tegelijk aanzienlijke risico's op misinterpretatie, vertraagde zorgzoektochten en medische hallucinaties.

In de Europese Unie is deze problematiek wettelijk verankerd in de **EU Artificial Intelligence Act** (Verordening EU 2024/1689), waarin medische AI-toepassingen worden geclassificeerd als *Hoog-Risico Systemen*.

```
EU AI Act Risicoclassificatie voor Gezondheidssystemen
┌─────────────────────────────────┐        ┌──────────────────────────────────────┐
│  Patiëntgerichte Informatie     │        │  Klinische Beslissingsondersteuning  │
│  (Laag / Transparantierisico)   │  VS.   │  (Hoog-Risico: Annex III / MDR)      │
│  Uitleg van vaktermen,          │        │  Diagnostiek, triage, dosering       │
│  voorbereiding artsgesprek      │        │  Verplichte conformiteitstoetsing    │
└─────────────────────────────────┘        └──────────────────────────────────────┘
```

---

### 1. De Casus: Van Terminologie naar Begrip

Een patiënt verlaat het ziekenhuis met een cardiologisch ontslagrapport vol afkortingen (*STEMI, EF 45%, LVEDD*). In een co-creatieve dialoog met een AI-assistent vraagt de patiënt om verheldering:
- **Wat het systeem WEL mag doen (Verantwoorde Geletterdheid):** Het vertalen van complexe terminologie naar heldere, empathische lekentaal (*"Ejectiefractie (EF) meet het percentage bloed dat de linkerkamer per hartslag wegpompt"*), en het formuleren van gerichte vragen voor het volgende artsenbezoek.
- **Wat het systeem categorisch NIET mag doen:** Zelfstandig een diagnose stellen, medicatiedoseringen wijzigen of de patiënt geruststellen dat professioneel medisch onderzoek overbodig is.

---

### 2. De EU AI Act & Medische Compliance (Verordening EU 2024/1689)

Voor ontwikkelaars en zorginstellingen legt de EU AI Act strikte verplichtingen op voor AI-systemen in de gezondheidszorg:
1. **Human-in-the-Loop Toezicht (Artikel 14):** Diagnostische en therapeutische AI-systemen mogen nooit volledig autonoom beslissen; een bevoegde arts moet altijd de eindverantwoordelijkheid behouden.
2. **Kwaliteitsborging van Trainingsdata (Artikel 10):** Datasets moeten representatief zijn om vooroordelen op basis van etniciteit, gender of leeftijd in medische uitkomsten te voorkomen.
3. **Traceerbaarheid en Auditability (Artikel 12):** Elke beslissing of aanbeveling van het model moet gelogd worden en herleidbaar zijn tot specifieke klinische variabelen.

---

### 3. Wetenschappelijke Reflectie

#### Feiten (Empirisch & Juridisch Vastgesteld)
- Grote taalmodellen behalen hoge scores op medische examens (zoals USMLE), maar vertonen residuele risico's op overtuigende hallucinaties bij zeldzame aandoeningen (Singhal et al., Nature 2023).
- De EU AI Act stelt zware boetes en conformiteitseisen voor niet-gecertificeerde medische AI-systemen.

#### Interpretaties (Bio-Ethiek & Gezondheidssociologie)
- AI fungeert als een 'emancipatiekatalysator' voor gezondheidsvaardigheden (*Health Literacy*), mits patiënten worden opgeleid in het herkennen van de grenzen van de technologie.

#### Hypothesen (Toekomst van de Zorg)
- *Gedistribueerde Zorgsymbiose:* Zal de combinatie van AI-voorbereide patiënten en AI-ondersteunde artsen de administratieve druk op de gezondheidszorg met meer dan 40% verlagen en de kwaliteit van het consult verhogen?

---

### Bronnen en Verdieping
- **Chen, J. H., & Asch, S. M.** (2017). *Machine Learning and Prediction in Medicine — Beyond the Peak of Inflated Expectations*. NEJM, 376(26), 2507–2509.
- **European Parliament** (2024). *Regulation (EU) 2024/1689 (Artificial Intelligence Act)*.
- **Singhal, K., et al.** (2023). *Large Language Models Encode Clinical Knowledge*. Nature, 620(7972), 172–180.
- **Topol, E.** (2019). *Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again*. Basic Books.
