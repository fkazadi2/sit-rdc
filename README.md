# SIT RDC

Site web institutionnel de **SIT RDC - Services for Impact and Transformation**, developpe avec Next.js.

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Prerequis

- Node.js 20.9 ou plus recent
- npm

Pour l'hebergement cPanel, choisir de preference **Node.js 22.x**.

## Installation

Installer les dependances :

```bash
npm install
```

## Lancement en developpement

```bash
npm run dev
```

Le site sera disponible sur :

```txt
http://localhost:3000
```

## Build de production

```bash
npm run build
```

## Lancement en production

```bash
npm start
```

Sur cPanel, le fichier de demarrage a utiliser est :

```txt
server.js
```

Variables d'environnement recommandees :

```txt
NODE_ENV=production
PORT=3000
```

## Structure principale

```txt
src/app
```

Contient les pages du site.

```txt
src/components
```

Contient les composants reutilisables.

```txt
public
```

Contient les images et ressources statiques.

## CMS WordPress headless

Le site peut etre connecte a WordPress comme CMS headless.

Architecture recommandee :

- `sitrdc.org` : site public Next.js
- `cms.sitrdc.org` : WordPress pour la gestion des contenus
- Next.js recupere les contenus via l'API WordPress ou WPGraphQL

Plugins WordPress recommandes :

- Advanced Custom Fields
- Custom Post Type UI
- WPGraphQL
- WPGraphQL for ACF

Variable d'environnement possible :

```txt
WORDPRESS_GRAPHQL_URL=https://cms.sitrdc.org/graphql
```

## Deploiement cPanel

1. Creer une application Node.js dans cPanel.
2. Choisir Node.js 22.x.
3. Mettre le mode en production.
4. Utiliser `sit-rdc` comme dossier d'application.
5. Utiliser `server.js` comme fichier de demarrage.
6. Installer les dependances avec `npm install`.
7. Generer le build avec `npm run build`.
8. Redemarrer l'application Node.js.

## Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
```
