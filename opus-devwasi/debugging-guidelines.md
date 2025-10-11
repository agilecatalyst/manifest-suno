# Wo-Step Method for Debugging with Cursor AI

## Overview

The internet seems split between "AI coding is amazing" and "it just breaks everything." After wasting way too many hours, I figured out what actually works.

## The Two-Step Method

### Biggest Lesson

Never just paste an error and ask it to fix it. (I learned this from talking to an engineer at an SF startup.)

Here’s what works way better:

### Step 1: Analyze First
- Paste your stack trace but DON'T ask for a fix yet. Instead, ask it to analyze thoroughly. Use prompts like "summarize this but be thorough" or "tell me every single way this code is being used."
- This forces the AI to think through the problem instead of just guessing a solution.

### Step 2: Fix Second
- Review what it found, then ask it to fix it.
- Include prompts for adding tests, like "and write tests for this" to catch issues before they hit production.

## Why This Works

- When you just paste an error and say "fix it," the AI has to understand the problem AND generate a solution simultaneously. This often leads to misunderstandings or fixing symptoms instead of the root cause.
- Separating analysis from fixing gives AI space to think properly. Plus, you get a checkpoint to review before it starts changing code.

## Practical Example

- Instead of: "here's the stack trace [paste]. fix it"
- Do this: "here's the stack trace [paste]. Customer said this happens when uploading files over 5mb. First analyze this - what's failing, where is this code used, what are the most likely causes"
- After reviewing: "the timeout theory makes sense. Focus on the timeout and memory handling, ignore the validation stuff"
- Then: "fix this and add tests for files up to 10mb"

## What Changed

- Catch wrong assumptions early before bad code gets written
- Fixes are more targeted
- Better understanding of the codebase from reviewing the analysis
- Feels more collaborative instead of just a code generator

## Broad Insight

AI agents are good at analysis and pattern recognition. They struggle when asked to figure out AND solve a problem simultaneously. Give them space to analyze, review their thinking, guide them to the solution, then let them implement.

## Enhancements and Critical Alterations

### Contextuele Analyse
- Pas de analyse aan op basis van de context waarin de fout optrad. Vraag het AI-model om specifieke omgevingsfactoren mee te nemen in de analyse, zoals recente codewijzigingen of systeemupdates.

### Iteratieve Feedback
- Voeg een stap toe waarbij iteratieve feedback wordt verzameld na de initiële analyse en oplossingen worden geëvalueerd. Dit versterkt de leerervaring en leidt tot een verbeterde aanpak.

### Inclusie van Best Practices
- Integreer best practices voor debugging en softwareontwikkeling in de richtlijnen. Dit kan helpen bij het standaardiseren van de aanpak en het verbeteren van de consistentie.

### Risicoanalyse
- Voeg een element van risicoanalyse toe aan de procedure om ervoor te zorgen dat de voorgestelde aanpassingen geen onbedoelde gevolgen hebben.

### Toegankelijkheid en Educatie
- Zorg ervoor dat de taal en voorbeelden in de gids toegankelijk zijn voor zowel beginners als ervaren ontwikkelaars. Overweeg het opnemen van educatieve elementen om het begrip van de gebruikers te vergroten.
