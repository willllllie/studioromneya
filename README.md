# StudioRomneya Landing Page

A single-page landing site built with HTML, CSS, and JavaScript, using Bun for development.

## Setup

1. Install Bun (if not already installed):
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. Install dependencies (none required for static site):
   ```bash
   bun install
   ```

3. Start development server:
   ```bash
   bun run dev
   ```

4. Open http://localhost:3000 in your browser

## Project Structure

```
StudioRomneya/
├── index.html          # Main HTML file
├── css/
│   ├── reset.css       # CSS reset
│   ├── tokens.css      # Design tokens (colors, typography, spacing)
│   ├── grid.css        # 12-column grid system
│   └── main.css        # Component styles
├── js/
│   └── main.js         # JavaScript (minimal, animation-ready)
├── server.js           # Bun dev server
├── package.json        # Project configuration
└── netlify.toml        # Netlify deployment config
```

## Design System

- **Grid**: 12-column CSS Grid with 24px padding
- **Spacing**: Token-based spacing scale (4px increments, 24px base)
- **Typography**: Token-based font sizes and weights
- **Colors**: Token-based color system (to be populated from Figma)

## Deployment

Deploy to Netlify by:
1. Drag and drop the project folder to Netlify Drop, OR
2. Connect your Git repository to Netlify

No build step required - static files are ready to deploy.
