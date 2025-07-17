# PROJECT STRUCTURE

src/
├── core/
│ ├── config/
│ │ ├── trustLevels.ts # 01-04, 09 Definitionen
│ │ └── domains.ts # .de/.net Domain-Config
│ └── api/
│ └── emailProviders.ts # Thunderbird, Proton APIs
├── modules/
│ ├── components/
│ │ ├── TrustLevelBadge.tsx
│ │ ├── EmailGenerator.tsx
│ │ └── MigrationWizard.tsx
│ ├── pages/
│ │ ├── Dashboard.tsx # Übersicht aller E-Mails
│ │ ├── Generator.tsx # Neue E-Mail erstellen
│ │ └── Registry.tsx # Trust_Level_Registry
│ └── containers/
│ ├── TrustLevelManager.tsx
│ └── EmailFilterManager.tsx
├── shared/
│ ├── utils/
│ │ ├── idGenerator.ts # 8-stellige IDs
│ │ ├── trustLevelLogic.ts
│ │ └── emailValidation.ts
│ ├── hooks/
│ │ ├── useTrustLevel.ts
│ │ └── useEmailRegistry.ts
│ └── data/
│ └── mockEmails.ts # Für Development
