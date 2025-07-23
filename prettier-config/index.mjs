/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  // Core formatting options
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  proseWrap: 'always',

  // Import sorting configuration
  importOrder: [
    // Express
    '^(express/(.*)$)|^(express$)|^(@express/.*)$',

    // Fastify
    '^(fastify/(.*)$)|^(fastify$)|^(@fastify/.*)$',

    // Nest.js
    '^(nest/(.*)$)|^(nest$)|^(@nest/.*)$',

    // React
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',

    // Third party modules
    '<THIRD_PARTY_MODULES>',

    // Local modules
    '',
    '^@.*',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],

  // Tailwind CSS configuration
  tailwindAttributes: ['theme'],
  tailwindFunctions: ['clsx', 'cva', 'tw', 'cn', 'twMerge', 'createTheme'],

  // Plugins
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};

// Export as both default and named export for flexibility
export default config;
export { config };
