/**
 * @see https://eslint.org/docs/latest/extend/shareable-configs
 * Professional ESLint configuration for modern projects
 */

const pluginReact = require('eslint-plugin-react');
const pluginReactHooks = require('eslint-plugin-react-hooks');
const pluginPrettier = require('eslint-plugin-prettier');
const pluginSecurity = require('eslint-plugin-security');
const reactCompiler = require('eslint-plugin-react-compiler');
const globals = require('globals');
const tseslint = require('typescript-eslint');

const css = require('@eslint/css');
const js = require('@eslint/js');
const json = require('@eslint/json');
const markdown = require('@eslint/markdown');

// Base configuration for all projects
const baseConfig = [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    ...js.configs.recommended,
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
  },
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    plugins: {
      security: pluginSecurity,
      prettier: pluginPrettier,
      'react-compiler': reactCompiler,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
      'no-console': 'error',
      'no-unused-vars': 'off',
      'no-duplicate-imports': 'error',
      'no-empty-function': 'warn',
      'no-empty-pattern': 'warn',
      'no-plusplus': [
        'warn',
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'react-compiler/react-compiler': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react/no-unknown-property': [
        1,
        {
          ignore: ['css', 'cmdk-input-wrapper', 'vaul-drawer-wrapper'],
        },
      ],
      semi: ['error', 'always'],
      'react/jsx-first-prop-new-line': [2, 'multiline'],
      'react/jsx-max-props-per-line': [2, { maximum: 2, when: 'multiline' }],
      'react/jsx-indent-props': [2, 2],
      'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-object-type': [
        1,
        {
          allowInterfaces: 'with-single-extends',
        },
      ],
      'no-restricted-globals': ['error', 'process'],
      'prettier/prettier': 'error',
    },
  },
  {
    // Allow process.env in environment configuration files
    files: [
      'src/env/**/*.{js,mjs,ts,tsx}',
      'scripts/**/*.{js,mjs,ts,tsx}',
      'public/sw.js',
      'env.checker.mjs',
      'postcss.config.mjs',
      'next.config.ts',
    ],
    rules: {
      'no-restricted-globals': 'off',
    },
  },
  {
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'cva', 'tw', 'cn', 'twMerge', 'createTheme'],
        removeDuplicates: true,
        skipClassAttribute: false,
        whitelist: [
          '(app\\-).*',
          '(app\\_).*',
          '(theme\\-).*',
          'toaster',
          'destructive',
          'aspect-square',
          'aspect-video',
          'origin-top-center',
        ],
        classRegex: '^(class(Name)|theme)?$',
      },
    },
  },
  {
    ignores: ['node_modules', '.history', '.next', '@types', '_temp', 'dist', 'build'],
  },
];

// React configuration
const reactConfig = [
  ...baseConfig,
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { react: pluginReact },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

// Next.js configuration
const nextConfig = [
  ...reactConfig,
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
];

// Node.js configuration
const nodeConfig = [
  ...baseConfig,
  {
    files: ['**/*.{js,mjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
];

// Library configuration
const libraryConfig = [
  ...baseConfig,
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    rules: {
      'no-console': 'warn', // Allow console in libraries for debugging
    },
  },
];

module.exports = baseConfig;
module.exports.baseConfig = baseConfig;
module.exports.reactConfig = reactConfig;
module.exports.nextConfig = nextConfig;
module.exports.nodeConfig = nodeConfig;
module.exports.libraryConfig = libraryConfig;
