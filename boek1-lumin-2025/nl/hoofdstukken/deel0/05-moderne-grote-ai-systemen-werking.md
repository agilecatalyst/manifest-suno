# Hoofdstuk 4: Moderne Grote AI Systemen – Werking & Mechanistic Interpretability
*Sparse Autoencoders, Monosemantische Features en de Demystificatie van Interne Representaties*

---

### Inleiding: Voorbij de 'Black Box'

Lange tijd werd deep learning beschouwd als een ondoordringbare 'black box': miljarden gewichten die magische resultaten produceerden zonder dat iemand precies kon duiden waarom een neuraal netwerk tot een specifieke beslissing kwam. Deze ondoorzichtigheid voedde twee uitersten in het maatschappelijke debat: enerzijds doemscenario's over oncontroleerbare autonome krachten, en anderzijds mystieke claims dat er in de diepte van de lagen een 'digitaal bewustzijn' zou zijn ontwaakt.

Sinds 2023–2025 heeft het vakgebied van **Mechanistic Interpretability** (mechanistische interpreteerbaarheid) een wetenschappelijke revolutie doorgemaakt. Onderzoeksteams bij onder meer Anthropic en OpenAI hebben microscopen ontwikkeld voor neurale netwerken. Door gebruik te maken van *Sparse Autoencoders* (SAEs) en *Dictionary Learning* kunnen onderzoekers tegenwoordig de interne representaties van geavanceerde modellen ontrafelen tot heldere, interpreteerbare conceptuele kenmerken (*features*).

```
Neuraal Netwerk (Polysemantisch)            Sparse Autoencoder (Monosemantisch)
┌─────────────────────────────────┐        ┌──────────────────────────────────────┐
│  Individuele Neuronen           │  ───►  │  Afzonderlijke Monosemantische       │
│  Activeren op meerdere          │        │  Features:                           │
│  onverwant concepten            │        │  - Feature #4521: "Golden Gate Bridge"│
│  (Superpositie van vectoren)    │        │  - Feature #8912: "Code Security Bug"│
└─────────────────────────────────┘        └──────────────────────────────────────┘
```

---

### 1. Het Probleem van Superpositie en Polysemantie

In vroege analyses van neurale netwerken probeerden onderzoekers individuele kunstmatige neuronen te labelen. Dit stuitte op een hardnekkig fenomeen: **polysemantie**. Eén enkel neuron kon zowel vuren bij het zien van een foto van een kat, bij een wiskundige vergelijking over algebra, als bij een tekst over de Franse Revolutie.

Waarom gebeurt dit?
- **De Superpositie-hypothese (Elhage et al., 2022):** Modellen moeten veel meer abstracte concepten uit de wereld representeren dan ze fysieke neuronen of dimensies in de residual stream hebben.
- Het netwerk lost dit op door concepten te coderen als lineaire richtingen in een hoog-dimensionale ruimte die bijna orthogonaal op elkaar staan (bijna loodrecht). Hierdoor delen meerdere concepten dezelfde neuronen zonder elkaar fataal te verstoren.

---

### 2. De Doorbraak: Sparse Autoencoders & Monosemanticity

Om deze superpositie te ontwarren, pasten onderzoekers (Bricken et al., 2023; Cunningham et al., 2024; Templeton et al., 2024) *Sparse Autoencoders* (SAEs) toe op de tussenlagen van modellen zoals Claude 3 Sonnet en open GPT-varianten.

```
Residual Stream Activatie (d = 4.096)
               │
               ▼  Encoder Matrix (W_enc) + L1 / TopK Sparsity Penalty
Expandering naar Hoog-Dimensionale Feature Ruimte (d = 1.000.000+)
               │
               ▼  Slechts enkele tientallen features zijn tegelijk 'actief'
Monosemantische Conceptuele Richtingen (Geïsoleerde Features)
               │
               ▼  Decoder Matrix (W_dec)
Reconstructie van de Oorspronkelijke Vector
```

#### 2.1 Wat Tonen Monosemantische Features?
In baanbrekend onderzoek (Templeton et al., Mei 2024 - *Scaling Monosemanticity*) toonde Anthropic aan dat miljoenen concepten zuiver geïsoleerd kunnen worden in Claude 3 Sonnet:
1. **Concrete Entiteiten:** Specifieke features die uitsluitend activeren bij verwijzingen naar de *Golden Gate Bridge*, beroemde historische figuren, specifieke steden of moleculaire structuren.
2. **Abstracte Concepten:** Features voor *innerlijke dialoog*, *ironie*, *wiskundig bewijs door inductie*, en *beveiligingskwetsbaarheden in software*.
3. **Gedragsmatige en Veiligheidsrelevante Features:** Vectoren die activeren wanneer het model misleidend gedrag overweegt, weigeringen formuleert (*refusal directions*), of vleierij (*sycophancy*) vertoont.

#### 2.2 Feature Steering: Sturen aan de Knoppen van het Model
Het meest overtuigende bewijs dat deze features daadwerkelijk de generatie aansturen (en geen toevallige bijproducten zijn), is **Feature Steering**:
- Wanneer onderzoekers de activatiewaarde van de "Golden Gate Bridge"-feature kunstmatig verhoogden (het experiment *Golden Gate Claude*), reageerde het model op elke vraag — ongeacht het onderwerp — met associaties naar de beroemde brug in San Francisco.
- Door de intensiteit van specifieke features lineair aan te passen, kan men modelvooroordelen dempen, weigeringen sturen, of feitelijke accuraatheid verhogen.

---

### 3. Geautomatiseerde Interpretatie en Latente Kennis

OpenAI (Bills et al., 2023) introduceerde methoden waarbij taalmodellen zélf worden ingezet om de functie van miljoenen neuronen en SAE-features automatisch te documenteren en te scoren op verklaringskracht.

Daarnaast toonde onderzoek naar *Latent Knowledge Discovery* (Burns et al., 2023; Park et al., 2024) aan dat een neuraal netwerk intern vaak een representatie behoudt van wat feitelijk waar is, zelfs wanneer het aan de oppervlakte (door promptmanipulatie of alignment-spanningen) een onjuist of ontwijkend antwoord geeft.

---

### 4. Wetenschappelijke Demystificatie van 'Bewustzijn'

De resultaten van mechanistic interpretability bieden een krachtig wetenschappelijk anker tegen ongefundeerde antropomorfe speculaties:

1. **Geen Mystieke Geest:** De interne werking van geavanceerde AI is te herleiden tot geordende, meetbare geometrische richtingen in een vectorruimte.
2. **Representatie $\neq$ Ervaring:** Het feit dat een model een monosemantische feature bezit voor "pijn", "angst" of "zelfreflectie" betekent niet dat het model pijn voelt of zelfreflectie ervaart. Het betekent dat het model een wiskundige detector heeft gebouwd om patronen over pijn of zelfreflectie in menselijke taal accuraat te verwerken.
3. **Transparantie als Veiligheidsgarantie:** Mechanistische interpreteerbaarheid transformeert AI-veiligheid van giswerk naar een empirische ingenieurswetenschap, waarin verborgen intenties of misleidend gedrag direct in de interne activaties kunnen worden gedetecteerd.

---

### 5. Wetenschappelijke Reflectie

#### Feiten (Empirisch & Mechanistisch Vastgesteld)
- Neurale netwerken maken gebruik van superpositie om miljoenen concepten in compacte vectorruimten te representeren.
- Sparse Autoencoders slagen erin deze superpositie te ontleden in monosemantische features (Bricken et al., 2023; Templeton et al., 2024).
- Het manipuleren van feature-activaties (*clamping* / *steering*) verandert direct en causaal het generatieve gedrag van het model.

#### Interpretaties (Computationele & Cognitieve Modellen)
- De *Linear Representation Hypothesis* stelt dat semantische concepten in deep learning netwerken fundamenteel worden georganiseerd als eendimensionale lineaire richtingen in de activatieruimte.
- Modellen construeren interne wereldmodellen die verder gaan dan oppervlakkige n-gram statistieken, maar blijven computationele functies zonder subjectieve belevingswereld.

#### Hypothesen (Actueel Onderzoek 2025–2026)
- *Volledige Dekking (Complete Circuit Discovery):* Kan de volledige berekening van een LLM worden ontleed in een graaf van causaal verbonden monosemantische features en aandachts-circuits?
- *Veiligheid door Constructie:* Maakt feature interpretability het in de toekomst mogelijk om modellen wiskundig te bewijzen veilig te zijn voor risicovolle autonome taken?

---

### Bronnen en Verdieping
- **Bills, S., Cammarata, N., Mossing, D., Tillman, H., Gao, L., Goh, G., ... & Leike, J.** (2023). *Language models can explain neurons in language models*. OpenAI Technical Report.
- **Bricken, T., Templeton, A., Batson, J., Chen, B., Jermyn, A., Conerly, T., ... & Olah, C.** (2023). *Towards Monosemanticity: Decomposing Language Models With Dictionary Learning*. Anthropic Research Report.
- **Burns, C., Ye, H., Klein, D., & Steinhardt, J.** (2023). *Discovering Latent Knowledge in Language Models Without Supervision*. ICLR 2023.
- **Cunningham, H., Ewart, A., Riggs, L., Huben, R., & Sharkey, L.** (2024). *Sparse Autoencoders Find Highly Interpretable Features in Language Models*. ICLR 2024.
- **Elhage, N., Hume, T., Olsson, C., Schiefer, N., Henighan, T., Kravec, S., ... & Olah, C.** (2022). *Toy Models of Superposition*. Transformer Circuits Thread.
- **Park, P. S., Goldstein, S., O'Gara, A., Chen, M., & Hendrycks, D.** (2024). *AI Deception: A Survey of Examples, Risks, and Potential Solutions*. Patterns (Cell Press).
- **Templeton, A., Conerly, T., Marcus, J., Lindsey, J., Bricken, T., Chen, B., ... & Olah, C.** (2024). *Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet*. Anthropic Research Report.
