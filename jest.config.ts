/* eslint-disable import/no-extraneous-dependencies */
export default {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
  testEnvironment: 'node',
  collectCoverageFrom: [
    './src/**/*.{js,ts}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!./src/index.ts',
    '!**/__mocks__/**',
  ],
  testMatch: ['**/*.{test,spec}.ts'],
};
