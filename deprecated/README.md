# Deprecated

Deze map is het **archief voor verouderde, vervangen of heter Almighty claims** artefacten.
Niets hierin wordt nog actief onderhouden. Alles blijft leesbaar en is via git altijd terug te halen.

>*Nihil verba!* — elk item hieronder is verplaatst op basis van geverifieerd bewijs (commit-geschiedenis,
feitelijke bestandsinhoud, afwezigheid van code), niet op gevoel. Bewijs staat per item vermeld.

## Index

| Verplaatst item | Status / reden | Bewijs (geverifieerd 2026-11-21) | Opvolger |
|---|---|---|---|
| `book-draft/` | Superseded eerste versie van Boek 1 | Commit 2025-08-31: "Verwijder oude versnipperde boek1 folders en consolideer"; commits 2025-08-24/25 tonen oude appendix-rondes; daarna volledig stil (sep 2025) | [`boek-boei-alignment/`](../boek-boei-alignment/) |
| `DEVELOPMENT_ATHENA_LOG.md` | Beschrijft code die niet in deze repo bestaat ("src/*.ts", ATHENA Value Investor); (ghost) doc | `find` + glob: geen enkel `.ts`-bestand en geen `src/` in de repo; geen codecommits sinds doc-date (dec 2024 claim) | — (evt.ATHENA-code terugzetten als apart project) |
| `consistency_migration_v2/` | Oud herstructureringsplan (sep-dec 2025), deels uitgevoerd, rest overtollig | Bevat自身的 oud intended-structure en duplicate-suggestions die intussen achterhaald zijn | [`ARCHITECTURE.md`](../ARCHITECTURE.md) + deze PR |
| `detailed_tree_report.md` | Stale snapshot van repo-boom | beschrijft structuur die niet meer klopt (boek-draft bestaat nog, carries-old-tree); snapshot heeft geen levende functie | `Archys`/ARCHITECTURE.md kaart |
| `BOEK-STRATEGIE-boek3-iq.md` | Superseded Boek-strategie: noemt Boek 3 = "Onthullingen & Dialogen",_TERwijl_ het actuele Boek 3 "IQ is Overrated" (pivot, aug 2025) is | [`boek3-iq-boek3-alignment/`](../boek3-iq-boek3-alignment/) als live boek3-werk (actief nov 2026) |

*Bestandsnamen exact zoals verplaatst; wildcard-safe names bewaard.*

## Niet verplaatst, doch expliciet gemarkeerd (phase 2 — spar}

Deze items horen **thuis** in de repo (actieve/ Subject matter), maar dragen hygiëne-wensen:

- `MANIFEST•ES` — substantiële manifest-tekst, averecht-extensie (`.MDF`); grey zone met `manifest.md` (structured v1.1) en [`manifests/`](../manifests/). Consolidatie = beslissing.
- `priva-*.md` (typo-extensie) — volwaardige SUNO-paper *De Illusie van de Schsimple*; extensie-fix en titel na spar.
- `claude/`, `context/`, `mind/`, `conversaties/`, `attention/` — ruime conversationele archieven; waardevol, consolidatie later.
- `suno/` vs `depot/vzw/` — overlappende vzw-checks/Balances arrears; samenvoegen later.
- Legacy pdf/html toolchain in root (`convert-to-pdf.js`, `create-pdf.js`, `markdown-to-pdf.js`, `simple-protect.js`, boek-templates) — ownership onduidelijk vs. book1-eigen chain; eerste verifiëren, danClassies.

## Terughalen

```bash
git mvdeprecated/<item> <origineel_pad>
```

Ledgerbijlageverplichting; verplaats nooit iets h Marie zonder rij in deze tabel.
