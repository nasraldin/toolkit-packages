# @ajrly/stylelint-config

[![npm version](https://badge.fury.io/js/@ajrly%2Fstylelint-config.svg)](https://badge.fury.io/js/@ajrly%2Fstylelint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A professional Stylelint configuration for modern CSS/SCSS development with Tailwind CSS support.

## ✨ Features

- **Tailwind CSS Support**: Optimized for Tailwind CSS projects with proper at-rule handling
- **Modern Standards**: Extends `stylelint-config-standard` and `stylelint-config-tailwindcss`
- **Custom Rules**: Includes custom rule configurations for modern development
- **TypeScript Ready**: Full TypeScript support with proper type definitions
- **Dual Module Support**: Both ES Modules and CommonJS exports
- **Import Ordering**: Includes `stylelint-order` plugin for property ordering

## 🚀 Quick Start

### 📦 Installation

```bash
npm install -D @ajrly/stylelint-config
# or
yarn add -D @ajrly/stylelint-config
# or
pnpm add -D @ajrly/stylelint-config
```

### 📝 Usage

#### Method 1: Extend in package.json

```json
{
  "name": "your-project",
  "stylelint": {
    "extends": ["@ajrly/stylelint-config"]
  }
}
```

#### Method 2: Import in .stylelintrc.js

```javascript
module.exports = require('@ajrly/stylelint-config');
```

#### Method 3: Import in stylelint.config.js

```javascript
// stylelint.config.js
import config from '@ajrly/stylelint-config';

export default config;
```

#### Method 4: Extend and customize

```javascript
// .stylelintrc.js
const baseConfig = require('@ajrly/stylelint-config');

module.exports = {
  ...baseConfig,
  // Your custom overrides
  rules: {
    ...baseConfig.rules,
    'your-custom-rule': true,
  },
};
```

## 📋 Configuration Details

### Extends

- `stylelint-config-standard` - Standard Stylelint rules
- `stylelint-config-tailwindcss` - Tailwind CSS specific rules

### Plugins

- `stylelint-order` - Property ordering plugin

### Custom Rules

| Rule                                        | Value                              | Description                        |
| ------------------------------------------- | ---------------------------------- | ---------------------------------- |
| `at-rule-no-unknown`                        | `true` with custom `ignoreAtRules` | Allows Tailwind CSS at-rules       |
| `at-rule-no-deprecated`                     | `true` with custom `ignoreAtRules` | Allows `@apply` directive          |
| `selector-class-pattern`                    | `null`                             | Disables class naming restrictions |
| `declaration-block-no-duplicate-properties` | `true`                             | Prevents duplicate properties      |
| `no-invalid-position-at-import-rule`        | `null`                             | Allows imports anywhere            |
| `import-notation`                           | `null`                             | Allows any import notation         |
| `no-duplicate-selectors`                    | `null`                             | Allows duplicate selectors         |

### Tailwind CSS At-Rules

The configuration includes support for these Tailwind CSS at-rules:

- `tailwind`
- `apply`
- `responsive`
- `screen`
- `import`
- `variant`
- `theme`
- `utility`
- `custom-variant`
- `plugin`

## 🔧 Requirements

- **Node.js**: >= 18.0.0
- **Stylelint**: ^14.0.0 || ^15.0.0 || ^16.0.0 (peer dependency)
- **stylelint-config-standard**: ^36.0.0 (peer dependency)
- **stylelint-config-tailwindcss**: ^0.0.7 (peer dependency)
- **stylelint-order**: ^6.0.4 (peer dependency)

## 📦 Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "peerDependencies": {
    "stylelint": "^14.0.0 || ^15.0.0 || ^16.0.0",
    "stylelint-config-standard": "^36.0.0",
    "stylelint-config-tailwindcss": "^0.0.7",
    "stylelint-order": "^6.0.4"
  }
}
```

## 🛠️ Development Dependencies

For projects using this config, you'll also need:

```bash
npm install --save-dev stylelint stylelint-config-standard stylelint-config-tailwindcss stylelint-order
```

## 🧪 Testing

This package includes comprehensive tests to ensure the configuration works correctly:

### Running Tests

```bash
# Run all tests
npm test

# Run linting tests
npm run test:lint
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
npm install ./ajrly-stylelint-config-1.0.0.tgz

# Clean up generated package files
npm run clean
```

### Test Coverage

The test suite covers:

- ✅ **Configuration Structure**: Valid Stylelint configuration format
- ✅ **Rule Validation**: All custom rules are properly configured
- ✅ **Integration**: Works with actual Stylelint
- ✅ **Tailwind Support**: Tailwind CSS at-rules are properly handled
- ✅ **Error Handling**: Configuration validation and error reporting

## 📁 File Structure

```
@ajrly/stylelint-config/
├── index.mjs          # ES Module export
├── index.cjs          # CommonJS export
├── index.d.ts         # TypeScript declarations
├── test.js            # Comprehensive test suite
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
   npm install ./ajrly-stylelint-config-1.0.0.tgz
   ```

4. **Verify Integration**: Test the config in the other project

   ```json
   {
     "stylelint": {
       "extends": ["@ajrly/stylelint-config"]
     }
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

- [Stylelint](https://stylelint.io/) - CSS linter
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) - Standard
  configuration
- [stylelint-config-tailwindcss](https://github.com/francoismassart/stylelint-config-tailwindcss) -
  Tailwind CSS configuration
- [stylelint-order](https://github.com/hudochenkov/stylelint-order) - Property ordering plugin
