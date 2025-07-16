# Pokhrel Development LLC Website - Build Structure & Development Standards

## 🏗️ Build Structure Requirements

This README defines the **mandatory development standards** that must be followed for all development work on this project.

## 📱 Responsive Design Requirements

### **CRITICAL: Mobile-First Approach**
- **ALL components and pages MUST be fully responsive**
- Design and develop for mobile first, then scale up to desktop
- Test on minimum screen width of 320px (iPhone SE)
- Ensure touch-friendly interfaces with minimum 44px touch targets

### **Breakpoint Standards**
```css
/* Mobile First Breakpoints (Tailwind CSS) */
sm: 640px   /* Small tablets and large phones */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### **Required Responsive Testing**
- iPhone SE (375x667)
- iPhone 12 Pro (390x844)
- iPad (768x1024)
- Desktop (1920x1080)

## 🎨 Theme Requirements

### **MANDATORY: Light/Dark Mode Support**
- **ALL components MUST support both light and dark themes**
- Theme must automatically detect and follow user's system preference
- Provide manual toggle option for user override
- Use CSS custom properties (CSS variables) for theme colors
- Implement `prefers-color-scheme` media query

### **Theme Implementation Standards**
```css
/* Required CSS Variables Structure */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #1a1a1a;
  --text-secondary: #6b7280;
  --accent-primary: #3b82f6;
  --border-color: #e5e7eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1a1a;
    --bg-secondary: #111827;
    --text-primary: #ffffff;
    --text-secondary: #9ca3af;
    --accent-primary: #60a5fa;
    --border-color: #374151;
  }
}
```

## 🚀 Technology Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS + Custom CSS
- **Components**: React Components (ES6 modules)
- **Build Tool**: Next.js built-in bundler
- **CSS Processing**: Tailwind CSS compiler

## 📁 Project Structure

```
pokhreldevelopmentllcwebsite/
├── components/           # Reusable React components
│   ├── Hero.js          # Hero section component
│   └── Portfolio.js     # Portfolio showcase component
├── pages/               # Next.js pages
│   └── index.js         # Main page
├── css/                 # Styling files
│   ├── compiled-tailwind.css  # Generated Tailwind styles
│   ├── home.css         # Home page specific styles
│   └── styles.css       # Global custom styles
├── public/              # Static assets
│   ├── images/          # Image assets
│   └── fonts/           # Font files
├── js/                  # JavaScript utilities
│   └── main.js          # Main JavaScript file
└── index.html           # Static HTML (fallback)
```

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Update Tailwind CSS
npm run build-css

# Update browserslist database
npx update-browserslist-db@latest
```

## ✅ Development Checklist

### Before Every Commit:
- [ ] **Responsive Design**: Tested on all required breakpoints
- [ ] **Theme Support**: Verified in both light and dark modes
- [ ] **Accessibility**: Proper ARIA labels and semantic HTML
- [ ] **Performance**: Images optimized, minimal CSS/JS
- [ ] **Cross-browser**: Tested in Chrome, Firefox, Safari, Edge

### Component Requirements:
- [ ] **Mobile-first responsive design**
- [ ] **Light/dark theme variables used**
- [ ] **Touch-friendly interfaces (44px minimum touch targets)**
- [ ] **Semantic HTML structure**
- [ ] **Proper accessibility attributes**

## 🎯 Performance Standards

- **Page Load Time**: < 3 seconds on mobile
- **First Contentful Paint**: < 1.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **Image Optimization**: WebP format preferred, proper sizing
- **CSS**: Minified and critical CSS inlined

## 🌐 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Graceful Degradation**: Ensure core functionality works on older browsers

## 🔧 Code Quality Standards

### CSS/Styling:
- Use Tailwind utility classes first
- Custom CSS only when Tailwind is insufficient
- Mobile-first media queries
- CSS variables for theming
- BEM methodology for custom CSS classes

### JavaScript:
- ES6+ syntax
- Modular component structure
- No inline JavaScript in HTML
- Proper error handling
- Performance-conscious code

### HTML:
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h6)
- Alt text for all images
- Proper form labels and validation

## 🚨 Critical Rules

1. **NEVER deploy without mobile testing**
2. **NEVER implement single-theme solutions**
3. **ALWAYS use semantic HTML**
4. **ALWAYS optimize images before adding**
5. **ALWAYS test theme switching functionality**

## 🐛 Troubleshooting

### Common Issues:
- **Port 3000 in use**: Kill existing process or use different port
- **Tailwind not updating**: Run `npm run build-css`
- **Theme not switching**: Check CSS variable implementation

---

**This README serves as the definitive guide for all development work. Any deviations from these standards must be approved and documented.** 