# @ajrly/eslint-config

[![npm version](https://badge.fury.io/js/%40ajrly%2Feslint-config.svg)](https://badge.fury.io/js/%40ajrly%2Feslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Professional ESLint configuration for modern projects. A shareable ESLint configuration package that
provides consistent code quality rules across your projects.

## 📦 Installation

```bash
# Install the package
pnpm add -D @ajrly/eslint-config

# Install peer dependencies
pnpm add -D eslint @eslint/js typescript-eslint eslint-plugin-react eslint-plugin-prettier eslint-plugin-security eslint-plugin-react-compiler globals
```

## 🚀 Quick Start

### Basic Usage

```javascript
// eslint.config.js
import config from '@ajrly/eslint-config';

export default config;
```

### React Projects

```javascript
// eslint.config.js
import { reactConfig } from '@ajrly/eslint-config';

export default reactConfig;
```

### Next.js Projects

```javascript
// eslint.config.js
import { nextConfig } from '@ajrly/eslint-config';

export default nextConfig;
```

### Node.js Projects

```javascript
// eslint.config.js
import { nodeConfig } from '@ajrly/eslint-config';

export default nodeConfig;
```

### Library Projects

```javascript
// eslint.config.js
import { libraryConfig } from '@ajrly/eslint-config';

export default libraryConfig;
```

## 📋 Available Configurations

| Configuration   | Description                         | Use Case                               |
| --------------- | ----------------------------------- | -------------------------------------- |
| `baseConfig`    | Base configuration for all projects | General JavaScript/TypeScript projects |
| `reactConfig`   | React-specific configuration        | React applications                     |
| `nextConfig`    | Next.js-specific configuration      | Next.js applications                   |
| `nodeConfig`    | Node.js-specific configuration      | Backend/API projects                   |
| `libraryConfig` | Library-specific configuration      | NPM packages/libraries                 |

## 🔧 Features

### ✨ Modern ESLint Flat Config

- Uses ESLint's new flat configuration format
- No more `.eslintrc` files needed
- Better performance and simpler setup

### 🎯 TypeScript Support

- Full TypeScript support with `typescript-eslint`
- Strict type checking rules
- Modern TypeScript features support

### ⚛️ React Support

- React-specific rules and plugins
- JSX support with proper linting
- React Hooks rules

### 🎨 Prettier Integration

- Seamless Prettier integration
- No conflicts between ESLint and Prettier
- Consistent code formatting

### 🔒 Security Rules

- Built-in security rules
- Prevents common security vulnerabilities
- Best practices enforcement

### 🎯 Code Quality

- Enforces consistent code style
- Prevents common mistakes
- Modern JavaScript/TypeScript practices

## 📁 Project Structure

```
@ajrly/eslint-config/
├── index.mjs          # ES Module exports
├── index.cjs          # CommonJS exports
├── index.d.ts         # TypeScript declarations
├── test.js            # Test suite
├── package.json       # Package metadata
└── README.md          # This file
```

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Run tests
pnpm test

# Test formatting
pnpm test:format

# Local publishing for testing
pnpm publish:local
```

## 📦 Local Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Create local package for testing
pnpm publish:local

# Install local package in another project
pnpm install ./ajrly-eslint-config-1.0.0.tgz
```

## 🔧 Configuration Details

### Base Configuration

- Modern JavaScript/TypeScript support
- Strict type checking
- Code quality rules
- Security rules
- Prettier integration

### React Configuration

- All base configuration features
- React-specific rules
- JSX support
- React Hooks rules

### Next.js Configuration

- All React configuration features
- Next.js specific globals
- App Router support
- Server/Client component rules

### Node.js Configuration

- All base configuration features
- Node.js specific globals
- Backend development rules
- API development support

### Library Configuration

- All base configuration features
- Library-specific rules
- Console warnings allowed (for debugging)
- Export/import rules

## 🎯 Rules Included

### Code Quality

- `no-console` - Prevents console usage (except in libraries)
- `no-unused-vars` - Prevents unused variables
- `no-duplicate-imports` - Prevents duplicate imports
- `quotes` - Enforces single quotes
- `semi` - Enforces semicolons

### TypeScript

- `@typescript-eslint/no-unused-vars` - TypeScript unused variables
- `@typescript-eslint/no-empty-object-type` - Prevents empty object types
- Strict type checking rules

### React

- `react-hooks/rules-of-hooks` - React Hooks rules
- `react-hooks/exhaustive-deps` - React Hooks dependencies
- `react/no-unknown-property` - Unknown JSX properties
- JSX formatting rules

### Security

- `no-restricted-globals` - Prevents global usage
- Security plugin rules
- Best practices enforcement

## 🔧 Customization

You can extend any configuration:

```javascript
// eslint.config.js
import { baseConfig } from '@ajrly/eslint-config';

export default [
  ...baseConfig,
  {
    rules: {
      // Your custom rules here
      'no-console': 'warn',
    },
  },
];
```

## 📝 License

MIT License - see [LICENSE](../../LICENSE) for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📞 Support

- 📧 Email: ns@nasraldin.com
- 🌐 Website: https://nasraldin.com
- 🐛 Issues: [GitHub Issues](https://github.com/nasraldin/ajrly-workspaces/issues)

---

Made with ❤️ by [Nasr Aldin](https://nasraldin.com)
