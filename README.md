# Shrinanda Infotech - Premium Portfolio Website

A modern, futuristic, and professional single-page IT company portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

### Visual Design
- **Style**: Futuristic, premium, clean, and corporate
- **Theme Colors**: 
  - Deep Navy Blue (#0f172a, #1e293b)
  - White (#ffffff, #e2e8f0)
  - Golden-Orange Gradients (#f59e0b, #ea580c, #fb923c)
  - Soft Purple Accents (#a78bfa, #c084fc, #8b5cf6)

### UI Components
- Glassmorphism effects with semi-transparent backgrounds
- Smooth gradient animations and transitions
- Modern card-based layouts with hover effects
- Rounded corners and soft shadows
- Professional typography using Poppins, Inter, and Montserrat fonts
- Responsive design for all devices (mobile, tablet, desktop)
- Tech-inspired background patterns with floating particles
- Glowing buttons and neon-like effects

## 📑 Website Sections

1. **Navbar** - Fixed navigation with smooth scroll and mobile menu
2. **Hero Section** - Large animated headline with CTA buttons and logo placeholder
3. **About Company** - Company description and key features
4. **Mission & Vision** - Company mission, vision, and core values
5. **Services** - 8 service cards with icons and descriptions
6. **Why Choose Us** - Animated counters and feature highlights
7. **Portfolio** - Modern portfolio gallery with filtering
8. **Testimonials** - 3 client testimonial cards with ratings
9. **Contact** - Contact form and business information
10. **Footer** - Links, social media, and copyright

## 🚀 Technologies Used

- **Frontend**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Inter, Montserrat)

## 📦 Installation & Setup

### Quick Start

1. **Navigate to project directory**:
   ```bash
   cd "d:\Shreenanda Infotech Portfolio"
   ```

2. **Install dependencies** (already completed):
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Visit: `http://localhost:5173/`

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

6. **Run linting**:
   ```bash
   npm run lint
   ```

## 🎯 Logo Setup

### Logo Placeholder Requirements
- **Dimensions**: 19370 px × 6614 px
- **DPI**: 300
- **Format**: PNG or SVG
- **Location**: Place in `/public/` folder

### How to Replace Logo
1. Add your logo to `/public/logo.png`
2. Update in these files:
   - `src/components/Navbar.jsx`
   - `src/components/Hero.jsx`
   - `src/components/Footer.jsx`

Replace the placeholder image src with:
```jsx
<img src="/logo.png" alt="Shrinanda Infotech" />
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── MissionVision.jsx
│   ├── Services.jsx
│   ├── WhyChooseUs.jsx
│   ├── Portfolio.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🎨 Customization

### Change Company Name
Search and replace "Shrinanda Infotech" in all component files.

### Update Contact Info (Contact.jsx)
- Email: `info@shrinanda.com`
- Phone: `+91 98765 43210`
- Address: `Mumbai, India`

### Modify Services (Services.jsx)
- Add/remove service cards
- Update titles and descriptions
- Change icons from Lucide React library

### Update Colors
Edit `tailwind.config.js` or component gradient values.

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Focus states

## 📈 Performance

- Build size: 371.61 kB (111.30 kB gzipped)
- CSS: 11.59 kB (2.59 kB gzipped)
- Optimized animations
- Smooth scroll behavior

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment Options

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build: `npm run build`
4. Publish: `dist/`

## 📞 Support & Documentation

- [React Docs](https://react.dev)
- [Vite Docs](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## 📄 License

Commercial use ready.

---

**Version**: 1.0.0
**Status**: ✅ Production Ready
**Created**: May 31, 2026
