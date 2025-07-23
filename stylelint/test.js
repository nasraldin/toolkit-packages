import config from './index.mjs';

console.log('✅ Testing Stylelint configuration...');

// Test configuration structure
console.log('📋 Configuration structure:');
console.log('- extends:', config.extends);
console.log('- plugins:', config.plugins);
console.log('- rules count:', Object.keys(config.rules).length);

// Test specific rules
console.log('\n🔧 Key rules:');
console.log('- at-rule-no-unknown:', config.rules['at-rule-no-unknown']);
console.log('- at-rule-no-deprecated:', config.rules['at-rule-no-deprecated']);
console.log('- selector-class-pattern:', config.rules['selector-class-pattern']);
console.log(
  '- declaration-block-no-duplicate-properties:',
  config.rules['declaration-block-no-duplicate-properties'],
);

// Validate configuration
const requiredFields = ['extends', 'plugins', 'rules'];
const hasAllFields = requiredFields.every((field) => config.hasOwnProperty(field));

console.log('\n✅ Configuration validation:');
console.log('- Has all required fields:', hasAllFields);
console.log('- Configuration is valid:', typeof config === 'object' && config !== null);

// Test Tailwind CSS at-rules
const tailwindAtRules = [
  'tailwind',
  'apply',
  'responsive',
  'screen',
  'import',
  'variant',
  'theme',
  'utility',
  'custom-variant',
  'plugin',
];

const ignoreAtRules = config.rules['at-rule-no-unknown'][1].ignoreAtRules;
const hasAllTailwindRules = tailwindAtRules.every((rule) => ignoreAtRules.includes(rule));

console.log('\n🎨 Tailwind CSS support:');
console.log('- Has all Tailwind at-rules:', hasAllTailwindRules);
console.log('- Supported at-rules:', ignoreAtRules);

console.log('\n🎉 Configuration test completed!');
