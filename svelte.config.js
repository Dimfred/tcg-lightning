import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: '/tcg-lightning'
    },
    prerender: {
      handleHttpError: ({ path, message }) => {
        // Ignore missing screenshot - it's handled gracefully in the component
        if (path.includes('screenshot.png')) {
          return;
        }
        throw new Error(message);
      }
    }
  }
};

export default config;
