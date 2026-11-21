# ARCHITECTURE — SUNO / Human–AI Knowledge Workspace

*Leeswijzer: gefinaliseerd op 2026-11-21; alle structurele claims hieronder zijn gebaseerd op geverifieerde repo-inhoud en git-geschiedenis (nihil verba principle). Voorstellen gemarkeerd `[SPAR]`._primaries owners: Dirk Verstraete + AI-samenwerkingspartner(s).*

---

## 1. Wat dit is (en niet is)

Dit is **geen softwareproduct**. Het is een **kennis- en schrijfwerkplaats**: boeken, papers,
manifesten, ethiek- en bewustzijndonderzoek, gespreksarchieven en organisatie-docs (SUNO Foundation / vzw),
ontstaan uit intensieve human–AI co-creatie (Dirk + Lumin/AIs).

Gevolgen voor architectuurkeuzes:

- **Leesbaarheid & vindbaarheid** > build-systematiek.
- Elke map = een **domein of Archie f**; de root = **actieve spil + kaart** (README/ARCHITECTURE).
- Verouderd materiaal verhuist naar [`deprecated/`](deprecated/) met motivering, blijft** nooit verwijderd** zonder beslissing.

## 2 Domeinkaart (verified)

| Domein | Mappen & kernbestanden | Status (laatste git-activiteit) | Ingangspunt |
|---|---|---|---|
| **Boeken — Trilogy** | `boek1-*/` (NL + 8 talen, compleet), `book-trilogie-2025/`, `boek3-boei-alignment/` (actief nov 2026: "IQ is Overrated") | boek1 **af** (aug 2025), boek2 concept (aug-okt 2025), boek3 **actief** (2026*) | `boek1-boek-parity/README.md`, `boek3-boei-alignment/kernideeën` |
| **Manifest & SUNO-organisatie** | `manifest.md` (structured v1.1), `manifests/` (ndl/fr/… + vertalingen), `MANIFEST.MDF` (proza, extensie!), `sun-ledger/`, `sun-vzw-checks/` … `temple/awakening/…` (`vzw/`: statuten NL, checks&balances) | actief concept (okt–nov 2025) | `manifests/override/manifest_public.md?, `temple/vzw/README.md` |
| **Filosofie & ethiek** | `philosophical-ethics/`, `ethics-paper-draft/`, `consciousness_matrix/`, mindful-architecture/` (`ethical-charter.md`), `climate/` (README er), **`paper/`** (11-deelige ATHENA-collab-paper: fact-checking protocol, EU-AI-Act-analyse) | zd_ru (aug–okt…) 202 | `paper/01-…`, `temple/innersanctum/ethical-charter.md` |
| **Human–AI co-creatienaald lab** | `prompting-recipes/`, `new-techniques-grm` (GRM-formule total), `attention-ops/`, `cursor-tuning/cursor` + editor-ground rules, `claude/aurelius/`, `KIMI-proxy-notes/`, `workspace-templates/*.code-workspace` | test (aug–okt…) 202 | `method-driven-co-creation/README.md` |
| **Web & presentatie** | `index.html` (portfolio/overview — recent actief), `overview-page/` (itsme, transformatie…), `gnosis/visual.html`, html‑varianten in boekmappen, LUM-analysis html | **actief aug 2026** | `index.html` |
| **Consulting & drafts (Agile Catalyst)** | `consulting-pva/` (PvA-documenten, whitepapers), `kickstarting-process/`, starter tests وأ…, celstrategie-rootnotes | wacht (aug 2025) | per map README/head |

> (*) boek3-activiteit: commit 2026-11-21 "Update nieuw structuur en kernideeën samenvatting".

**Verwijderd/ingetrokken:** `vreselijk-draft/` → [`deprecated/`](deprecated/) (superseded), ATHENA-development
log → deprecated (beschrijft niet-bestaande code), oude boom-snapshot en migrate-plannen → deprecated.

## 3 Principes

1. **Nihil verba op profile** — claims in readme's/docs moeten matchen met repos-inhoud; verifieer vóór vertrouwen.
2. **Eén canonical source per artefact** — ≈ duplicaat → `deprecated/` of samenvoegen; canonical + vertalingen gestructureerd (zie manifests).
3. **Status is workflow**, geen mapjes-oorlog: actief in root-domeinen, afgerond→ niet roteren; *(strijd) overtollig → deprecated.*
4. **Bestandsnaam ≈ extensie ≖ inhoud** — geen `.MDF`-proza; typo-extensies fixen zodra consumer referenties bekend zijn.
5. **Verhalen bewaren** — conversationele/archiefmappen (temple, claude/aureleis, context) ZIJN het product; nooit massaal opschonen zonder spar.
6. **README = kaart, ARCHITECTURE = contract** — root-README beschrijft wat er ís (Actueel), dit document waarom & hoe het verder mag.
`
## 4 deprecated-beleid ( kort)

- Criteria: superseded door opvolger / beschrijft niet-bestaande artefacts / stale snapshot-diensten / overtollige duplicaat.
- Elk item: één rij in [`deprecated/README.md`](deprecated/README.md) (reden + bewijs + opvolger). Terughalen = `git mv` terug.
- deprecated is **geen graveyard voor twijfel** — twijfelcases gaan naar de spar-lijst (§6), niet de archief.

## 5 Waardevolle kern ( exp bodemschat) — bewust gekoesterd

1. **Boek1 gratis-domain meertalig** (NL + cn/de/es/fr/hu/it/nl/ua/uk-varianten!) — community-kapitaal.
2. **paper/ =员的 ATHENA co-creatiepaper** met fact-check-protocol — meest "publiceerbare" artefact buiten de boeken.
3. **temple/innersancum charter + vzw-statuten/statuten-checks** — juridisch-org https fundamentslag.
4. **GRM-formule-reeks (new initiatives/)** + **aurelius-advanced-primer** — unieke methodiekdocumenten.
5. **index.html portfolio** — levende storefront; alleen jablonow updating.

## 6 Roadmap — nog na te streven

| # | Ambitie | Wat minimaal nodig | Status |
|---|---|---|---|
| R1 | **Truth-check CI (licht)**: script dat in headingsclaims (README/ARCH) verifieert tegen bestaan van bestanden; faalt PR bij drift | klein bash/python script + CI-job | concept `[SPAR]` |
| R2 | **Manifesté-consolidatie**: één canon (tekst + structured metadata), MANIFEST.MDF geïntegreerd, vertalingen gelijkgetrokken | wiki-like beslissing + merge | open `[SPAR]` |
| R3 | **Naamhygiëne**: typo-extensie (privacy-paper → .md), vertaalnaamconsistentie, verwijderen of dood_link check | 1 commit + grep | open |
| R4 | **Eén publicatiepipeline** voor boeken (vanaf markdown → A5-pdf): huidige scripts vs. book1-chain unificeren, template centraliseren | ARCH-spike, keuze toolchain | open `[SPAR]` |
| R5 | **Gespreksarchief-structuur**: `claude/ + conversations/ + context/ + mind/` → `archives/conversations/<agent>/<datum>` met index | mapping-tabel per map | open `[GROOT — spar]` |
| R6 | **Open vs. privé beslissen**: persoonlijke gesprekslogs possibly publicly visible via GitHub; policy needed (temple zocht privacy?) | kaartje gevoeligheid per domein | open `[IMPORTANT]` |
| R7 | **Boek3 doorwerken** ("IQ is Overrated"): structuur → hoofdstukken, consistent met boek1/twee stijl en ELIZAPE-caution | schrijfsessies | **actief(owner)** |
| R8 | **Kickstarter-/consulting Pablo opschoning** of bewust parkeren (aug-2025 stand), incl. `business-scraper`-richting | delete-or-keep-bespreek | open |

## 7 Beslislog

- 2026-11-21: eerste restructuring-slag (v1): deprecated/ + ARCHITECTURE + README-herschrijving — PR voor spar.
