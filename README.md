# CSS Interactive Learning Lab

> "Don't Just Learn CSS. Experiment With It!"

A complete, professional, fully functional educational website that teaches students CSS Media Queries and CSS Animations through detailed explanations, visual demonstrations, live code editors, working animations, responsive screen simulators, coding challenges, and quizzes.

## Features

- **Dark Developer Dashboard**: Premium aesthetics with electric blue/purple accents.
- **Interactive Lessons**: Live previews using isolated iframes to demonstrate responsive concepts exactly as a real browser would.
- **Animation Studio**: Create, edit, and visualize CSS `@keyframes` and animation properties in real-time.
- **Coding Challenges**: A built-in code editor that instantly tests CSS against predefined objectives.
- **CSS Quiz**: Test your theoretical knowledge.
- **Progress Tracking**: Your progress and scores are automatically saved locally.

## Technology Stack

- React + Vite
- React Router DOM
- Vanilla CSS (for fine-grained control and animations)
- Lucide React (Icons)
- LocalStorage (Persistence)

## Installation & Development

To run the project locally:

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open in browser:**
   Navigate to \`http://localhost:5173\` (or whichever port Vite uses).

## Build & Deployment (GitHub Pages)

The \`vite.config.js\` is set with \`base: './'\` to allow deployment to any subdirectory (like GitHub Pages).

1. **Build the production version:**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy to GitHub Pages:**
   If you have the `gh-pages` package installed:
   \`\`\`bash
   npm install -g gh-pages
   gh-pages -d dist
   \`\`\`
   
   Alternatively, you can commit the `dist` folder to your `gh-pages` branch or configure GitHub Actions to build and deploy.
