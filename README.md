# Neo-Brutalist Homepage

A minimal, modern, futuristic homepage built with SvelteKit featuring a neo-brutalist design aesthetic. Perfect for hosting all your important links in one place.

## Features

- 🎨 **Neo-Brutalist Design** - Bold, geometric, and unapologetically modern
- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching with persistence
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **SvelteKit Powered** - Fast, modern, and efficient
- 🎯 **Link Management** - Easy to customize your important links
- 🚀 **TypeScript Support** - Type-safe development experience

## Design Philosophy

This homepage embraces neo-brutalist design principles:
- **Bold Typography** - Using Inter and JetBrains Mono fonts
- **High Contrast** - Sharp borders and strong visual hierarchy
- **Geometric Elements** - Clean lines, squares, and structured layouts
- **Functional Aesthetics** - Every element serves a purpose
- **Harsh Shadows** - Distinctive 3D-like shadow effects

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Customization

#### Adding Your Links

Edit the `links` array in `src/routes/+page.svelte`:

```typescript
const links = [
  {
    title: 'Your Link',
    url: 'https://example.com',
    description: 'Description of your link',
    icon: '🔗' // Any emoji or icon
  },
  // Add more links...
];
```

#### Customizing Colors

Modify the CSS variables in `src/app.css`:

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-accent: #000000;
  /* ... more variables */
}
```

#### Changing Typography

Update the font imports in `src/app.css` and modify the font-family declarations.

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   └── ThemeToggle.svelte    # Dark/light mode toggle
│   └── stores/
│       └── theme.ts              # Theme state management
├── routes/
│   ├── +layout.svelte           # App layout
│   └── +page.svelte             # Homepage
├── app.css                      # Global styles
└── app.html                     # HTML template
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Technologies Used

- **SvelteKit** - Full-stack web framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **ESLint & Prettier** - Code quality and formatting

## Deployment

This project can be deployed to any static hosting service:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service

### Recommended Hosting Platforms

- **Vercel** - Zero-config deployment
- **Netlify** - Easy static hosting
- **GitHub Pages** - Free hosting for public repos
- **Cloudflare Pages** - Fast global CDN

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using SvelteKit and Neo-Brutalist design principles.
