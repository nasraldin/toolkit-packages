# @ajrly/prettier-config

[![npm version](https://badge.fury.io/js/@ajrly%2Fprettier-config.svg)](https://badge.fury.io/js/@ajrly%2Fprettier-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A professional Prettier configuration for modern JavaScript/TypeScript projects with import sorting
and Tailwind CSS support.

## ✨ Features

- **Modern Formatting**: Optimized for modern JavaScript/TypeScript development
- **Import Sorting**: Automatic import organization with `@ianvs/prettier-plugin-sort-imports`
- **Tailwind CSS Support**: Tailwind class sorting with `prettier-plugin-tailwindcss`
- **React/Next.js Optimized**: Special handling for React and Next.js imports
- **TypeScript Ready**: Full TypeScript support with proper parser plugins
- **Professional Standards**: Follows industry best practices for code formatting

## 🚀 Quick Start

### 📦 Installation

```bash
npm install -D @ajrly/prettier-config
# or
yarn add -D @ajrly/prettier-config
# or
pnpm add -D @ajrly/prettier-config
```

### 📝 Usage

#### Method 1: Extend in package.json

```json
{
  "name": "your-project",
  "prettier": "@ajrly/prettier-config"
}
```

#### Method 2: Import in prettier.config.js

```javascript
// prettier.config.js
module.exports = require('@ajrly/prettier-config');
```

#### Method 3: Import in prettier.config.mjs

```javascript
// prettier.config.mjs
import config from '@ajrly/prettier-config';

export default config;
```

#### Method 4: Extend and customize

```javascript
// prettier.config.js
const baseConfig = require('@ajrly/prettier-config');

module.exports = {
  ...baseConfig,
  // Your custom overrides
  printWidth: 100,
  tabWidth: 4,
};
```

## 📋 Configuration Details

### Core Formatting Options

| Option          | Value      | Description                                         |
| --------------- | ---------- | --------------------------------------------------- |
| `printWidth`    | `100`      | Maximum line length                                 |
| `tabWidth`      | `2`        | Indentation size                                    |
| `useTabs`       | `false`    | Use spaces instead of tabs                          |
| `semi`          | `true`     | Add semicolons                                      |
| `singleQuote`   | `true`     | Use single quotes                                   |
| `trailingComma` | `'all'`    | Add trailing commas everywhere                      |
| `arrowParens`   | `'always'` | Always add parentheses to arrow function parameters |
| `proseWrap`     | `'always'` | Wrap prose content                                  |

### Import Sorting

The configuration includes intelligent import sorting with the following order:

1. **Express.js imports** (`express`, `@express/*`)
2. **Fastify imports** (`fastify`, `@fastify/*`)
3. **Nest.js imports** (`nest`, `@nest/*`)
4. **React imports** (`react`, `react-dom`, etc.)
5. **Next.js imports** (`next/*`)
6. **Third-party modules**
7. **Internal aliases** (`@*` - matches both `@core/etc` and `@/core/etc`)
8. **Relative imports** (`./*`, `../*`)

### Tailwind CSS Support

- **Attributes**: `theme` attribute sorting
- **Functions**: Support for `clsx`, `cva`, `tw`, `cn`, `twMerge`, `createTheme`

### Plugins

- `@ianvs/prettier-plugin-sort-imports` - Import sorting
- `prettier-plugin-tailwindcss` - Tailwind CSS class sorting

## 🔧 Requirements

- **Node.js**: >= 18.0.0
- **Prettier**: ^3.0.0 (peer dependency)

## 📦 Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "peerDependencies": {
    "prettier": "^3.0.0"
  }
}
```

## 🛠️ Development Dependencies

For projects using this config, you'll also need:

```bash
npm install --save-dev @ianvs/prettier-plugin-sort-imports prettier-plugin-tailwindcss
```

## 🧪 Testing

This package includes comprehensive tests to ensure the configuration works correctly:

### Running Tests

```bash
# Run all tests
npm test

# Run tests with formatted output
npm run test:format
```

### Local Publishing & Testing

```bash
# Create a local package for testing
npm run pack

# Test the package creation
npm run pack:test

# Prepare for local testing (runs tests + creates package)
npm run publish:local

# Install the local package in another project
npm install ./ajrly-prettier-config-1.0.0.tgz

# Clean up generated package files
npm run clean
```

### Test Coverage

The test suite covers:

- ✅ **Import Sorting**: All import patterns and ordering
- ✅ **Tailwind CSS**: Class sorting and formatting
- ✅ **TypeScript**: Complex types and interfaces
- ✅ **React Hooks**: Context, state management
- ✅ **Edge Cases**: Template literals, special characters
- ✅ **Complex Data**: Nested objects and arrays

## 📁 File Structure

```
@ajrly/prettier-config/
├── index.mjs          # ES Module export
├── index.cjs          # CommonJS export
├── index.d.ts         # TypeScript declarations
├── prettier-test.js   # Comprehensive test suite
├── package.json       # Package metadata
└── README.md          # This file
```

## 🚀 Development Workflow

### Before Publishing

1. **Run Tests**: Ensure everything works

   ```bash
   npm test
   ```

2. **Create Local Package**: Test the package locally

   ```bash
   npm run publish:local
   ```

3. **Test in Another Project**: Install the local package

   ```bash
   # In another project
   npm install ./ajrly-prettier-config-1.0.0.tgz
   ```

4. **Verify Integration**: Test the config in the other project

   ```json
   {
     "prettier": "@ajrly/prettier-config"
   }
   ```

5. **Publish to NPM**: When ready
   ```bash
   npm publish
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Prettier](https://prettier.io/) - Code formatter
- [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports) -
  Import sorting
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) -
  Tailwind CSS support
