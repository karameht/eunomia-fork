# EUNOMIA Frontend

> Modern React TypeScript application

A professional frontend application built with React 19, TypeScript, and modern development tools. Features clean architecture, type-safe routing, and automated code quality enforcement.

## Tech Stack

- **Framework**: React 19 + TypeScript 5.8
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 (Dark Mode)
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Code Quality**: ESLint + Prettier + Husky
- **Package Manager**: Yarn

## Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Project Structure

See detailed project structure documentation: [`docs/PROJECT_STRUCTURE.md`](docs/PROJECT_STRUCTURE.md)

## Development Scripts

```bash
# Development
yarn dev                     # Start dev server (http://localhost:5173)
yarn build                   # Production build
yarn preview                 # Preview production build

# Code Quality
yarn lint                    # Run ESLint
yarn lint:check              # Check for lint issues
yarn lint:fix                # Auto-fix lint issues
yarn format                  # Format with Prettier
yarn format:check            # Check formatting
yarn check                   # Run lint + format check
yarn fix                     # Auto-fix lint + format issues
```

## Key Features

### Modern React Architecture

- Function components with TypeScript
- Custom hooks for state management
- Modular component structure
- Separated style definitions

### Type-Safe Routing

```typescript
// Centralized route definitions
export const ROUTES = {
   DASHBOARD: '/',
   CONFIGURATION: '/configuration',
} as const;
```

### Code Quality Automation

- **Husky**: Git hooks for quality gates
- **lint-staged**: Run linters on staged files
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Consistent code formatting

### Styling Architecture

- **Tailwind CSS 4**: Utility-first CSS framework
- **Dark Mode Only**: Consistent theming
- **Modular Styles**: Separated `.styles.ts` files
- **Responsive Design**: Mobile-first approach

## Import Strategy

### Absolute Imports

```typescript
// Use @ for clean imports
import Component from '@/modules/components/Component';
import { ROUTES } from '@/shared/constants/routes';
```

### Path Mapping (tsconfig.json)

```json
{
   "compilerOptions": {
      "baseUrl": ".",
      "paths": {
         "@/*": ["./src/*"]
      }
   }
}
```

## Styling Conventions

### Component + Styles Pattern

```typescript
// Component.tsx
import { componentStyles as styles } from './Component.styles';

export default function Component() {
  return <div className={styles.container}>Content</div>;
}

// Component.styles.ts
export const componentStyles = {
  container: 'bg-gray-900 p-4 rounded-lg',
  header: 'text-xl font-bold text-white',
};
```

## Configuration Files

| File                 | Purpose                    |
| -------------------- | -------------------------- |
| `vite.config.ts`     | Vite build configuration   |
| `tsconfig.json`      | TypeScript configuration   |
| `eslint.config.js`   | ESLint rules and plugins   |
| `.prettierrc`        | Prettier formatting rules  |
| `tailwind.config.js` | Tailwind CSS configuration |
| `.husky/`            | Git hooks configuration    |

## Production Build

```bash
# Create optimized production build
yarn build

# Outputs to ./dist directory
# - Minified JavaScript bundles
# - Optimized CSS
# - Static assets with cache headers
```

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **ES2022**: Native support for modern JavaScript features
- **TypeScript**: Full type checking and IntelliSense support

## 🔍 Development Tools

### VS Code Extensions (Recommended)

- **TypeScript**: Built-in support
- **Prettier**: Code formatter
- **ESLint**: Code linting
- **Tailwind CSS IntelliSense**: CSS class suggestions
- **Auto Rename Tag**: HTML/JSX tag management

### Browser DevTools

- **React Developer Tools**: Component inspection
- **Redux DevTools**: State management (if added)
- **Vite Plugin**: HMR and build analysis
