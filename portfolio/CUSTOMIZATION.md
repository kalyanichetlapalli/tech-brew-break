# Customization Guide

This guide helps you personalize the portfolio to match your preferences and information.

## 📝 Content Customization

### 1. Personal Information

#### Update Name and Title
**File**: `src/components/sections/hero.tsx`

```tsx
// Line 20-24
<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
  Your Name Here  {/* Change this */}
</h1>
<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
  Your Professional Title  {/* Change this */}
</p>
```

#### Update Introduction Text
**File**: `src/components/sections/hero.tsx`

```tsx
// Line 32-36
<p>
  Your professional summary and value proposition here.
  Describe what you do and your years of experience.
</p>
```

### 2. About Section

#### Update Education
**File**: `src/components/sections/about.tsx`

```tsx
// Around line 50-53
<p className="font-semibold">Your Degree</p>
<p className="text-sm text-gray-500">University Name (Year-Year)</p>
```

#### Update Location
**File**: `src/components/sections/about.tsx`

```tsx
// Around line 66-67
<p className="font-semibold">Your City, State, Country</p>
<p className="text-sm text-gray-500">Your availability status</p>
```

#### Update Core Strengths
**File**: `src/components/sections/about.tsx`

```tsx
// Around line 80-82
<p className="text-sm text-gray-500">
  Your core strengths and competencies
</p>
```

### 3. Experience Section

#### Update Job Information
**File**: `src/components/sections/experience.tsx`

```tsx
// Line 8-18 - Update responsibilities array
const responsibilities = [
  "Your responsibility 1",
  "Your responsibility 2",
  // Add or remove as needed
]

// Line 45-50 - Update job title and company
<CardTitle className="text-2xl flex items-center gap-2">
  <Briefcase className="h-5 w-5" />
  Your Job Title
</CardTitle>
<CardDescription className="text-base">
  Your Company Name
</CardDescription>

// Line 53 - Update duration
<Badge variant="secondary" className="flex items-center gap-1">
  <Calendar className="h-3 w-3" />
  X years Y months
</Badge>
```

#### Update Testing Methodologies
**File**: `src/components/sections/experience.tsx`

```tsx
// Line 77-78
{["Methodology 1", "Methodology 2", "etc."].map((methodology) => (
```

### 4. Skills Section

#### Update Skill Categories
**File**: `src/components/sections/skills.tsx`

```tsx
// Line 8-31 - Modify the skillCategories array
const skillCategories = [
  {
    title: "Category Name",
    icon: IconName,  // Import from lucide-react
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  // Add more categories
]
```

#### Update Top Competencies
**File**: `src/components/sections/skills.tsx`

```tsx
// Line 93
{["Top Skill 1", "Top Skill 2", "Top Skill 3"].map((skill, index) => (
```

### 5. Contact Information

#### Update Contact Details
**File**: `src/components/sections/contact.tsx`

```tsx
// Line 9-29 - Update contactInfo array
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    description: "Send me an email"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://www.linkedin.com/in/your-profile",
    description: "Connect with me on LinkedIn"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, State, Country",
    href: null,
    description: "Your availability message"
  }
]
```

### 6. Footer

#### Update Footer Information
**File**: `src/components/sections/footer.tsx`

```tsx
// Line 10-14
<p className="text-sm font-semibold">Your Name</p>
<p className="text-xs text-gray-500 dark:text-gray-400">
  Your Title | Your Specialization
</p>

// Line 17-29 - Update social links
<Link href="mailto:your.email@example.com" ...>
<Link href="https://www.linkedin.com/in/your-profile" ...>
```

### 7. Page Metadata

#### Update SEO Information
**File**: `src/app/layout.tsx`

```tsx
// Line 15-18
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your professional description for search engines.",
};
```

## 🎨 Design Customization

### 1. Color Scheme

#### Update Primary Colors
**File**: `src/app/globals.css`

```css
/* Line 54 - Primary color (buttons, accents) */
--primary: oklch(0.205 0 0);  /* Dark gray, change as needed */

/* Line 55 - Primary foreground (text on primary) */
--primary-foreground: oklch(0.985 0 0);  /* White */

/* Line 56-57 - Secondary colors */
--secondary: oklch(0.97 0 0);
--secondary-foreground: oklch(0.205 0 0);
```

#### Use Color Palette Generator
Visit [oklch.com](https://oklch.com) to generate OKLCH color values.

Example color changes:
```css
/* Blue primary */
--primary: oklch(0.5 0.2 250);

/* Green primary */
--primary: oklch(0.6 0.2 140);

/* Purple primary */
--primary: oklch(0.5 0.2 280);
```

### 2. Typography

#### Change Fonts
**File**: `src/app/layout.tsx`

```tsx
// Line 2 - Import different Google Fonts
import { Inter, Roboto_Mono } from "next/font/google";

// Line 5-13 - Configure fonts
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
```

Popular font combinations:
- **Modern**: Inter + Fira Code
- **Classic**: Roboto + Roboto Mono
- **Elegant**: Playfair Display + Source Sans Pro
- **Tech**: JetBrains Mono + IBM Plex Sans

### 3. Spacing and Layout

#### Adjust Section Padding
**Files**: All section files in `src/components/sections/`

```tsx
// Change py-12 md:py-24 lg:py-32 to adjust vertical padding
<section className="w-full py-8 md:py-16 lg:py-24">  {/* Smaller */}
<section className="w-full py-16 md:py-32 lg:py-40"> {/* Larger */}
```

#### Adjust Container Width
**File**: Any section file

```tsx
// Change max-w-5xl to adjust content width
<div className="mx-auto max-w-4xl">  {/* Narrower */}
<div className="mx-auto max-w-6xl">  {/* Wider */}
<div className="mx-auto max-w-7xl">  {/* Very wide */}
```

### 4. Border Radius

#### Update Global Border Radius
**File**: `src/app/globals.css`

```css
/* Line 47 - Adjust border radius */
--radius: 0.625rem;  /* Default (10px) */
--radius: 0.375rem;  /* Smaller (6px) */
--radius: 1rem;      /* Larger (16px) */
--radius: 0rem;      /* Square corners */
```

## 🔧 Component Customization

### Add New Section

1. Create new section file:
```bash
# Create file: src/components/sections/projects.tsx
```

2. Add section component:
```tsx
"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* Your content here */}
      </div>
    </section>
  )
}
```

3. Add to main page:
```tsx
// File: src/app/page.tsx
import { Projects } from "@/components/sections/projects"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />  {/* Add here */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
```

4. Add to navigation:
```tsx
// File: src/components/navbar.tsx
// Line 17-23 - Add to navItems array
const navItems = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },  // Add here
  { title: "Contact", href: "#contact" },
]
```

### Remove a Section

1. Remove from main page (`src/app/page.tsx`)
2. Remove from navigation (`src/components/navbar.tsx`)
3. Delete the section file (optional)

## 🎭 Animation Customization

### Adjust Animation Speed
**Files**: All section files

```tsx
// Change duration value
transition={{ duration: 0.5 }}  // Default
transition={{ duration: 0.3 }}  // Faster
transition={{ duration: 0.8 }}  // Slower
```

### Adjust Animation Delay
```tsx
// Change delay value
transition={{ duration: 0.5, delay: 0.2 }}  // Default
transition={{ duration: 0.5, delay: 0 }}    // No delay
transition={{ duration: 0.5, delay: 0.5 }}  // Longer delay
```

### Disable Animations
Remove or comment out the motion components:
```tsx
// Before
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

// After
<div>
```

## 📱 Responsive Customization

### Adjust Breakpoints
Tailwind CSS breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

Example:
```tsx
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  {/* Responsive text sizes */}
</h1>
```

## 🔍 SEO Customization

### Add More Meta Tags
**File**: `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description",
  keywords: ["QA Engineer", "Testing", "Your Skills"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Your Title",
    description: "Your description",
    url: "https://yourwebsite.com",
    siteName: "Your Name Portfolio",
    locale: "en_US",
    type: "website",
  },
};
```

## 💾 Save Your Changes

After making changes:

```bash
# Test locally
npm run dev

# Build to verify
npm run build

# Commit changes
git add .
git commit -m "Customized portfolio content"
git push
```

## 🆘 Troubleshooting

### Changes Not Showing
1. Save the file
2. Check browser console for errors
3. Restart dev server: `Ctrl+C` then `npm run dev`

### Styling Broken
1. Check for typo in className
2. Verify Tailwind class names
3. Clear `.next` folder: `rm -rf .next`

### Build Errors
1. Check TypeScript errors
2. Verify all imports
3. Run `npm run build` to see detailed errors

---

**Need More Help?** Check the README.md or open an issue on GitHub.
