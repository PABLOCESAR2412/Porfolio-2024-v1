// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel(),
    redirects: {
        '/': '/es',
    },
    integrations: [tailwind()],
    devToolbar: {
        enabled: false
    },
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en']
    }
});