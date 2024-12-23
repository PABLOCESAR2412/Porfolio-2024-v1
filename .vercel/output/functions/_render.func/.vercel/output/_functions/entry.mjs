import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C0GP8XbR.mjs';
import { manifest } from './manifest_DoZvOvPd.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/en.astro.mjs');
const _page2 = () => import('./pages/es.astro.mjs');
const _page3 = () => import('./pages/_---lang_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/en/index.astro", _page1],
    ["src/pages/es/index.astro", _page2],
    ["src/pages/[...lang].astro", _page3]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8ea1fe20-a10d-4add-afb5-8e92c63a6539",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
