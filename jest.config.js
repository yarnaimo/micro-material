const config = require('@yarnaimo/tss/jest.config.js') // eslint-disable-line

module.exports = {
    ...config,
    setupFilesAfterEnv: ['<rootDir>/node_modules/@yarnaimo/tss/jest.setup.js'],
    testEnvironment: 'jsdom',
    transform: {
        ...config.transform,
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        ...config.moduleNameMapper,
        '\\.css$': '<rootDir>/node_modules/jest-css-modules',
    },
    globals: {
        'ts-jest': {
            diagnostics: true,
        },
    },
}
