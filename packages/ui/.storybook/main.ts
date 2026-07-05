import type { StorybookConfig } from '@storybook/react-vite';
// import tsconfigPaths from 'vite-tsconfig-paths';
// import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  // addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  // viteFinal: async (config) => {
  //   return mergeConfig(config, {
  //     plugins: [tsconfigPaths()],
  //   });
  // },
};

export default config;
