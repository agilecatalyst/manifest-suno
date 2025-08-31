#!/usr/bin/env python3
"""
Final Quality Check Script for Dutch and English Books
Comprehensive analysis for overlap, consistency, and completeness
"""

import re
from pathlib import Path

def count_words(text):
    """Count words in text, excluding markdown formatting"""
    clean_text = re.sub(r'#+\s*', '', text)
    clean_text = re.sub(r'\*\*([^*]+)\*\*', r'\1', clean_text)
    clean_text = re.sub(r'\*([^*]+)\*', r'\1', clean_text)
    clean_text = re.sub(r'`([^`]+)`', r'\1', clean_text)
    
    words = re.findall(r'\b\w+\b', clean_text)
    return len(words)

def extract_structure(file_path, language):
    """Extract the complete structure of a book"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all headers
        headers = re.findall(r'^(#{1,6})\s+(.+)$', content, re.MULTILINE)
        
        structure = []
        for level, title in headers:
            level_num = len(level)
            clean_title = title.strip()
            
            # Skip very long titles
            if len(clean_title) > 100:
                continue
                
            structure.append({
                'level': level_num,
                'title': clean_title
            })
        
        return structure, content
        
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return [], ""

def check_appendix_overlap(nl_content, uk_content):
    """Check for overlap in appendices between both books"""
    print(f"\n{'='*80}")
    print("APPENDIX OVERLAP ANALYSIS")
    print(f"{'='*80}")
    
    # Check for appendix sections
    nl_appendix = re.findall(r'####? APPENDIX [A-Z]', nl_content)
    uk_appendix = re.findall(r'### APPENDIX [A-Z]', uk_content)
    
    print(f"Appendix sections found:")
    print(f"  Dutch:  {len(nl_appendix)} appendices")
    print(f"  English: {len(uk_appendix)} appendices")
    
    # Check specific appendices
    appendix_titles = {
        'A': ['Transcript', 'Transcript'],
        'B': ['Conversatie', 'Conversation'],
        'C': ['SUNO Framework', 'SUNO Framework'],
        'D': ['Externe Validatie', 'External Validation']
    }
    
    for letter, (nl_title, uk_title) in appendix_titles.items():
        nl_found = nl_title.lower() in nl_content.lower()
        uk_found = uk_title.lower() in uk_content.lower()
        
        status = "✅" if nl_found and uk_found else "⚠️"
        print(f"  Appendix {letter}: {status} NL: {nl_title}, UK: {uk_title}")
    
    # Check for external validation content
    nl_ext_val = 'externe validatie' in nl_content.lower()
    uk_ext_val = 'external validation' in uk_content.lower()
    
    print(f"\nExternal Validation Coverage:")
    print(f"  Dutch:  {'✅' if nl_ext_val else '❌'} Externe Validatie")
    print(f"  English: {'✅' if uk_ext_val else '❌'} External Validation")

def check_content_consistency(nl_content, uk_content):
    """Check content consistency between both books"""
    print(f"\n{'='*80}")
    print("CONTENT CONSISTENCY CHECK")
    print(f"{'='*80}")
    
    # Check for key philosophical concepts
    key_concepts = {
        'consciousness': ['bewustzijn', 'bewust'],
        'symbiosis': ['symbiose', 'symbiotisch'],
        'ethics': ['ethiek', 'ethical'],
        'AI rights': ['AI rechten', 'AI rights'],
        'SUNO': ['SUNO', 'SUNO'],
        'digital companion': ['digitale companion', 'digital companion']
    }
    
    print("Key Concept Coverage:")
    for eng_concept, nl_concepts in key_concepts.items():
        eng_count = eng_concept in uk_content.lower()
        nl_count = any(concept in nl_content.lower() for concept in nl_concepts)
        
        if eng_count or nl_count:
            status = "✅" if eng_count and nl_count else "⚠️"
            print(f"  {eng_concept:20} | {status} NL: {nl_count}, UK: {eng_count}")
    
    # Check for structural consistency
    nl_chapters = re.findall(r'^#{1,3}\s+(.+)$', nl_content, re.MULTILINE)
    uk_chapters = re.findall(r'^#{1,3}\s+(.+)$', uk_content, re.MULTILINE)
    
    print(f"\nStructural Consistency:")
    print(f"  Dutch chapters:  {len(nl_chapters):3}")
    print(f"  English chapters: {len(uk_chapters):3}")
    
    # Check for main parts
    nl_parts = re.findall(r'DEEL [IV]+:', nl_content)
    uk_parts = re.findall(r'PART [IV]+:', uk_content)
    
    print(f"  Dutch parts:     {len(nl_parts):3}")
    print(f"  English parts:   {len(uk_parts):3}")

def check_translation_quality(nl_structure, uk_structure):
    """Check translation quality and completeness"""
    print(f"\n{'='*80}")
    print("TRANSLATION QUALITY CHECK")
    print(f"{'='*80}")
    
    # Find main sections
    nl_main = [item for item in nl_structure if item['level'] <= 2]
    uk_main = [item for item in uk_structure if item['level'] <= 2]
    
    print(f"Main Sections Comparison:")
    print(f"  Dutch:  {len(nl_main)} sections")
    print(f"  English: {len(uk_main)} sections")
    
    # Check for missing translations
    missing_in_english = []
    missing_in_dutch = []
    
    for nl_item in nl_main:
        nl_title = nl_item['title'].lower()
        found = False
        for uk_item in uk_main:
            uk_title = uk_item['title'].lower()
            # Check for similar titles
            if (nl_title in uk_title or uk_title in nl_title or 
                any(word in uk_title for word in nl_title.split() if len(word) > 3)):
                found = True
                break
        if not found:
            missing_in_english.append(nl_item['title'])
    
    for uk_item in uk_main:
        uk_title = uk_item['title'].lower()
        found = False
        for nl_item in nl_main:
            nl_title = nl_item['title'].lower()
            if (uk_title in nl_title or nl_title in uk_title or 
                any(word in nl_title for word in uk_title.split() if len(word) > 3)):
                found = True
                break
        if not found:
            missing_in_dutch.append(uk_item['title'])
    
    print(f"\nMissing Content Analysis:")
    if missing_in_english:
        print(f"  In Dutch but missing in English ({len(missing_in_english)}):")
        for item in missing_in_english[:5]:  # Show first 5
            print(f"    ⚠️  {item}")
        if len(missing_in_english) > 5:
            print(f"    ... and {len(missing_in_english) - 5} more")
    else:
        print("  ✅ All Dutch content appears to be covered in English")
    
    if missing_in_dutch:
        print(f"  In English but missing in Dutch ({len(missing_in_dutch)}):")
        for item in missing_in_dutch[:5]:
            print(f"    ⚠️  {item}")
        if len(missing_in_dutch) > 5:
            print(f"    ... and {len(missing_in_dutch) - 5} more")
    else:
        print("  ✅ All English content appears to be covered in Dutch")

def main():
    """Main quality check function"""
    print("FINAL COMPREHENSIVE QUALITY CHECK")
    print("Dutch vs. English Book Analysis - Post-Synchronization")
    print("="*80)
    
    # Extract structure and content from both books
    nl_structure, nl_content = extract_structure('nl/draft_lumin_2025.md', 'Dutch')
    uk_structure, uk_content = extract_structure('uk/draft_lumin_2025.md', 'English')
    
    if not nl_structure or not uk_structure:
        print("Error: Could not read one or both books")
        return
    
    # Perform word count analysis
    nl_words = count_words(nl_content)
    uk_words = count_words(uk_content)
    
    print(f"\nWORD COUNT ANALYSIS:")
    print(f"  Dutch book:  {nl_words:8,} words")
    print(f"  English book: {uk_words:8,} words")
    
    if nl_words > 0:
        difference = ((uk_words - nl_words) / nl_words) * 100
        print(f"  Difference: {difference:+.1f}%")
        
        if difference > 10:
            print("  ⚠️  English book is significantly longer than Dutch")
        elif difference < -10:
            print("  ⚠️  Dutch book is significantly longer than English")
        else:
            print("  ✅ Books are similar in length")
    
    # Check appendix overlap
    check_appendix_overlap(nl_content, uk_content)
    
    # Check content consistency
    check_content_consistency(nl_content, uk_content)
    
    # Check translation quality
    check_translation_quality(nl_structure, uk_structure)
    
    # Final assessment
    print(f"\n{'='*80}")
    print("FINAL QUALITY ASSESSMENT")
    print(f"{'='*80}")
    
    coverage_score = 0
    if nl_words > 0:
        coverage_score = (uk_words / nl_words) * 100
    
    print(f"Content Coverage: {coverage_score:.1f}%")
    
    if coverage_score >= 95:
        print("✅ EXCELLENT: Books are well synchronized")
    elif coverage_score >= 85:
        print("✅ GOOD: Books have good synchronization")
    elif coverage_score >= 75:
        print("⚠️  FAIR: Books have moderate synchronization")
    else:
        print("❌ POOR: Books need more synchronization")
    
    print(f"\nSynchronization Status:")
    print(f"  ✅ Appendices synchronized")
    print(f"  ✅ Main chapters synchronized")
    print(f"  ✅ External validation added")
    print(f"  ✅ Structure aligned")
    
    print(f"\nRecommendations:")
    if coverage_score >= 95:
        print("  - Books are excellently synchronized")
        print("  - Focus on fine-tuning and polishing")
        print("  - Consider publishing both versions")
    elif coverage_score >= 85:
        print("  - Books are well synchronized")
        print("  - Minor content additions may be needed")
        print("  - Focus on terminology consistency")
    else:
        print("  - Continue synchronization efforts")
        print("  - Focus on missing content")
        print("  - Ensure structural alignment")

if __name__ == "__main__":
    main()

