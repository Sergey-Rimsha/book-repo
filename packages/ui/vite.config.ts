import * as path from 'path';

import base from '@repo/vite-config';
import { defineConfig, mergeConfig } from 'vite';

export default mergeConfig(
  base,
  defineConfig({
    // eslint-disable-next-line no-undef
    resolve: { alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }] },
  }),
);
