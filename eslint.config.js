import js from '@eslint/js';
import typescript from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['**/*', '!app/**/*', '**/^@/types/(.*)$/**'],
    languageOptions: {
      globals: {
        browser: true,
        node: true,
        es2022: true,
        React: 'readonly',
      },
      parser: typescript,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-empty-pattern': 'off',
    },
  },
  eslintConfigPrettier,
];
