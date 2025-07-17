import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
   { ignores: ['dist'] },
   {
      files: ['**/*.{ts,tsx}'],
      plugins: {
         'react-hooks': reactHooks,
         'react-refresh': reactRefresh,
         'simple-import-sort': simpleImportSort,
         'jsx-a11y': jsxA11y,
      },
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      languageOptions: {
         ecmaVersion: 2022,
         globals: globals.browser,
      },
      rules: {
         ...reactHooks.configs.recommended.rules,
         ...jsxA11y.configs.recommended.rules,
         'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
         // Import-Sorting Rules
         'simple-import-sort/imports': 'error',
         'simple-import-sort/exports': 'error',
         // A11y Customizations
         'jsx-a11y/alt-text': 'error',
         'jsx-a11y/label-has-associated-control': 'error',
         'jsx-a11y/no-autofocus': 'warn',
         'jsx-a11y/click-events-have-key-events': 'error',
      },
   },
]);
