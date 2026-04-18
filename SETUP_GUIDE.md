# Ecostream Overseas - Setup Guide

## Project Overview

This is a premium immigration consultancy website built with React, TypeScript, Tailwind CSS, and React Router. It features a beautiful, responsive design with smooth navigation between different study destinations.

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 6.20.0
- **Icons**: Lucide React 0.344.0
- **Build Tool**: Vite 5.4.2

## Project Structure

```
ecostream-overseas/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.tsx          # Navigation bar with smooth scroll
│   │   ├── Hero.tsx            # Full-screen hero section
│   │   ├── About.tsx           # About section with vision/mission
│   │   ├── Services.tsx        # Study destinations and services
│   │   ├── WhyChooseUs.tsx     # Features section
│   │   ├── Gallery.tsx         # Image gallery with hover effects
│   │   ├── Testimonials.tsx    # Client testimonials
│   │   ├── Contact.tsx         # Contact information
│   │   └── Footer.tsx          # Footer section
│   ├── pages/
│   │   └── DestinationDetail.tsx  # Dynamic destination detail page
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx               # Entry point with BrowserRouter
│   └── index.css              # Global styles and animations
├── index.html                  # HTML entry point
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── postcss.config.js         # PostCSS configuration
```

## Installation & Setup

### 1. Extract the Archive

```bash
tar -xzf ecostream-overseas.tar.gz
cd project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` folder.

## Features

### Home Page

- **Sticky Navigation Bar**: Smooth scroll navigation with transparent-to-solid transition on scroll
- **Hero Section**: Full-screen banner with call-to-action button and slider indicators
- **About Section**: Company mission with card layouts and read more button
- **Services Section**:
  - Study Abroad (6 destinations: USA, UK, Australia, Cyprus, France, Malta)
  - Work Permits (3 countries)
  - Visa Services (6 types)
  - **Clickable Destinations**: Each destination links to a detailed page
- **Why Choose Us**: Features with hover effects and background image
- **Gallery**: Responsive image grid with zoom hover effects
- **Testimonials**: Client testimonials with pagination
- **Contact Section**: Social media links, address, phone, and email
- **Footer**: Comprehensive footer with links and copyright

### Destination Detail Page

Dynamic pages for each study destination featuring:

- **Destination Overview**: Flag, description, and benefits
- **Why Study Here**: Key highlights and advantages
- **Basic Requirements**: Academic and document requirements
- **Beautiful Flowchart**: 6-step process visualization showing:
  1. Assessment & Planning
  2. University Selection
  3. Application Preparation
  4. Admission & Financial Aid
  5. Visa Application
  6. Pre-Departure

Each step includes:
- Visual icon representation
- Descriptive title
- Detailed explanation
- Responsive card layout with hover effects

## Key Design Features

### Animations & Interactions

- Smooth scroll behavior throughout the page
- Fade-in animations on page load
- Hover effects on cards (lift effect with shadow)
- Scale animations on icons
- Slide transitions on navigation
- Image zoom on gallery hover

### Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Hamburger menu on mobile
- Responsive grid layouts (1-4 columns)

### Color Scheme

- **Primary**: Blue (#2563eb, #1d4ed8)
- **Secondary**: Green (#16a34a)
- **Purple**: Accent color (#9333ea)
- **Neutral**: Gray and white

### Typography

- Clear font hierarchy
- 150% line spacing for body text
- Maximum 3 font weights
- Professional Inter font family

## Navigation Flow

```
Home (/)
├── Navbar (scroll to sections or navigate)
├── Services Section
│   └── Click "United States" → /destination/usa
│       └── Show USA Details & Flowchart
│       └── Back Button → Return to Home
├── Gallery Section
├── Testimonials Section
└── Contact Section
```

## Customization

### Adding a New Study Destination

1. **Edit `src/pages/DestinationDetail.tsx`**:
   - Add new entry to the `destinations` object
   - Include: flag, name, description, highlights, requirements, processSteps

2. **Update `src/components/Services.tsx`**:
   - Add new destination to `studyDestinations` array with slug

3. **Example**:
   ```typescript
   { country: 'New Country', flag: '🇬🇧', slug: 'country-slug' }
   ```

### Changing Colors

Edit `tailwind.config.js` or use Tailwind classes directly:
- Primary: `bg-blue-600`, `text-blue-600`
- Secondary: `bg-green-600`
- Accent: `bg-purple-600`

### Modifying Content

All text content is defined in component files. Edit directly:
- Navigation menu: `src/components/Navbar.tsx`
- Hero text: `src/components/Hero.tsx`
- About content: `src/components/About.tsx`
- Contact info: `src/components/Contact.tsx`

## Performance Optimization

- Optimized images from Pexels (no local storage)
- Code splitting via React Router
- Lazy loading components
- Production build: ~62KB gzipped

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Vite configuration
4. Deploy with one click

### Other Platforms

The build output in `dist/` can be deployed to any static host:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## Troubleshooting

### Port Already in Use

```bash
npm run dev -- --port 3000
```

### Module Not Found

```bash
npm install
```

### Build Fails

Clear cache and rebuild:
```bash
rm -rf node_modules dist
npm install
npm run build
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint checks
npm run typecheck    # Check TypeScript types
```

## Support & Contact

For questions or issues with the Ecostream Overseas website:

- Email: support@ecostreamoverseas.com
- Phone: +91 98765 43210
- Locations: Guntur & Hyderabad, India

## License

All rights reserved by Ecostream Overseas.
