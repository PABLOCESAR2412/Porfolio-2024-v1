/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BMo9iyvC.mjs';
import 'kleur/colors';
import { $ as $$HomePage } from '../chunks/HomePage_M41o5cff.mjs';
import { e as en } from '../chunks/en_DH7d5OsK.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const locale = "en";
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "translations": en, "locale": locale })}`;
}, "C:/Proyectos/Astro/Porfolio_2024_V2/src/pages/en/index.astro", void 0);

const $$file = "C:/Proyectos/Astro/Porfolio_2024_V2/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
