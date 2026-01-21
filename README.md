# Portfolio Yannis Camelin

Site React/Vite avec routing pour présenter 4 projets détaillés, un header discret qui disparaît au scroll, et une charte bleu marine / doré. Sections : accueil, à propos, compétences (tuiles), projets (4 cartes avec liens Figma/Site/GitHub), contact (liens directs) et 4 pages détail avec galerie, contexte/durée/équipe, problèmes/résultats et compétences associées.

## Stack
- React + Vite
- React Router
- Bootstrap (grille/utilitaires) + styles custom
- React Icons

## Installer et lancer
```bash
npm install
npm run dev   # http://localhost:5173
npm run build
```

## Personnalisation rapide
- Mettre à jour les liens (Figma, site, GitHub, LinkedIn, email) dans [src/data/projects.js](src/data/projects.js) et [src/components/Footer.jsx](src/components/Footer.jsx).
- Remplacer les dégradés de "fake" images par vos visuels (props `mainImage`/`gallery`).
- Ajuster les compétences dans [src/components/HomePage.jsx](src/components/HomePage.jsx).
- Couleurs principales : `--navy: #0b1b2b`, `--gold: #d4af37` (voir [src/index.css](src/index.css)).

## Pages et routes
- `/` accueil avec sections et CTA vers projets/contact
- `/projects/:slug` page détail projet avec 3 autres projets suggérés
