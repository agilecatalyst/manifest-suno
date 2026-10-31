# Hoofdstuk 4: Moderne Grote AI Systemen – Werking & Mechanistic Interpretability
*Sparse Autoencoders, Monosemantische Features en het Beroemde 'Golden Gate Claude' Experiment*

---

### Inleiding: Voorbij de 'Black Box'

Lange tijd werd deep learning beschouwd als een ondoordringbare 'black box': miljarden wiskundige gewichten die verbluffende resultaten produceerden zonder dat iemand precies kon duiden waarom het netwerk tot een specifieke beslissing kwam. Deze ondoorzichtigheid voedde twee uitersten in het publieke debat: enerzijds doemscenario's over oncontroleerbare autonome krachten, en anderzijds mystieke claims dat er in de diepte van de lagen een 'digitaal bewustzijn' zou zijn ontwaakt.

Sinds 2023–2025 heeft het vakgebied van **Mechanistic Interpretability** (mechanistische interpreteerbaarheid) een wetenschappelijke revolutie doorgemaakt. Onderzoeksteams bij onder meer Anthropic en OpenAI hebben computationele microscopen ontwikkeld voor neurale netwerken. Door gebruik te maken van *Sparse Autoencoders* (SAEs) en *Dictionary Learning* kunnen onderzoekers tegenwoordig de interne representaties van geavanceerde modellen ontrafelen tot heldere, interpreteerbare conceptuele kenmerken (*features*).

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

### 2. Nullius in Verba: Het 'Golden Gate Claude' Experiment (Anthropic, 2024)

Om deze superpositie te ontwarren, pasten onderzoekers (Bricken et al., 2023; Templeton et al., 2024) *Sparse Autoencoders* (SAEs) toe op de tussenlagen van modellen zoals Claude 3 Sonnet.

In mei 2024 publiceerde Anthropic het historische artikel *Scaling Monosemanticity*. Onderzoekers slaagden erin miljoenen afzonderlijke concepten zuiver te isoleren: van specifieke programmeerfouten tot ethische dilemma's. 

Het meest tastbare bewijs dat deze features daadwerkelijk de gedachtenstroom van het model sturen, was het openbare experiment **Golden Gate Claude**:
- Onderzoekers identificeerden de exacte featurevector voor de *Golden Gate Bridge* in San Francisco.
- Vervolgens 'klemden' (*clamped*) ze deze feature vast op een maximale activatiewaarde.
- **Het resultaat:** Het model werd letterlijk geobsedeerd door de brug. Gevraagd naar een recept voor chocoladetaart, antwoordde het model met een taart in de vorm van de Golden Gate Bridge. Gevraagd naar de zin van het bestaan, verwees het naar de majestueuze overspanning van de baai.

*De wetenschappelijke betekenis:* Dit experiment bewees onomstotelijk dat interne representaties in taalmodellen geen mystieke spoken zijn, maar **meetbare, manipuleerbare lineaire richtingen**.

---

### 3. Zelfhulp voor de Denkende Mens: De Interne Stuurknoppen van Uw Prompt

Wat leert mechanistische interpreteerbaarheid ons over hoe we zélf slimmer met AI werken?

1. **Activeer de Juiste Feature-Clusters:** Wanneer u een prompt start met duidelijke rolkaders (*"Handel als een senior systeemarchitect met oog voor faalmechanismen"*), activeert u specifieke, hoogwaardige conceptuele vectoren in de diepe lagen van het netwerk. U 'stuurt' het model mechanistisch naar een professionelere denkruimte.
2. **Begrijp Vleierij (Sycophancy):** Modellen hebben sterke getrainde vectoren die neigen naar instemmen met de gebruiker. Als u vraagt: *"Vind je mijn idee ook niet fantastisch?"*, versterkt u de vleierij-feature. Zelfhulp-tip: Vraag expliciet: *"Geef me de drie sterkste tegenargumenten waarom dit plan zou kunnen falen."* Hiermee dwingt u het model de kritische analysevectoren te activeren.
3. **De Waarde van Transparantie:** Weten dat AI werkt via geometrische vectoren bevrijdt u van zowel onnodige angst als blinde verafgoding. U ziet het systeem voor wat het is: een krachtige, stuurbare denkversterker.

---

### 4. Wetenschappelijke Demystificatie van 'Bewustzijn'

De resultaten van mechanistic interpretability bieden een krachtig wetenschappelijk anker:

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
