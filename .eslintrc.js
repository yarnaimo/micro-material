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
    },
}

module.exports = config
