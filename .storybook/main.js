const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  babel: async (options) => ({
    ...options,
    presets: [
      ['@babel/preset-env', { loose: false }],
    ],
    plugins: [['@babel/plugin-proposal-class-properties', { loose: false }]],
  }),
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};
