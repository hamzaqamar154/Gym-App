# Deployment Guide for Gym App

Your Gym App is ready to deploy! Here are the best options:

## 🚀 Option 1: Vercel (Recommended - Easiest)

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

**That's it!** Your app will be live in seconds with a free `.vercel.app` domain.

**Benefits:**
- ✅ Free tier with generous limits
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Preview deployments for PRs

---

## 🌐 Option 2: Netlify

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will auto-detect settings (build command: `npm run build`, publish directory: `dist`)
6. Click "Deploy site"

**Benefits:**
- ✅ Free tier
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ Free `.netlify.app` domain

---

## 📦 Option 3: GitHub Pages

**Steps:**
1. Update `vite.config.ts` to set `base: '/your-repo-name/'` (if repo name is not `Gym-App`, change it)
2. Run: `npm run deploy`
3. Go to your GitHub repo → Settings → Pages
4. Select source: `gh-pages` branch
5. Your site will be at: `https://yourusername.github.io/Gym-App/`

**Note:** For custom domain, you'll need to configure it in GitHub Pages settings.

---

## ☁️ Option 4: Cloudflare Pages

**Steps:**
1. Push your code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

**Benefits:**
- ✅ Free tier
- ✅ Very fast global CDN
- ✅ Automatic deployments

---

## 🔧 Manual Build & Deploy

If you want to deploy manually:

```bash
# Build the project
npm run build

# The dist/ folder contains your production-ready files
# Upload the contents of dist/ to any static hosting service
```

---

## 📝 Recommended: Vercel

For a Vite + React app, **Vercel is the easiest and fastest option**. It's specifically optimized for frontend frameworks and requires zero configuration.

Just push to GitHub and connect to Vercel - it handles everything automatically!

