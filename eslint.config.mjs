import globals from 'globals';
import pluginJs from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default {
  overrides: [
    {
      files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
      languageOptions: {
        sourceType: 'script',
        globals: globals.browser,
      },
      ...pluginJs.configs.recommended,
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        parser: typescriptParser,
        parserOptions: {
          ecmaVersion: 2021,
          sourceType: 'module',
        },
        globals: globals.browser,
      },
      plugins: {
        '@typescript-eslint': typescriptEslint,
      },
      ...typescriptEslint.configs.recommended,
    },
  ],
  rules: {
    // Add or override rules here
  },
  settings: {
    // Add any settings if needed
  },
};
