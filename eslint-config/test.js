#!/usr/bin/env node

/**
 * @see https://eslint.org/docs/latest/extend/shareable-configs
 * Test suite for @ajrly/eslint-config
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 Running comprehensive tests for @ajrly/eslint-config\n');

// Test configurations
const configs = {
  base: require('./index.cjs'),
  react: require('./index.cjs').reactConfig,
  next: require('./index.cjs').nextConfig,
  node: require('./index.cjs').nodeConfig,
  library: require('./index.cjs').libraryConfig,
};

// Test results
let passed = 0;
let total = 0;

function testConfig(configName, config) {
  total++;

  try {
    // Validate config structure
    if (!Array.isArray(config)) {
      console.log(`❌ ${configName} - FAILED: Config must be an array`);
      return;
    }

    if (config.length === 0) {
      console.log(`❌ ${configName} - FAILED: Config array is empty`);
      return;
    }

    // Check that each config object has required properties
    const validConfigs = config.filter((item) => {
      return (
        item &&
        typeof item === 'object' &&
        (item.files ||
          item.languageOptions ||
          item.plugins ||
          item.rules ||
          item.settings ||
          item.ignores)
      );
    });

    if (validConfigs.length === 0) {
      console.log(`❌ ${configName} - FAILED: No valid config objects found`);
      return;
    }

    console.log(`✅ ${configName} - PASSED`);
    console.log(`   📝 Config objects: ${validConfigs.length}`);
    passed++;
  } catch (error) {
    console.log(`❌ ${configName} - ERROR`);
    console.log(`   ${error.message}`);
  }
}

function runTests() {
  console.log('📋 Testing ESLint configuration generation...\n');

  // Test all configs
  testConfig('Base Config', configs.base);
  testConfig('React Config', configs.react);
  testConfig('Next.js Config', configs.next);
  testConfig('Node Config', configs.node);
  testConfig('Library Config', configs.library);

  console.log('\n🔧 Testing configuration usage patterns...\n');

  // Test imports
  try {
    const baseConfig = require('./index.cjs');
    const reactConfig = require('./index.cjs').reactConfig;
    const nextConfig = require('./index.cjs').nextConfig;
    const nodeConfig = require('./index.cjs').nodeConfig;
    const libraryConfig = require('./index.cjs').libraryConfig;

    console.log('✅ Base Config Import - PASSED');
    console.log('✅ React Config Import - PASSED');
    console.log('✅ Next.js Config Import - PASSED');
    console.log('✅ Node Config Import - PASSED');
    console.log('✅ Library Config Import - PASSED');
    passed += 5;
    total += 5;
  } catch (error) {
    console.log('❌ Config Import - FAILED');
    console.log(`   ${error.message}`);
  }

  console.log('\n📁 Testing configuration file generation...\n');

  // Test file generation
  const files = ['index.mjs', 'index.cjs', 'index.d.ts'];
  files.forEach((file) => {
    if (fs.existsSync(path.join(__dirname, file))) {
      console.log(`✅ Generate ${file} - PASSED`);
      passed++;
    } else {
      console.log(`❌ Generate ${file} - FAILED`);
    }
    total++;
  });

  console.log('\n📊 Test Results:');
  console.log(`   ✅ Configuration Generation: ${passed}/${total}`);
  console.log(`   📈 Overall Success Rate: ${Math.round((passed / total) * 100)}%`);

  if (passed === total) {
    console.log('\n🎉 All tests passed! The ESLint configs are working correctly.');
  } else {
    console.log('\n❌ Some tests failed. Please check the configuration.');
    process.exit(1);
  }
}

// Run tests
try {
  runTests();
} catch (error) {
  console.error('Test failed:', error);
  process.exit(1);
}
