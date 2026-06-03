# Customization Quick Reference

## 🎨 Color Theme Changes

### Main Brand Colors (Edit in component files)
- **Navy Background**: `#0f172a`, `#1e293b`
- **Gold/Orange**: `#f59e0b`, `#ea580c`, `#fb923c`
- **Purple Accent**: `#a78bfa`, `#c084fc`, `#8b5cf6`

### Change Gradient (Example)
```jsx
// OLD
className="bg-gradient-to-r from-amber-500 to-orange-600"

// NEW
className="bg-gradient-to-r from-blue-500 to-blue-600"
```

---

## ✏️ Content Updates

### Company Name (Global Search & Replace)
Search: `Shrinanda Infotech`
Replace: `Your Company Name`

### Contact Information (Contact.jsx)
- Email: Line ~30
- Phone: Line ~35
- Address: Line ~40

### Services (Services.jsx)
- Add service: Add to services array (line ~13)
- Remove service: Delete from services array

### Testimonials (Testimonials.jsx)
- Edit client names: Line ~26
- Edit reviews: Line ~30
- Update ratings: Change `rating: 5` value

---

## 🖼️ Images & Media

### Add Project Image (Portfolio.jsx)
```jsx
{
  id: 9,
  title: 'Your Project',
  category: 'web',
  image: '/path-to-your-image.jpg',
  // ... other properties
}
```

### Update About Section Image (About.jsx)
Replace line ~70:
```jsx
<img src="/your-image.jpg" alt="About Us" />
```

### Add Testimonial Avatar
Replace in Testimonials.jsx:
```jsx
<img src="/avatar-name.jpg" alt="Client Name" />
```

---

## 🎬 Modify Animations

### Change Animation Speed (Framer Motion)
```jsx
// Slower (2 seconds)
transition={{ duration: 2 }}

// Faster (0.3 seconds)
transition={{ duration: 0.3 }}
```

### Remove Hover Effects
Remove `whileHover={{ ... }}` prop from motion components.

### Change Stagger Effect
In containerVariants, modify:
```jsx
transition: {
  staggerChildren: 0.2  // Increase for slower stagger
}
```

---

## 🌐 Navigation Links

### Update Menu Links (Navbar.jsx)
```jsx
const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'];
// Edit this array to add/remove menu items
```

### Add New Section
1. Create new component file
2. Import in App.jsx
3. Add to Navbar menuItems
4. Add smooth scroll ID: `<section id="new-section">`

---

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `md:` = 768px and above (tablet)
- `lg:` = 1024px and above (desktop)
- Default = mobile (< 768px)

To change a responsive rule:
```jsx
className="text-sm md:text-base lg:text-lg"
```

---

## 🎨 Button Styles

### Primary Button (CTA)
```jsx
className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg"
```

### Secondary Button
```jsx
className="px-8 py-4 bg-gradient-to-r from-purple-600/30 to-purple-500/30 text-white border border-purple-500/50"
```

---

## 📝 Text Styles

### Headings
```jsx
// Large heading
className="text-5xl md:text-7xl font-bold"

// Medium heading
className="text-2xl md:text-4xl font-bold"

// Small heading
className="text-lg md:text-xl font-bold"
```

### Body Text
```jsx
className="text-gray-300 leading-relaxed"
```

---

## 🔗 External Links

### Make Links Functional
```jsx
// Before (placeholder)
<a href="#">Contact</a>

// After (real link)
<a href="mailto:info@company.com">Contact</a>
<a href="tel:+1234567890">Call</a>
<a href="https://www.example.com">Website</a>
```

### Add Social Media Links (Footer.jsx)
```jsx
{ 
  icon: Code, 
  label: 'GitHub', 
  href: 'https://github.com/yourprofile'  // Update this
}
```

---

## 💼 Service Cards Customization

### Add New Service (Services.jsx)
```jsx
{
  icon: YourIcon,  // From lucide-react
  title: 'Your Service',
  description: 'Your service description',
  color: 'from-COLOR-500/20 to-COLOR-600/20',
  borderColor: 'border-COLOR-500/30',
  iconColor: 'text-COLOR-400',
}
```

### Available Colors
- blue, purple, pink, cyan, orange, green, indigo, red

---

## 📧 Contact Form

### Make Form Work with Backend
Current form is placeholder. To make functional:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // Send to your backend/email service
  const response = await fetch('your-api-endpoint', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
}
```

---

## 🎯 Common Questions

### Q: How do I add a new page?
A: Create a new component in `/src/components/`, import it in `App.jsx`, and add a section ID.

### Q: How to change the font?
A: Edit `index.css` - change the `@import` URL for Google Fonts.

### Q: How to add a new icon?
A: Browse [Lucide Icons](https://lucide.dev) and import from `lucide-react`.

### Q: How to modify the hero background?
A: Edit the gradient divs in `Hero.jsx` around line 45-60.

### Q: How to add animations to new elements?
A: Wrap with `<motion.div>` and add Framer Motion props.

---

## 🚨 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Images not loading | Check image path in `/public/` folder |
| Animations lag | Reduce animation duration or staggerChildren |
| Text overlapping on mobile | Add responsive padding/margin classes |
| Colors look wrong | Check Tailwind class names match config |
| Links not working | Ensure proper onClick handlers and section IDs |

---

## 📚 Quick File Reference

| Task | File | Lines |
|------|------|-------|
| Change company name | All components | Various |
| Add logo | Navbar, Hero, Footer | 24, 67, 38 |
| Update services | Services.jsx | 13-49 |
| Edit testimonials | Testimonials.jsx | 8-30 |
| Modify contact info | Contact.jsx | 30-40 |
| Change colors | Component files | Gradient classes |
| Add social links | Footer.jsx | Social links array |
| Edit about text | About.jsx | 45-65 |

---

**For more help, refer to README.md and component code comments!**
