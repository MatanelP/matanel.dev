# matanel.dev

My personal portfolio site built with [Astro](https://astro.build).

🔗 **[matanel.dev](https://matanel.dev)**

## Features

- Dark/light theme with system preference detection
- Mouse spotlight effect
- Hover effects on projects, experience, and skills
- Responsive design with Tailwind CSS
- CV PDF download

## Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Fonts:** Inter, JetBrains Mono
- **Deployment:** GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.astro
│   └── ProjectCard.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── projects/
│       ├── airtype.astro
│       ├── choklo.astro
│       ├── netstat.astro
│       └── active.astro
└── styles/
    └── global.css
```

## License

MIT
