# Vite SPA Boilerplate

A minimal, production-ready Single Page Application (SPA) boilerplate built with **Vite** + **React** + **TypeScript**.

## Tech Stack

- [Vite](https://vitejs.dev/) — lightning-fast build tool & dev server
- [React 18](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [ESLint](https://eslint.org/) — linting

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:5173` with HMR enabled.

### Build

```bash
npm run build
```

Outputs production-ready files to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── App.tsx      # Root component
│   ├── main.tsx     # Entry point
│   └── index.css    # Global styles
├── index.html       # HTML entry point
├── vite.config.ts   # Vite configuration
└── tsconfig.json    # TypeScript configuration
```

## Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Stable, production-ready code |
| `dev`  | Active development & feature integration |

Feature branches should be created off `dev` and merged back via pull request.

## License

MIT
