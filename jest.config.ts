import type { Config } from 'jest'

const config: Config = {
    rootDir: '.',
    bail: true,
    clearMocks: true,
    coverageProvider: 'v8',
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    // Explicitly define the tsconfig to make sure Jest uses the right one
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json',
        },
    },
}

export default config
