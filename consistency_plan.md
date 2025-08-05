# Repository Naming Consistency Plan

## Current Issues Identified:

### 1. Book Directories
- `bookdraft/` - contains chapters and content
- `bookIdraft/` - contains only nl/ subdirectory
- **Suggestion**: Merge into `book-draft/` with clear structure

### 2. Manifest Directories
- `manifest/` - contains manifest files (en, fr, nl)
- `manifests/` - contains translations/
- `manifest_en.md` - loose file in root
- **Suggestion**: Consolidate into `manifests/` with clear structure

### 3. Kickstarter Files
- Kickstarter files scattered between root and kickstarter/ directory
- `kickstartercompliance`, `kickstarter_rewards_*.md` in root
- `kickstarter/` directory with video/ and grok/
- **Suggestion**: Move all kickstarter files to `kickstarter/` directory

### 4. Duplicate Files
- `ethicspaperariadnedv` and `ethicspaperariadnedv.md`
- `herculesthedarkone` and `herculesthedarkone.txt`
- **Suggestion**: Keep .md/.txt versions, remove duplicates

## Proposed Structure:

```
/
├── book-draft/                    # All book content
│   ├── chapters/                  # All chapter files
│   ├── drafts/                    # Draft versions
│   └── nl/                       # Dutch translations
├── manifests/                     # All manifest files
│   ├── translations/              # Language translations
│   └── versions/                  # Different versions
├── kickstarter/                   # All kickstarter content
│   ├── rewards/                   # Reward descriptions
│   ├── videos/                    # Video content
│   ├── compliance/                # Compliance documents
│   └── grok/                     # Grok content
├── ethics/                        # Ethics documents
├── context/                       # Context primers
├── suno/                          # SUNO specific files
└── docs/                          # Documentation
```

## Action Plan:

1. **Consolidate book directories**
   - Move content from bookdraft/ to book-draft/chapters/
   - Move nl/ from bookIdraft/ to book-draft/nl/
   - Remove empty directories

2. **Consolidate manifest files**
   - Move manifest_en.md to manifests/
   - Organize all manifest files in manifests/
   - Remove duplicate manifest/ directory

3. **Organize kickstarter files**
   - Move all kickstarter files from root to kickstarter/
   - Create subdirectories for better organization

4. **Remove duplicates**
   - Keep .md/.txt versions
   - Remove duplicate files without extensions

5. **Standardize naming**
   - Use kebab-case for directories
   - Use consistent file extensions
   - Group related files together

## Benefits:
- Clearer structure
- Easier navigation
- Better organization
- Reduced confusion
- More professional appearance 