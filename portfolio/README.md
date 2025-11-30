# Kalyani Chetlapalli - QA Engineer Portfolio

A professional, production-ready portfolio website built with Next.js 16 and shadcn/ui, showcasing expertise in manual and automated testing.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 18, TypeScript, and Tailwind CSS v4
- **Minimal Design Aesthetic**: Clean typography, ample whitespace, and restrained color palette
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Accessible**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📋 Sections

1. **Hero Section**: Professional introduction with call-to-action buttons
2. **About Section**: Background, education (M.Tech in Computer Science), location, and core strengths
3. **Experience Section**: Detailed work history at NCompas Business Solutions Inc. (3 years 8 months)
4. **Skills Section**: Technical competencies organized by category:
   - API & Testing Tools (Postman API, Apollo GraphQL, Playwright)
   - Database & Debugging (SQL, Debugging Code)
   - Testing Methodologies (Functional, Regression, Test Case Design)
   - Project Management (JIRA, Agile/Scrum)
5. **Contact Section**: Email, LinkedIn, and location information
6. **Footer**: Professional footer with social links

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist Sans & Geist Mono

## 📦 Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main page assembling all sections
│   │   └── globals.css          # Global styles and Tailwind config
│   ├── components/
│   │   ├── navbar.tsx           # Navigation component
│   │   ├── sections/
│   │   │   ├── hero.tsx         # Hero section
│   │   │   ├── about.tsx        # About section
│   │   │   ├── experience.tsx   # Experience section
│   │   │   ├── skills.tsx       # Skills section
│   │   │   ├── contact.tsx      # Contact section
│   │   │   └── footer.tsx       # Footer component
│   │   └── ui/                  # shadcn/ui components
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
└── package.json
```

## 🎨 Design Philosophy

The portfolio follows a **minimal aesthetic** approach:

- **Typography-focused**: Clean, readable fonts with proper hierarchy
- **Whitespace**: Generous spacing for visual breathing room
- **Restrained Colors**: Professional color palette with subtle accents
- **Smooth Interactions**: Subtle animations that enhance UX without distraction
- **Content-first**: Design supports and highlights the content

## 📧 Contact Information

- **Email**: kalyani.thammera123@gmail.com
- **LinkedIn**: [linkedin.com/in/kalyanic-77194892](https://www.linkedin.com/in/kalyanic-77194892)
- **Location**: Hyderabad, Telangana, India

## 🔧 Customization

To customize the portfolio:

1. **Update Personal Information**: Edit the content in each section component
2. **Modify Colors**: Adjust color variables in `src/app/globals.css`
3. **Add/Remove Sections**: Update `src/app/page.tsx` to include/exclude sections
4. **Change Fonts**: Modify font imports in `src/app/layout.tsx`

## 📝 License

© 2025 Kalyani Chetlapalli. All rights reserved.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
