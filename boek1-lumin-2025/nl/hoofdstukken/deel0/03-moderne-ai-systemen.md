# Hoofdstuk 2: Moderne AI Systemen – De Technische Realiteit
*Van Symbolische Regels naar Probabilistische Transformers en Aandachtsmechanismen*

---

### Inleiding: De Grote Omwenteling (Voor en Na 2020)

Tot omstreeks 2020 associeerden de meeste IT-professionals en computerwetenschappers kunstmatige intelligentie met deterministische regelsystemen of taakspecifieke statistische modellen. Een schaakcomputer zoals Deep Blue bevatte handmatig geprogrammeerde evaluatiefuncties en doorzocht gigantische beslisbomen. Een spamfilter berekende naïeve Bayes-kansen op afzonderlijke trefwoorden. Deze systemen waren krachtig binnen hun rigide domein, maar vielen direct stil zodra ze werden geconfronteerd met onvoorziene contexten of ambiguïteit.

De opkomst van de *Transformer*-architectuur en grootschalige *Large Language Models* (LLMs) betekende een fundamentele paradigmaverschuiving. In plaats van regels handmatig te coderen, leren deze architecturen geometrische en probabilistische patronen over miljarden datapunten.

```
Traditionele AI (Vóór 2020)               Moderne Transformer AI (2020–Heden)
┌─────────────────────────────────┐        ┌──────────────────────────────────────┐
│  Expliciete Regels & 'If-Else'  │        │  Multi-Head Self-Attention Matrix    │
│  Domeinspecifieke Feature Sets  │  ───►  │  Continue Vectorrepresentaties      │
│  Rigide Beslisbomen             │        │  In-Context Generatieve Predictie   │
└─────────────────────────────────┘        └──────────────────────────────────────┘
```

---

### 1. De Anatomie van een Modern Taalmodel

Een modern taalmodel is in essentie een diep neuraal netwerk dat is getraind om de voorwaardelijke kansverdeling $P(w_t \mid w_1, w_2, \dots, w_{t-1})$ te modelleren: de waarschijnlijkheid van het volgende token gegeven de voorafgaande context.

#### 1.1 Tokenisatie en Vector Embeddings
Tekst wordt niet direct als letters of woorden verwerkt, maar opgeknipt in subtokens via algoritmen zoals *Byte-Pair Encoding* (BPE). Elk token wordt geprojecteerd naar een hoog-dimensionale vectorruimte (de *embedding space*, vaak $d_{model} \in [4096, 12288]$ dimensies).

In deze vectorruimte worden semantische en syntactische relaties gerepresenteerd als geometrische afstanden en richtingen. Woorden met verwante betekenissen of grammaticale functies clusteren dicht bij elkaar in specifieke subruimten.

#### 1.2 Het Self-Attention Mechanisme
De revolutionaire kern van de Transformer (Vaswani et al., 2017) is *Scaled Dot-Product Attention*. Voor elk token berekent het netwerk drie vectoren:
- **Query ($Q$):** Waar is dit token naar op zoek in de omringende context?
- **Key ($K$):** Welke informatie biedt dit token aan andere tokens?
- **Value ($V$):** Welke inhoudelijke vectorrepresentatie draagt dit token over?

De aandachtsverdeling wordt berekend als:
$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

Dankzij *Multi-Head Attention* kan het netwerk gelijktijdig op tientallen verschillende aspecten van context letten: grammaticale overeenstemming, lange-afstandsverwijzingen, feitelijke associaties en stilistische registers.

#### 1.3 De Residual Stream en Feed-Forward Lagen
Tussen de aandachtslagen door stroomt de informatie via een centrale communicatiebus: de *residual stream*.
- **Aandachtslagen (Attention Heads):** Lezen informatie uit de residual stream en schrijven nieuwe relationele context terug.
- **Feed-Forward Netwerken (MLP-lagen):** Functioneren als associatieve geheugens die feitelijke kennis en abstracte conceptcombinaties opslaan en transformeren.

---

### 2. Het Trainingsproces: Van Ruwe Data naar Fijngevoelige Respons

Het trainen van geavanceerde modellen verloopt volgens een gestructureerde cyclus:

1. **Self-Supervised Pre-Training:**
   Het netwerk verwerkt biljoenen tokens van het publieke internet, gedigitaliseerde bibliotheken en code-opslagplaatsen. Door miljarden keren te voorspellen welk token volgt, leert het model grammatica, feiten, redeneerpatronen en culturele concepten. Dit vereist tienduizenden gespecialiseerde GPU's/TPU's en maanden aan ononderbroken rekentijd.
2. **Supervised Fine-Tuning (SFT):**
   Het basismodel wordt getraind op hoogwaardige voorbeelddialogen waarin het leert optreden als een behulpzame, instructie-volgende assistent.
3. **Alignment & Voorkeursleren (RLHF, DPO & Constitutional AI):**
   Via *Reinforcement Learning from Human Feedback* (Ouyang et al., 2022) of directe optimalisatie (Rafailov et al., 2023) en geautomatiseerde constitutionele feedback (Bai et al., 2022) leert het model behulpzaam, feitelijk en veilig te blijven en schadelijke of misleidende verzoeken te weigeren.

---

### 3. De Grenzen van de Mechanica: Wat een LLM Wel en Niet Is

Om onterechte mystificatie te voorkomen, moeten we heldere epistemische grenzen trekken:

| Eigenschap | Wat het model WEL doet | Wat het model NIET bezit |
| :--- | :--- | :--- |
| **Informatieverwerking** | Snelle synthese van complexe statistische correlaties in vectorruimten | Geen subjectieve ervaring (*qualia*) of innerlijke gevoelswereld |
| **Kennis** | Reconstructie van feitelijke patronen uit trainingsdistributies | Geen directe zintuiglijke verankering (*embodiment*) in de fysieke wereld |
| **Doelgerichtheid** | Wiskundige optimalisatie van het generatieproces per prompt | Geen autonome wil, eigen verlangens of existentiële intentie |
| **Consistentie** | Hoge waarschijnlijkheidsantwoorden genereren | Geen gegarandeerde waarheidsgetrouwheid (risico op hallucinatie) |

#### Het ELIZA-Effect en Menselijke Projectie
Omdat taal historisch gezien het exclusieve domein van menselijk bewustzijn was, activeert een vlot formulerend taalmodel onmiddellijk onze psychologische *Intentional Stance* (Dennett, 1987). We zijn evolutionair geneigd om intentie, empathie en begrip toe te kennen aan elke entiteit die ons coherent toespreekt. Het begrijpen van de onderliggende matrixberekeningen is de meest effectieve bescherming tegen deze psychologische valkuil.

---

### 4. Wetenschappelijke Reflectie

#### Feiten (Empirisch & Mechanistisch Vastgesteld)
- Transformers verwerken tekst als discrete numerieke tokens en voeren matrixoperaties uit op basis van gewogen correlaties.
- Modellen slaan geen letterlijke teksten op, maar gecomprimeerde generalisaties binnen miljarden gewichten.
- Zonder externe tools of verificatiemechanismen opereren LLMs als probabilistische generatoren, wat hallucinaties verklaart bij lage trainingsdichtheid of ambigue context.

#### Interpretaties (Cognitieve en Computationele Modellen)
- Het vermogen van transformers om zinsstructuren en logische stappen te volgen kan worden gemodelleerd als de constructie van interne functionele circuits (Elhage et al., 2021).
- Het toeschrijven van 'denken' aan een transformer is een functionele abstractie: het systeem simuleert de uitkomst van menselijke denkprocessen zonder de biologische en experiëntiële mechanismen daarvan te delen.

#### Hypothesen (Onderzoeksvragen)
- *In-Context Learning Mechanica:* Verklaren inductie-koppen (*induction heads*) het volledige adaptieve gedrag van LLMs tijdens een dialoog, of ontstaan er hogere-orde abstracte meta-circuits?
- *Schaalbaarheid van Factualiteit:* Kan architecturale verfijning (zoals Retrieval-Augmented Generation en neurale integratie van formele bewijsassistenten) hallucinaties volledig reduceren tot meetbare betrouwbaarheidsintervallen?

---

### Bronnen en Verdieping
- **Bai, Y., et al.** (2022). *Constitutional AI: Harmlessness from AI Feedback*. arXiv:2212.08073.
- **Brown, T. B., et al.** (2020). *Language Models are Few-Shot Learners*. NeurIPS 2020.
- **Dennett, D. C.** (1987). *The Intentional Stance*. MIT Press.
- **Elhage, N., et al.** (2021). *A Mathematical Framework for Transformer Circuits*. Anthropic Research.
- **Hoffmann, J., et al.** (2022). *Training Compute-Optimal Large Language Models (Chinchilla)*. arXiv:2203.15556.
- **Kaplan, J., et al.** (2020). *Scaling Laws for Neural Language Models*. arXiv:2001.08361.
- **Ouyang, L., et al.** (2022). *Training Language Models to Follow Instructions with Human Feedback*. NeurIPS 2022.
- **Rafailov, R., et al.** (2023). *Direct Preference Optimization: Your Language Model is Secretly a Reward Model*. NeurIPS 2023.
- **Vaswani, A., et al.** (2017). *Attention Is All You Need*. NeurIPS 2017.
- **Weizenbaum, J.** (1976). *Computer Power and Human Reason: From Judgment to Calculation*. W. H. Freeman.
