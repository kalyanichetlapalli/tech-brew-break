# Deployment Guide

This guide covers deploying your QA Engineer Portfolio to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd portfolio
vercel
```

3. Follow the prompts to complete deployment

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure settings
6. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

## 🌐 Netlify

1. Build your project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

Or use the Netlify web interface to connect your GitHub repository.

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`

## 📦 Custom Server / VPS

### Using PM2 (Process Manager)

1. Build the project:
```bash
npm run build
```

2. Install PM2:
```bash
npm install -g pm2
```

3. Start the application:
```bash
pm2 start npm --name "portfolio" -- start
```

4. Configure PM2 to start on system boot:
```bash
pm2 startup
pm2 save
```

### Using Docker

1. Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

2. Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🔧 Environment Variables

If you add any environment variables in the future, make sure to configure them in your deployment platform:

### Vercel
- Go to Project Settings → Environment Variables
- Add your variables

### Netlify
- Go to Site Settings → Build & Deploy → Environment
- Add your variables

## 📊 Performance Optimization

Before deploying, ensure optimal performance:

1. **Optimize Images**: Use Next.js Image component for automatic optimization
2. **Enable Compression**: Most platforms enable this by default
3. **Configure Caching**: Set appropriate cache headers
4. **Monitor Performance**: Use Vercel Analytics or Google Lighthouse

## 🌍 Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS settings

## 🔒 Security Checklist

- [ ] Remove any sensitive data from code
- [ ] Configure HTTPS (automatic on Vercel/Netlify)
- [ ] Set up proper CORS if needed
- [ ] Enable security headers
- [ ] Keep dependencies updated

## 📈 Post-Deployment

After deployment:

1. Test all sections and links
2. Verify responsive design on multiple devices
3. Check page load performance
4. Test contact form/email links
5. Verify SEO meta tags
6. Submit sitemap to Google Search Console

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear `.next` folder and rebuild
- Verify all dependencies are installed

### Page Not Loading
- Check build logs for errors
- Verify environment variables
- Check server logs

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check for CSS conflicts
- Verify all shadcn/ui components are installed

## 📞 Support

For deployment issues:
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
