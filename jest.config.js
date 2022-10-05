export default {
    testEnvironment: 'jest-environment-node',
    transform: {},
    transformIgnorePatterns: [
        "!node_modules/"
    ],
    clearMocks: true,

    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/api/src/**/services/*.js'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov'],
    coverageProvider: 'v8',

    testMatch: ['**/*.spec.js'],
};

