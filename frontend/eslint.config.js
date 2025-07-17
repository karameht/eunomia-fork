import js from '@eslint/js';
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
      },
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      languageOptions: {
         ecmaVersion: 2022,
         globals: globals.browser,
      },
      rules: {
         ...reactHooks.configs.recommended.rules,
         'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
         // ← Import-Sorting Rules
         'simple-import-sort/imports': 'error',
         'simple-import-sort/exports': 'error',
      },
   },
]);
