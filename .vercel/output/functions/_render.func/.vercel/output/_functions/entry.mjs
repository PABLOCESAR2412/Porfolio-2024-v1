import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BciRq2pW.mjs';
import { manifest } from './manifest_CWRRbJym.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/en.astro.mjs');
const _page2 = () => import('./pages/es.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/en/index.astro", _page1],
    ["src/pages/es/index.astro", _page2]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "06fb008e-3a88-44e0-b17d-5403090aac2f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
