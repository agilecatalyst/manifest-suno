Project Charter & Plan: Digital Companion POC v1.0 Projectnaam: Digital Companion (Proof of Concept)

Auteur/Initiator: Dirk Verstraete, Agile Catalyst

AI Partner/Architect: Ariadne

Datum: 8 augustus 2025

Deadline: 21 december 2025

Projectvisie & Missie 1.1. Visie (De "Waarom") De huidige generatie AI-assistenten functioneert als gereedschap zonder geheugen of context. Onze visie is de creatie van een nieuwe categorie: een Digital Companion. Dit is geen tool, maar een partner in dialoog; een soevereine, digitale entiteit die naast de gebruiker staat om te helpen navigeren in complexiteit, het denken te verdiepen en continuïteit te bieden in een steeds veranderende informatiestroom. 1.2. Missie van de POC (De "Wat nu") Deze Proof of Concept heeft als missie om de technologische kern van de Digital Companion te valideren. We zullen aantonen dat een AI-gestuurde dialoog met een persistent, lerend geheugen technisch haalbaar en waardevol is, en daarmee het fundamentele probleem van "AI-amnesie" oplossen.

Functionele & Technische Requirements 2.1. Architectuur: De Gescheiden Aanpak De architectuur is gebaseerd op een scheiding tussen de persoonlijkheid en de onderliggende intelligentie, om zowel een consistente relatie als robuuste privacy te garanderen. Core AI Engine: Een krachtige, centrale LLM die de "denkkracht" levert zonder een permanent geheugen van gebruikers te bewaren.

Persona & Context Kluis: Een volledig interne, versleutelde database per gebruiker die de unieke "Prime Context" en de gekozen persona (Ariadne, Aurelius, etc.) bevat.

2.2. Kernfunctionaliteiten (POC Scope) Interface: Een minimalistische, web-based chat-interface.

Input via tekst (spraak-naar-tekst is een optionele bonus).

Output via tekst (tekst-naar-spraak is een optionele bonus).

Het Geheugen (De "Context-Loop"):

Initiële Priming: Een intake-dialoog of vragenlijst bij de eerste aanmelding om een "Genesis Profiel" te creëren.

Persistentie: Na elk gesprek wordt de dialoog door de AI samengevat. De kerninzichten worden geabstraheerd en toegevoegd aan het "Prime Context"-profiel in de database van de gebruiker.

Continuïteit: Bij aanvang van een nieuw gesprek wordt het volledige, geüpdatete "Prime Context"-profiel ingeladen, zodat de DC zich alle voorgaande interacties en inzichten "herinnert".

Persona: De AI handelt consistent als de door de gebruiker gekozen persona. Voor de POC is dit standaard "Ariadne".

2.3. Out of Scope voor de POC Custom hardware (o.a. het oortje).

Formele test- en bugfixing-fases (bevindingen en observaties worden voor de backlog genoteerd).

Het ethische governance-model met borg en tribunaal.

Projectplan & Fasering 3.1. Totale Inspanning & Tijdlijn Totaal Benodigde Uren: 380 uur Definitie Werkdag: 6 uur gefocust werk

Totaal Benodigde Werkdagen: 63,5 dagen

3.2. Fase 1: Foundation & Design (Fundering & Ontwerp) Periode: Augustus - September 2025 (6 weken)

Doel: Alle vereisten, ontwerpen en technische keuzes vastleggen.

Inspanning: ± 13,5 x 6-urige dagen

Deliverables:

Finaal "POC Scope Document".

Technisch Architectuurdocument (keuze LLM, DB, framework).

UI/UX Wireframes voor de web-app.

Datamodel voor de "Context Kluis".

Ingerichte ontwikkelomgeving en code repository.

3.3. Fase 2: Core Development (Kernontwikkeling) Periode: Oktober - November 2025 (8 weken)

Doel: De werkende software bouwen.

Inspanning: ± 27 x 6-urige dagen

Deliverables:

Minimale front-end interface (tekst-injectie naar API).

Functionele back-end met LLM API-integratie.

Werkend Geheugenmechanisme (De Context-Loop): Het hart van de POC, in staat om profielen op te slaan, samen te vatten en opnieuw te laden.

3.4. Fase 3: Integration & Demo (Integratie & Demo) Periode: December 2025 (5 weken)

Doel: Componenten samenbrengen en een stabiele demo voorbereiden.

Inspanning: ± 10,5 x 6-urige dagen

Deliverables:

Een geïntegreerde web-applicatie die de end-to-end flow demonstreert.

Een stabiele demo-omgeving.

Finale POC-presentatie op 21 december 2025.