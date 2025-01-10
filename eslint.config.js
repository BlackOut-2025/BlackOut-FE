import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import * as pluginQuery from '@tanstack/eslint-plugin-query'
import typescriptParser from '@typescript-eslint/parser'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config(
  { ignores: ['dist', 'styled-system', 'panda.config.ts'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
      parser: typescriptParser,
    },
    plugins: {
      '@tanstack/query': pluginQuery,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-else-return': 'error',
      'no-console': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          allowSeparatedGroups: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type', 'unknown'],
          pathGroups: [
            {
              pattern: 'next',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'react',
              group: 'builtin',
            },
            {
              pattern: '@tanstack/**',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@/libs/**',
              group: 'unknown',
            },
            {
              pattern: '@/core/**',
              group: 'unknown',
            },
            {
              pattern: '@/store/**',
              group: 'unknown',
            },
            {
              pattern: '**/*.css.ts',
              group: 'unknown',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
)
