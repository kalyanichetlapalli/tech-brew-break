# Quick Start Guide

Get your QA Engineer Portfolio up and running in minutes!

## 🚀 Quick Start (3 Steps)

### 1. Navigate to Project
```bash
cd d:\tech-brew-break\portfolio
```

### 2. Install Dependencies (if not already done)
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Your portfolio will be live at **http://localhost:3000** 🎉

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Customization Quick Tips

### Update Personal Info
Edit these files to customize your information:

1. **Hero Section**: `src/components/sections/hero.tsx`
   - Change name, title, description

2. **About Section**: `src/components/sections/about.tsx`
   - Update education, location, strengths

3. **Experience Section**: `src/components/sections/experience.tsx`
   - Modify job title, company, responsibilities

4. **Skills Section**: `src/components/sections/skills.tsx`
   - Add/remove skills and categories

5. **Contact Section**: `src/components/sections/contact.tsx`
   - Update email, LinkedIn, location

### Change Colors
Edit `src/app/globals.css` to modify the color scheme:
- Look for the `:root` section for light mode colors
- Look for the `.dark` section for dark mode colors

### Add/Remove Sections
Edit `src/app/page.tsx` to control which sections appear:
```tsx
<main className="flex-1">
  <Hero />
  <About />
  <Experience />
  <Skills />
  <Contact />
  {/* Add new sections here */}
</main>
```

## 🌐 Deploy to Vercel (Fastest)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

Done! Your site will be live in minutes.

## 📱 Test Responsive Design

While the dev server is running:
- **Desktop**: Open http://localhost:3000
- **Mobile**: Open http://192.168.1.9:3000 on your phone (same network)
- Or use browser DevTools to test different screen sizes

## 🔍 Project Structure Overview

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Main page
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   ├── navbar.tsx    # Navigation
│   │   ├── sections/     # All page sections
│   │   └── ui/           # shadcn components
│   └── lib/
│       └── utils.ts      # Utility functions
├── public/               # Static files
└── package.json          # Dependencies
```

## ✅ Verification Checklist

After starting the dev server, verify:
- [ ] Hero section displays your name
- [ ] About section shows education and location
- [ ] Experience section lists your work history
- [ ] Skills section shows all your competencies
- [ ] Contact section has correct email and LinkedIn
- [ ] Navigation menu works (click links)
- [ ] Mobile menu works (resize browser)
- [ ] All animations are smooth
- [ ] Links open correctly

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
npx kill-port 3000
# Then run dev server again
npm run dev
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
# Rebuild
npm run build
```

## 📚 Additional Resources

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`

## 💡 Pro Tips

1. **Hot Reload**: Changes auto-refresh in dev mode
2. **TypeScript**: Get autocomplete in VS Code
3. **Tailwind**: Use Tailwind CSS IntelliSense extension
4. **Performance**: Run `npm run build` to check bundle size

## 🎯 Next Steps

1. ✅ Start the dev server
2. ✅ Review the portfolio in your browser
3. ✅ Customize the content
4. ✅ Test on mobile devices
5. ✅ Deploy to Vercel
6. ✅ Share your portfolio link!

---

**Need Help?** Check the full README.md or DEPLOYMENT.md for detailed guides.
