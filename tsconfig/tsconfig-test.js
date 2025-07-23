#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */

const fs = require('fs');
const path = require('path');

const configs = [
  'base.json',
  'monorepo.json',
  'nextjs.json',
  'react.json',
  'node.json',
  'lib.json',
  'jest.json',
  // Skipping tsconfig.workspaces.json as it contains comments
];

let passed = 0;
let total = 0;
let errors = [];

function validateConfig(file) {
  total += 1;
  const filePath = path.join(__dirname, file);

  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`File does not exist: ${file}`);
    }

    // Parse JSON
    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);

    // Basic structure validation
    if (!json.compilerOptions) {
      throw new Error('Missing compilerOptions');
    }

    // Validate specific configs
    if (file === 'nextjs.json') {
      if (!json.compilerOptions.plugins) {
        throw new Error('Next.js config missing plugins array');
      }

      const hasNextPlugin = json.compilerOptions.plugins.some((p) => p.name === 'next');
      const hasCssModulesPlugin = json.compilerOptions.plugins.some(
        (p) => p.name === 'typescript-plugin-css-modules',
      );

      if (!hasNextPlugin) {
        throw new Error('Next.js config missing "next" plugin');
      }
      if (!hasCssModulesPlugin) {
        throw new Error('Next.js config missing "typescript-plugin-css-modules" plugin');
      }
    }

    if (file === 'jest.json') {
      if (!json.compilerOptions.types || !json.compilerOptions.types.includes('jest')) {
        throw new Error('Jest config missing "jest" in types array');
      }
    }

    if (file === 'react.json') {
      if (json.compilerOptions.jsx !== 'react-jsx') {
        throw new Error('React config should use "react-jsx" for jsx option');
      }
    }

    if (file === 'node.json') {
      if (!json.compilerOptions.lib || !json.compilerOptions.lib.includes('ES2024')) {
        throw new Error('Node config should include "ES2024" in lib array');
      }
    }

    if (file === 'lib.json') {
      if (json.compilerOptions.declaration !== true) {
        throw new Error('Library config should have declaration: true');
      }
      if (json.compilerOptions.outDir === undefined) {
        throw new Error('Library config should specify outDir');
      }
    }

    // Check for required fields in specific configs
    if (file !== 'base.json' && !json.include && !json.extends) {
      throw new Error('Missing include array (except for base config or configs that extend base)');
    }

    // Validate compilerOptions structure - only check base.json for required options
    if (file === 'base.json') {
      const requiredOptions = ['target', 'module', 'moduleResolution', 'strict'];
      for (const option of requiredOptions) {
        if (json.compilerOptions[option] === undefined) {
          throw new Error(`Missing required compiler option: ${option}`);
        }
      }
    }

    console.log(`✅ ${file} - PASSED`);
    passed += 1;
  } catch (e) {
    const error = `${file} - FAILED: ${e.message}`;
    console.log(`❌ ${error}`);
    errors.push(error);
  }
}

function testConfigExtending() {
  console.log('\n🧪 Testing config extending...');

  try {
    // Test that nextjs.json extends base.json
    const nextjsPath = path.join(__dirname, 'nextjs.json');
    const nextjsContent = fs.readFileSync(nextjsPath, 'utf8');
    const nextjs = JSON.parse(nextjsContent);

    if (nextjs.extends !== './base.json') {
      throw new Error('nextjs.json should extend ./base.json');
    }

    console.log('✅ Config extending - PASSED');
    passed += 1;
    total += 1;
  } catch (e) {
    console.log(`❌ Config extending - FAILED: ${e.message}`);
    errors.push(`Config extending - FAILED: ${e.message}`);
    total += 1;
  }
}

function testPackageJson() {
  console.log('\n🧪 Testing package.json...');

  try {
    const packagePath = path.join(__dirname, 'package.json');
    const packageContent = fs.readFileSync(packagePath, 'utf8');
    const pkg = JSON.parse(packageContent);

    // Check required fields
    if (!pkg.name || !pkg.name.startsWith('@ajrly/')) {
      throw new Error('Package name should start with @ajrly/');
    }

    if (!pkg.files || !Array.isArray(pkg.files)) {
      throw new Error('Package should have files array');
    }

    // Check that all config files are included
    for (const config of configs) {
      if (!pkg.files.includes(config)) {
        throw new Error(`Config file ${config} not included in package.json files array`);
      }
    }

    if (!pkg.peerDependencies || !pkg.peerDependencies.typescript) {
      throw new Error('Package should have typescript as peer dependency');
    }

    console.log('✅ Package.json - PASSED');
    passed += 1;
    total += 1;
  } catch (e) {
    console.log(`❌ Package.json - FAILED: ${e.message}`);
    errors.push(`Package.json - FAILED: ${e.message}`);
    total += 1;
  }
}

// Run all tests
console.log('🧪 Testing @ajrly/tsconfig package...\n');

console.log('📋 Validating JSON configs...');
configs.forEach(validateConfig);

testConfigExtending();
testPackageJson();

// Summary
console.log(
  `\n📊 Test Results: ${passed}/${total} passed (${Math.round((passed / total) * 100)}%)`,
);

if (errors.length > 0) {
  console.log('\n❌ Errors found:');
  errors.forEach((error) => console.log(`  - ${error}`));
  process.exit(1);
} else {
  console.log('\n🎉 All tests passed! Package is ready for publishing.');
}
