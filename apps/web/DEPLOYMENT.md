# GitHub Pages Deployment Guide

This guide explains how to deploy your PayMe project to GitHub Pages.

## Prerequisites

1. Your project should be in a GitHub repository
2. Make sure the repository name matches the `base` path in `vite.config.ts`

## Deployment Steps

### 1. Update Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Configure Base Path

In `vite.config.ts`, make sure the `base` path matches your repository name:

```typescript
export default defineConfig({
  base: "/your-repo-name/", // Replace with your actual repo name
  // ... other config
});
```

### 3. Push to Main Branch

The deployment will automatically trigger when you push to the `main` branch:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 4. Monitor Deployment

1. Go to **Actions** tab in your GitHub repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Once complete, your site will be available at: `https://yourusername.github.io/your-repo-name/`

## Local Testing

To test the built site locally:

```bash
# Build the project
nix develop -c bun run build

# Preview the built site
nix develop -c bun run preview
```

The preview will be available at `http://localhost:4173`

## Troubleshooting

### Assets Not Loading

If images or CSS aren't loading, check:
1. The `base` path in `vite.config.ts` matches your repo name
2. All asset paths are relative (starting with `/images/` not `./images/`)

### Build Failures

If the GitHub Action fails:
1. Check the Actions tab for error details
2. Ensure all dependencies are in `package.json`
3. Test the build locally first

### 404 Errors

If you get 404 errors on refresh:
1. This is normal for SPAs on GitHub Pages
2. Consider adding a `404.html` that redirects to `index.html`

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the project: `nix develop -c bun run build`
2. Push the `dist` folder to the `gh-pages` branch
3. Enable GitHub Pages from the `gh-pages` branch

## Files Created for Deployment

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `vite.config.ts` - Updated with base path and build config
- `.gitignore` - Excludes build files from git
- `DEPLOYMENT.md` - This guide