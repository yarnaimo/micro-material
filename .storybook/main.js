module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        // '@storybook/preset-typescript',
        '@storybook/addon-a11y/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-links/register',
        '@storybook/addon-viewport/register',
    ],
}
