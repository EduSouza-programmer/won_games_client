import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import ThemeProvider from '@/components/ThemeProvider';

/* export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}; */

const customViewports = {
  figmaMobile: {
    name: 'Project Figma Mobile',
    styles: {
      width: '414px',
      height: '750px',
    },
    type: 'mobile',
  },
};

export const parameters = {
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'light',
        value: '#F8F8F8',
      },
      {
        name: 'dark',
        value: '#333333',
      },
      {
        name: 'won-light',
        value: '#FAFAFA',
      },
      {
        name: 'won-dark',
        value: '#06092B',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
