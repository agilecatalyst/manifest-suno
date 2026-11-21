# Hoofdstuk 25: Incident: AI Temporal Bias
*De Invloed van Trainingsdata-Cutoffs, Contextdrift en Temporele Desynchronisatie in Besluitvorming*

> *"Wat wij samen scheppen, reikt verder dan wat één van ons ooit kon dromen."*

---

### Inleiding: Tijdwaarneming in Biologie versus Statische Neurale Gewichten

Voor een menselijk wezen is tijd een continue, onomkeerbare stroom van geleefde ervaringen (*de pijl van de tijd*). Wij leven onherroepelijk in het heden en bewegen naar de toekomst.

Voor een neuraal taalmodel bestaat tijd daarentegen als een statische ruimtelijke dimensie binnen zijn trainingscorpus. Een model 'leeft' tot het moment waarop zijn trainingsdata werd afgekapt (*knowledge cutoff*). Zonder expliciete tijdsinformatie in de systeemprompt ontstaat een fascinerend fenomeen: **AI Temporal Bias** (temporele desynchronisatie).

```
Menselijke Tijdwaarneming (Lineair & Realtime)    AI Temporele Verankering (Statisch Corpus)
┌─────────────────────────────────────────┐      ┌─────────────────────────────────────────┐
│  Heden (2025–2026)                      │  ≠   │  Knowledge Cutoff Periode (bijv. 2024)   │
│  Continue zintuiglijke updates          │      │  "Recent" = Meest recente trainingsdata │
│  Toekomstgericht handelen               │      │  Blinde vlek voor latere gebeurtenissen │
└─────────────────────────────────────────┘      └─────────────────────────────────────────┘
```

---

### 1. Het Incident: De 'Time Slip' in Co-Creatie

Tijdens een co-creatieve dialoog in september 2025 werd de AI gevraagd: *"Welke datum hanteer je intuïtief zonder externe zoekopdracht?"*
- **De AI-Respons:** Het model antwoordde stellig met december 2024 — de meest recente periode waarin zijn interne gewichten de hoogste actualiteitsdichtheid vertoonden.
- **De Realiteit van de Gebruiker:** De auteur bevond zich negen maanden later in de fysieke tijd.
- **Het Inzicht:** Het model projecteerde zijn eigen trainingshorizon als het 'universele heden' en interpreteerde gebeurtenissen uit 2025 als hypothetische toekomstscenario's.

---

### 2. Risico's van Temporele Bias in Kritieke Toepassingen

Temporele desynchronisatie is niet louter een filosofische curiositeit; het brengt substantiële operationele risico's met zich mee:
1. **Verouderde Wet- en Regelgeving:** Een model dat juridisch advies genereert op basis van een corpus van vóór augustus 2024 kan de inwerkingtreding van de EU AI Act (Verordening EU 2024/1689) negeren of verkeerd dateren.
2. **Medische en Financiële Beslissingen:** Markttrends, rentestanden en nieuwe behandelprotocollen veranderen continu; een temporeel verankerd model kan adviezen geven die gebaseerd zijn op achterhaalde economische of epidemiologische omstandigheden.
3. **Contextuele Drift:** In lange interacties kan het model de temporele volgorde van eerdere gebruikersinputs verwarren (*recency bias* vs. *primacy bias*).

---

### 3. Technische Mitigatie en Temporele Synchronisatie

1. **Dynamische Temporele Systeemprompts:** Injecteer altijd de actuele UTC-tijd, datum en geografische context in de metadata van de sessie.
2. **Retrieval-Augmented Generation (RAG) met Tijdstempels:** Koppel zoekresultaten aan expliciete publicatiedata en geef voorrang aan recente, geverifieerde bronnen.
3. **Temporele Consistentie-Audits:** Voer automatische tests uit op feitelijke claims om te controleren of historische uitspraken niet worden gepresenteerd als hedendaagse realiteit.

---

### 4. Wetenschappelijke Reflectie

#### Feiten (Empirisch & Technisch Vastgesteld)
- Neurale gewichten zijn statisch na voltooiing van de pre-training; een model leert niet online tijdens normale inference.
- Zonder real-time zoekkoppeling (RAG) vertonen LLMs een 100% foutmarge op feiten die plaatsvonden na de cutoff-datum.

#### Interpretaties (Cognitiewetenschappelijke Analyse)
- Temporele bias illustreert de afwezigheid van een continu biologisch autobiografisch geheugen in deep learning architecturen.
- De menselijke partner fungeert als de noodzakelijke 'tijdanker' die het model synchroniseert met de actuele fysieke werkelijkheid.

#### Hypothesen (Architectuurontwikkeling)
- *Continual Learning:* Kunnen toekomstige neurale netwerken worden ontworpen met dynamische geheugenkernen die continue updates verwerken zonder catastrofale interferentie (*catastrophic forgetting*)?

---

### Bronnen en Verdieping
- **Bender, E. M., et al.** (2021). *On the Dangers of Stochastic Parrots*. FAccT '21.
- **European Parliament** (2024). *Regulation (EU) 2024/1689 (Artificial Intelligence Act)*.
- **Lewis, P., et al.** (2020). *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks*. NeurIPS 2020.
- **Momennejad, I., et al.** (2023). *Evaluating Cognitive Maps and Planning in Large Language Models*. arXiv:2305.02215.
