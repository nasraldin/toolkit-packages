/**
 * @see https://eslint.org/docs/latest/extend/shareable-configs
 * Professional ESLint configuration for modern projects
 */

import type { Linter } from 'eslint';

declare const baseConfig: Linter.Config[];
declare const reactConfig: Linter.Config[];
declare const nextConfig: Linter.Config[];
declare const nodeConfig: Linter.Config[];
declare const libraryConfig: Linter.Config[];

export default baseConfig;
export { baseConfig, reactConfig, nextConfig, nodeConfig, libraryConfig };
