# @ajrly/tsconfig

[![npm version](https://badge.fury.io/js/@ajrly%2Ftsconfig.svg)](https://badge.fury.io/js/@ajrly%2Ftsconfig)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A suite of professional, shareable TypeScript JSON configs for monorepos, Next.js, React, Node.js,
libraries, and more.

---

## ✨ Features

- **Multiple JSON configs**: `base`, `monorepo`, `nextjs`, `react`, `node`, `library`, `jest`
- **Modern standards**: ES2024, NodeNext, strict type safety
- **Framework support**: Next.js, React, Node.js, Jest
- **Monorepo ready**: Path mapping, composite builds
- **Zero JS/TS code**: Pure JSON, works with TypeScript's `extends`
- **Peer dependency awareness**: See below for required plugins

---

## 🚀 Quick Start

### 1. Install

```bash
pnpm add -D @ajrly/tsconfig
# or
yarn add -D @ajrly/tsconfig
# or
npm install -D @ajrly/tsconfig
```

### 2. Use in your `tsconfig.json`

**Monorepo root:**

```json
{
  "extends": "@ajrly/tsconfig/monorepo.json"
}
```

**Next.js app:**

```json
{
  "extends": "@ajrly/tsconfig/nextjs.json"
}
```

**React app:**

```json
{
  "extends": "@ajrly/tsconfig/react.json"
}
```

**Node.js app:**

```json
{
  "extends": "@ajrly/tsconfig/node.json"
}
```

**Library:**

```json
{
  "extends": "@ajrly/tsconfig/lib.json"
}
```

**Jest/Testing:**

```json
{
  "extends": "@ajrly/tsconfig/jest.json"
}
```

---

## 📦 Available Configs

| Config          | Use Case               | Peer Dependencies / Plugins Needed                    |
| --------------- | ---------------------- | ----------------------------------------------------- |
| `base.json`     | General/starting point | `typescript`                                          |
| `monorepo.json` | Monorepo root          | `typescript`                                          |
| `nextjs.json`   | Next.js app            | `typescript`, `typescript-plugin-css-modules`, `next` |
| `react.json`    | React app              | `typescript`                                          |
| `node.json`     | Node.js app            | `typescript`                                          |
| `lib.json`      | Library/package        | `typescript`                                          |
| `jest.json`     | Jest/test env          | `typescript`, `@types/jest`                           |

---

## 🔗 Peer Dependencies

You **must** install these in your project for the relevant config:

- **All configs:**
  - `typescript@^5`
- **Next.js:**
  - `typescript-plugin-css-modules`
  - `next`
- **Jest:**
  - `@types/jest`

Example:

```bash
pnpm add -D typescript typescript-plugin-css-modules next @types/jest
```

---

## 🧪 Testing

This package includes a test script to validate all JSON configs:

```bash
pnpm test
```

---

## 📝 Example: Next.js Project

```json
{
  "extends": "@ajrly/tsconfig/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 🛠️ Development

- All configs are pure JSON for maximum compatibility.
- No `main`, `types`, or `exports` fields are needed in `package.json`.
- Only the `files` array is required to publish the JSON configs.

---

## 📁 File Structure

```
@ajrly/tsconfig/
├── base.json
├── monorepo.json
├── nextjs.json
├── react.json
├── node.json
├── lib.json
├── jest.json
├── tsconfig.workspaces.json
├── tsconfig-test.js
├── package.json
└── README.md
```

---

## 🤝 Contributing

1. Fork the repo
2. Add or update a config
3. Run `pnpm test`
4. Open a PR

---

## 📄 License

MIT — see [LICENSE](./LICENSE)

---

## 🙏 Acknowledgments

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [typescript-plugin-css-modules](https://github.com/mrmckeb/typescript-plugin-css-modules)
- [Jest](https://jestjs.io/)
