import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import ThemeProvider from '@/components/ThemeProvider';

// para resolver Imagem next no storybook
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

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
    name: 'Figma Mobile',
    styles: {
      width: '414px',
      height: '750px',
    },
    type: 'mobile',
  },
  desktop: 'responsive',
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

  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Forms', 'Components'],
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
