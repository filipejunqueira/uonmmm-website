# Suggested Development Commands

## Development Workflow
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Git Workflow
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "descriptive message"

# Push to GitHub (triggers deployment)
git push origin main
```

## File Operations
```bash
# List files
ls -la

# Find files
find . -name "*.jsx" -type f

# Search in files
grep -r "pattern" src/

# Check disk usage
du -sh *
```

## Project-Specific Notes
- The site deploys automatically to GitHub Pages when pushed to main branch
- Base path is configured as "/uonmmm-website/" for GitHub Pages deployment
- All development should be done in the `src/` directory
- Static assets go in `public/` or `src/assets/` depending on usage
- The site uses Tailwind CSS with custom theme configuration