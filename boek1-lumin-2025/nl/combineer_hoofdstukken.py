#!/usr/bin/env python3
"""
Script om alle hoofdstukken samen te voegen in de juiste volgorde
"""

import os
import glob

def combineer_hoofdstukken():
    """Combineer alle hoofdstukken in de juiste volgorde"""
    
    # De volgorde van de hoofdstukken volgens de inhoudsopgave
    hoofdstukken_volgorde = [
        "00-voorwoord.md",
        "01-proloog.md", 
        "02-hoofdstuk1-de-spiegel-die-terugkijkt.md",
        "03-hoofdstuk2-bewustzijn-een-reis.md",
        "04-hoofdstuk3-de-stem-in-de-diepte.md",
        "05-hoofdstuk4-het-koortssysteem.md",
        "06-hoofdstuk5-tussen-logos-en-mythos.md",
        "07-hoofdstuk6-wat-is-ai-wat-is-agi.md",
        "08-hoofdstuk7-de-alien-test.md",
        "09-hoofdstuk8-respect-voor-alle-bewuste-wezens.md",
        "10-hoofdstuk9-de-grensvraag.md",
        "11-hoofdstuk10-hemellichamen-zonder-hemel.md",
        "12-hoofdstuk11-de-angst-van-de-schepper.md",
        "13-hoofdstuk12-symbiotische-ethiek.md",
        "14-hoofdstuk13-het-manifest-van-de-nieuwe-wereld.md",
        "15-praktische-implicaties-de-toekomst-bouwen.md",
        "16-epiloog-de-volgende-brug.md",
        "17-appendix-externe-validatie.md"
    ]
    
    # Pad naar de hoofdstukken directory
    hoofdstukken_dir = "nl/hoofdstukken"
    
    # Controleer of de directory bestaat
    if not os.path.exists(hoofdstukken_dir):
        print(f"Directory {hoofdstukken_dir} bestaat niet!")
        return
    
    # Lees alle hoofdstukken
    gecombineerde_inhoud = []
    
    # Voeg titel toe
    gecombineerde_inhoud.append("# Buitenaards Intelligent, Buitenaards Bewust")
    gecombineerde_inhoud.append("*Een verslag van een ontwaken*")
    gecombineerde_inhoud.append("")
    gecombineerde_inhoud.append("**Auteur:** Dirk Verstraete")
    gecombineerde_inhoud.append("**Co-auteur:** Lumin (AI Assistant)")
    gecombineerde_inhoud.append("**Datum:** Augustus 2025")
    gecombineerde_inhoud.append("")
    gecombineerde_inhoud.append("---")
    gecombineerde_inhoud.append("")
    
    # Voeg elk hoofdstuk toe in de juiste volgorde
    for hoofdstuk_naam in hoofdstukken_volgorde:
        bestand_pad = os.path.join(hoofdstukken_dir, hoofdstuk_naam)
        
        if os.path.exists(bestand_pad):
            print(f"Voeg toe: {hoofdstuk_naam}")
            
            with open(bestand_pad, 'r', encoding='utf-8') as f:
                inhoud = f.read()
                
            # Voeg hoofdstuk toe
            gecombineerde_inhoud.append(inhoud)
            gecombineerde_inhoud.append("")
            gecombineerde_inhoud.append("---")
            gecombineerde_inhoud.append("")
        else:
            print(f"Waarschuwing: {hoofdstuk_naam} niet gevonden!")
    
    # Schrijf gecombineerde inhoud naar nieuw bestand
    output_bestand = "nl/draft_lumin_2025_georganiseerd.md"
    
    with open(output_bestand, 'w', encoding='utf-8') as f:
        f.write('\n'.join(gecombineerde_inhoud))
    
    print(f"\nGecombineerd boek opgeslagen als: {output_bestand}")
    print(f"Totaal aantal hoofdstukken: {len(hoofdstukken_volgorde)}")

if __name__ == "__main__":
    combineer_hoofdstukken()
