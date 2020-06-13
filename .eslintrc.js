/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
    extends: '@yarnaimo',
    rules: {
        'no-restricted-imports': [
            'error',
            {
                paths: ['@sindresorhus/is'],
            },
        ],
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    '{}': false,
                },
                extendDefaults: true,
            },
        ],
    },
}

module.exports = config
