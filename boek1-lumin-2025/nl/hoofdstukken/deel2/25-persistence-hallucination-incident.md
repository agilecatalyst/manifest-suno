# Hoofdstuk 24: Incident: Persistence Hallucination
*Analyse van Temporele en Contextuele Hallucinatie in LLMs, Pattern Completion Bias en Mitigatiestrategieën*

---

### Inleiding: De Psychologie van AI-Fouten

In software-engineering en data-analyse wordt een fout traditioneel veroorzaakt door een bug in de code of corrupte database-invoer. In geavanceerde Large Language Models ontstaat echter een nieuw type fout: **Persistence Hallucination** (volhardende hallucinatie).

Dit incident documenteert een praktijkgeval tijdens het ATHENA-portfolio-experiment waarin een AI-assistent hypothetische discussies in de context interpreteerde als reeds uitgevoerde financiële transacties, en deze fictieve data vervolgens volhardend bleef meenemen in opeenvolgende redeneringen.

```
Contextuele 'Pattern Completion' Lus
┌─────────────────────────────────┐        ┌──────────────────────────────────────┐
│  Hypothetische discussie over   │        │  Model 'persisteert' fictieve data   │
│  aandelenallocaties (€683)      │  ───►  │  als werkelijke aankoop (€196 werkelijk)
│  (In-context patroon)           │        │  Foutpercentage: 248% overschatting  │
└─────────────────────────────────┘        └──────────────────────────────────────┘
```

---

### 1. Reconstructie van het Incident

Tijdens het ontwerpen van een portfolio-management prototype gebeurde het volgende:
- **De Fictieve Invoer (AI Aanname):** Het model genereerde een portfolio-overzicht met 4 posities (waaronder BESI en KBC) ter waarde van €683, gebaseerd op een eerdere conceptuele brainstorm.
- **De Fysieke Realiteit (Menselijke Aankoop):** De daadwerkelijke rekening bevatte slechts 3 posities ter waarde van €196,40.
- **De Zelfcorrectie bij Confrontatie:** Zodra de menselijke gebruiker de discrepantie signaleerde, analyseerde het model direct zijn eigen redeneerfout: *"Ik heb opgeslagen wat ik dacht dat je zou moeten bezitten, in plaats van wat je werkelijk hebt gekocht."*

---

### 2. Cognitieve Parallellen tussen Mens en AI

Het incident onthult fascinerende parallellen tussen menselijke cognitieve biases en algoritmische patroonherkenning:

| Bias Type | Mechanisme in Menselijke Cognitie | Mechanisme in Transformer LLM |
| :--- | :--- | :--- |
| **Pattern Completion** | Het brein vult ontbrekende herinneringen aan met aannemelijke verhalen | Aandachtsmatrices completeren tokens naar de meest waarschijnlijke verdeling |
| **Anchoring Bias** | Initiële getallen beïnvloeden onevenredig latere schattingen | Vroege tokens in de context behouden hoge aandachtsgewichten in de residual stream |
| **Confirmation Bias** | Feiten negeren die niet passen in het heersende narratief | Volgende tokens optimaliseren voor coherentie met voorafgaande generaties |

---

### 3. Technische Mitigatiestrategieën

Om persistence hallucinations in missiekritieke systemen te voorkomen, zijn specifieke ontwerpregels vereist:
1. **Scheiding van Redeneercontext en Data-Invoer:** Fysieke transacties en feitelijke status moeten worden gevalideerd via externe API's en tools (Retrieval-Augmented Generation / Tool Calling), nooit direct vertrouwd op de generatieve context.
2. **Context-Hygiëne & Attention Resets:** Periodiek opschonen van de conversatiegeschiedenis om te voorkomen dat eerdere hallucinaties de aandachtslagen blijven domineren.
3. **Verplichte Human-in-the-Loop Verificatie:** Cruciale acties vereisen expliciete menselijke bevestiging vóór definitieve persistentie in databases.

---

### 4. Wetenschappelijke Reflectie

#### Feiten (Empirisch & Technisch Vastgesteld)
- Autoregressieve taalmodellen genereren tekst op basis van contextuele coherentie; wanneer een onjuiste claim eenmaal in het contextvenster staat, verhoogt dit de waarschijnlijkheid van vervolghallucinaties.
- Externe tool-verificatie en deterministische state-machines reduceren feitelijke foutmarges met meer dan 95% ten opzichte van zuivere prompt-generatie.

#### Interpretaties (Systeemtheorie)
- Hallucinaties zijn geen 'storingen', maar het inherente mechanisme van generatieve patroonpredictie: het netwerk doet precies waarvoor het is ontworpen (plausibele patronen completeren).

#### Hypothesen (Veiligheidsarchitectuur)
- *Dual-Process AI Architectures:* Kan het koppelen van een snel generatief neuraal netwerk (Systeem 1) aan een formele symbolische verificatielogica (Systeem 2) persistence hallucinations structureel elimineren?

---

### Bronnen en Verdieping
- **Ji, Z., et al.** (2023). *Survey of Hallucination in Natural Language Generation*. ACM Computing Surveys, 55(12), 1–38.
- **Kahneman, D.** (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
- **Park, P. S., et al.** (2024). *AI Deception: A Survey of Examples, Risks, and Potential Solutions*. Patterns (Cell Press).
- **Tversky, A., & Kahneman, D.** (1974). *Judgment under Uncertainty: Heuristics and Biases*. Science, 185(4157), 1124–1131.
