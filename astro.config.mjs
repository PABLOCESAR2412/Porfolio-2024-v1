// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    output: 'hybrid',
    adapter: vercel(),
    integrations: [tailwind()],
    devToolbar: {
        enabled: false
    },
    i18n: {
        defaultLocale: 'es',
        locales: ['en', 'es'],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true,
            strategy: 'pathname'
        },
        fallback: {
            'en': 'es'
        }
    }
});