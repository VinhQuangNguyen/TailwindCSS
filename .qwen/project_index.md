# Project Index: TailwindCSS React Vite

## Project Overview
- **Project Name**: ten-du-an
- **Type**: React application with Vite bundler
- **Framework**: React 19.1.1
- **Bundler**: Vite 7.1.7
- **CSS Framework**: Tailwind CSS v4.0

## Directory Structure
```
D:\TailwindCSS\
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── .gemini\
├── .git\
├── .qwen\
│   └── settings.json
├── node_modules\
├── public\
│   └── vite.svg
└── src\
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── ...
```

## Key Files

### Configuration
- `vite.config.js` - Vite configuration with React and Tailwind CSS plugins
- `package.json` - Dependencies including React, Vite, Tailwind CSS, and @tailwindcss/vite plugin
- `eslint.config.js` - ESLint configuration

### Source Code
- `src/App.jsx` - Main React component with a counter button styled with Tailwind CSS (red button)
- `src/index.css` - Global styles with Tailwind CSS import
- `src/App.css` - Component-specific styles
- `src/main.jsx` - Main entry point that renders the App component

### Entry Points
- `index.html` - HTML template
- `src/main.jsx` - JavaScript entry point

## Key Features Implemented
1. Tailwind CSS v4.0 integration with Vite plugin (@tailwindcss/vite)
2. Red styled button using Tailwind classes: `bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`
3. Standard Vite + React project setup with ESLint

## Dependencies
### Production
- react: ^19.1.1
- react-dom: ^19.1.1

### Development
- @vitejs/plugin-react
- @tailwindcss/vite
- tailwindcss
- vite: ^7.1.7
- eslint and related plugins

## Build System
- Build: `npm run build`
- Development server: `npm run dev`
- Linting: `npm run lint`
- Preview: `npm run preview`

## Recent Changes
- Added Tailwind CSS v4.0 support
- Updated vite.config.js to include @tailwindcss/vite plugin
- Added `@import "tailwindcss";` to index.css
- Styled the counter button with red Tailwind classes: bg-red-500, hover:bg-red-700, text-white, font-bold, py-2, px-4, rounded