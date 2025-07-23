// Test library file
export interface Config {
  name: string;
  version: string;
}

export const defaultConfig: Config = {
  name: 'test-library',
  version: '1.0.0',
};

console.warn('This is a library, console is allowed');
