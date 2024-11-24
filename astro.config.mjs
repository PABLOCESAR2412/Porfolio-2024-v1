// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
        maxDuration: 60, // Aumentamos el tiempo máximo de ejecución
    }),
    integrations: [tailwind()],
    devToolbar: {
        enabled: false
    },
    i18n: {
        defaultLocale: 'es',
        locales: ['en', 'es'],
        routing: {
            prefixDefaultLocale: false,
            strategy: 'pathname'
        },
        fallback: {
            'en': 'es'
        }
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                    manualChunks: undefined
                }
            }
        }
    }
});