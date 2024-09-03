/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/**.test.ts'],
  collectCoverageFrom: ['**/*.ts', '!**/node_modules/**', '!**/*.test.ts'],
};
