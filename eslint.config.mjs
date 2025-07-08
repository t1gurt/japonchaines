import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['.next/', 'node_modules/', 'out/', 'docs/', '*.config.*'],
  },
  { 
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      }
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Next.js doesn't require React import
      'react/no-unescaped-entities': 'off', // Allow common characters in JSX
      '@typescript-eslint/no-unused-vars': 'warn', // Changed to warning
      '@typescript-eslint/no-explicit-any': 'warn', // Changed to warning
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];