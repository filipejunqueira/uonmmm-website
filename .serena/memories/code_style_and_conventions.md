# Code Style and Conventions

## JavaScript/JSX Style
- Uses ES6+ syntax with JSX
- Function components preferred over class components
- ESLint configuration present (eslint.config.js)
- Component names use PascalCase (e.g., HeroSection, ContactSection)
- File names match component names with .jsx extension

## Component Structure
- Components located in `src/components/`
- Each major section has its own component:
  - HeroSection.jsx
  - ContactSection.jsx
  - ResearchSection.jsx
  - PublicationsSection.jsx
  - StaffSection.jsx
  - etc.

## Styling Approach
- Tailwind CSS for styling
- Custom theme with ivory/snow color palette
- Dark mode support with class-based toggle
- Responsive design patterns
- Custom configuration in tailwind.config.js

## File Organization
- Assets in `src/assets/` (images, SVGs)
- Data files in `src/data/` (publications.js)
- Main app logic in `src/App.jsx`
- Styling in `src/index.css` and `src/App.css`

## Import/Export Patterns
- ES6 import/export syntax
- Default exports for main components
- Named exports where appropriate

## Naming Conventions
- Components: PascalCase
- Files: match component names
- CSS classes: Tailwind utility classes
- Assets: descriptive lowercase with hyphens