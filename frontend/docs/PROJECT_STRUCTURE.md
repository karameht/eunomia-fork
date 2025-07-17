# Project Structure

This document shows where to find what in the EUNOMIA frontend codebase.

## Directory Overview

```text
frontend/
├── docs/                    # Documentation
│   └── PROJECT_STRUCTURE.md
├── public/                  # Static assets
│   ├── favicon.svg
│   └── index.html
├── src/                     # Source code
│   ├── modules/
│   ├── shared/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── .vscode/                 # VS Code workspace settings
├── .husky/                  # Git hooks
├── node_modules/            # Dependencies
├── dist/                    # Production build output
└── configuration files
```

## Source Code Structure

### Core Application Files

```text
src/
├── main.tsx                 # Application entry point
├── App.tsx                  # Router configuration
├── index.css                # Global styles
└── vite-env.d.ts           # Vite type definitions
```

### Modules Directory

```text
modules/
├── components/              # Reusable UI components
│   └── layout/             # Layout components
│       ├── AppShell.tsx
│       ├── AppShell.styles.ts
│       ├── Header.tsx
│       ├── Header.styles.ts
│       ├── Sidebar.tsx
│       ├── Sidebar.styles.ts
│       ├── Footer.tsx
│       └── Footer.styles.ts
└── pages/                  # Page components
    ├── Dashboard.tsx
    └── Configuration.tsx
```

### Shared Directory

```text
shared/
├── constants/              # Application constants
│   └── routes.ts          # Route definitions
├── utils/                 # Utility functions (future)
├── hooks/                 # Custom React hooks (future)
├── types/                 # TypeScript definitions (future)
└── services/              # API services (future)
```

## Where to find what

### Components

- **Layout components**: `src/modules/components/layout/`
- **Page components**: `src/modules/pages/`
- **Component styles**: `ComponentName.styles.ts` (next to component)

### Configuration

- **Routes**: `src/shared/constants/routes.ts`
- **TypeScript config**: `tsconfig.json`, `tsconfig.app.json`
- **Build config**: `vite.config.ts`
- **Linting**: `eslint.config.js`
- **Formatting**: `.prettierrc`

### Development

- **Scripts**: `package.json`
- **Dependencies**: `package.json`, `yarn.lock`
- **Git hooks**: `.husky/`
- **VS Code settings**: `.vscode/settings.json`

## Adding new features

### New page

1. Create `PageName.tsx` in `src/modules/pages/`
2. Add route to `src/shared/constants/routes.ts`
3. Add route to `App.tsx`

### New component

1. Create `ComponentName.tsx` in appropriate `src/modules/components/` subfolder
2. Create `ComponentName.styles.ts` for styles
3. Export from component file

### New shared utility

1. Add to `src/shared/` in appropriate subfolder
2. Use absolute import with `@/shared/`

## File naming conventions

- **Components**: `PascalCase.tsx`
- **Styles**: `PascalCase.styles.ts`
- **Constants**: `camelCase.ts`
- **Utilities**: `camelCase.ts`
- **Types**: `camelCase.types.ts`
