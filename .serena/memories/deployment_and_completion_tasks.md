# Deployment and Task Completion

## When a Task is Completed

### 1. Development Testing
```bash
# Test the development build
npm run dev
# Check for console errors and functionality
```

### 2. Production Build Testing
```bash
# Build the production version
npm run build

# Preview the production build
npm run preview
# Verify everything works correctly
```

### 3. Code Quality Checks
```bash
# Run ESLint (if configured)
npm run lint

# Check for TypeScript errors (if applicable)
# Currently using JavaScript, but good to verify
```

### 4. Git Workflow
```bash
# Check git status
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "feat: description of changes"

# Push to trigger deployment
git push origin main
```

## Deployment Details
- **Platform**: GitHub Pages
- **Base URL**: Configured for "/uonmmm-website/" path
- **Automatic Deployment**: Triggered on push to main branch
- **Workflow**: Located in `.github/workflows/deploy.yml`

## Pre-deployment Checklist
- [ ] All functionality tested in development
- [ ] Production build successful
- [ ] No console errors or warnings
- [ ] Responsive design verified
- [ ] All assets loading correctly
- [ ] SEO meta tags updated (if applicable)
- [ ] Performance optimizations applied
- [ ] Git commit messages are descriptive