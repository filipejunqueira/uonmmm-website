# Publication Editor

A simple web interface for editing publication titles and authors based on validation results.

## Setup

```bash
cd publication-editor
npm install
npm start
```

Open http://localhost:3002 to access the editor.

## Features

- Side-by-side comparison of current vs Crossref titles
- One-click accept corrections
- Inline editing capabilities
- Progress tracking
- Automatic saves to year-based JSON files
- Undo functionality

## Usage

1. Start the editor server
2. Review publications sorted by priority (High → Medium → Low)
3. Accept Crossref suggestions or edit manually
4. Changes are automatically saved to the website data files
5. Refresh the main website to see changes

## Files Modified

The editor directly modifies the publication JSON files in:
- `../src/data/publications/YYYY.json`

All changes are tracked and can be undone if needed.