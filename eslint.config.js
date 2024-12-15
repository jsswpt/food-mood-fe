import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginSort from 'eslint-plugin-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginSort.configs['flat/recommended'],
  {
    rules: {
      'sort/imports': [
        'warn',
        {
          groups: [
            { order: 1, type: 'side-effect' },
            { order: 10, regex: "^(.*)'react?(.*)'$" },
            { order: 11, regex: "^(.*)'react-dom?(.*)'$" },
            { order: 20, type: 'dependency' },
            { order: 30, regex: '^(.*)app?(.*)$' },
            { order: 31, regex: '^(.*)screens?(.*)$' },
            { order: 32, regex: '^(.*)features?(.*)$' },
            { order: 33, regex: '^(.*)entities?(.*)$' },
            { order: 34, regex: '^(.*)shared?(.*)$' },
            { order: 30, type: 'other' },
          ],
          separator: '\n',
        },
      ],
    },
  },
  {
    files: ['**/index.ts'],
    rules: {
      'sort/exports': [
        'error',
        {
          caseSensitive: false,
          groups: [],
          natural: true,
          typeOrder: 'preserve',
        },
      ],
    },
  },
]
