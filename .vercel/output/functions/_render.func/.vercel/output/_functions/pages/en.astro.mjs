/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CqWTvkKK.mjs';
import 'kleur/colors';
import { $ as $$Navbar, a as $$About, b as $$Project, c as $$Skills, d as $$Experience, e as $$Studies, f as $$Courses, g as $$Contact, h as $$Footer, i as $$Layout } from '../chunks/Footer_B5OYinjD.mjs';
export { renderers } from '../renderers.mjs';

const navbar = {
	about: "About me",
	proyect: "Proyects",
	skill: "Skills",
	experience: "Experience",
	contact: "Contact"
};
const about = {
	i: "I AM",
	name: "PABLO TORRES",
	tittle: "FULL-STACK DEVELOPER",
	descript: "SOFTWARE DEVELOPMENT TECHNOLOGIST SPECIALIZING IN FRONTEND AND BACKEND",
	status: "Open to work"
};
const project = {
	pro: "Projects",
	firtProject: {
		tittle: "Lading Page",
		subtittle: "For the company Anuncia-T",
		description: "Page to inform about the services of the company dedicated to advertising."
	},
	secondProject: {
		tittle: "Registration System",
		subtittle: "For the company Anuncia-T",
		description: "Web system that records vehicle data in order to keep everything safer and more organized."
	}
};
const skills = {
	skills: "Skills",
	language: "Languaje",
	bd: "DataBase",
	version: "Versioning"
};
const experience = {
	grandtittle: "Experience",
	first: {
		tittle: "Technical Support",
		subtittle: "Académia Militar General Miguel Iturralde: AMMI",
		date: "01-09-2023 - 01-10-2023",
		paragraph: {
			one: "Perform diagnostics, repairs, and software and hardware installations on desktop computers, laptops, and general-purpose equipment.",
			two: "Install and configure operating systems, applications, and device drivers.",
			three: "Perform cleaning and preventive maintenance of computer equipment to prevent failures and ensure optimal operation.",
			four: "Provide technical support to users in resolving problems related to the use of computers."
		}
	},
	second: {
		tittle: "Full-Stack Developer",
		subtittle: "Freelancer",
		date: "01-10-2024 - Present",
		paragraph: {
			one: "Development of an informative landing page for the company Anuncia - T",
			two: "Development of a registration system for the company Anuncia - T"
		},
		tech: "Technologies"
	}
};
const studies = {
	grandtittle: "Studies",
	first: {
		tittle: "IT Services Technician",
		subtittle: "Unidad Educativa Primicias de la Cultura de Quito",
		date: "10-2017 - 7-2020"
	},
	second: {
		tittle: "Senior Technologist in Software Development",
		subtittle: "Instituto Superior Tecnológico Mayor Pedro Traversari",
		date: "10-2021 - 10-2024"
	}
};
const course = {
	grandtittle: "Courses and Certificates",
	first: {
		tittle: "Introduction to Cyber ​​Security",
		sutittle: "Cisco Networking Academy",
		date: "24-02-2023",
		paragraph: {
			one: "Concepts and importance of cybersecurity.",
			two: "Impact characteristics of various types of cyber attacks.",
			three: "How to protect yourself against cyber attacks."
		}
	},
	second: {
		tittle: "CCNAv7: Switching, Routing, and Wireless Connectivity Basics",
		sutittle: "Cisco Networking Academy",
		date: "07-02-2023",
		paragraph: {
			one: "Configure VLANs and inter-VLAN routing using security best practices.",
			two: "Configure address assignment on IPV6 networks."
		}
	},
	third: {
		tittle: "CCNAv7: Enterprise Networks, Security and Automation",
		sutittle: "Cisco Networking Academy",
		date: "07-03-2023",
		paragraph: {
			one: "Explain how to mitigate threats and improve network security using access lists and security best practices.",
			two: "Implement protocols to manage the network."
		}
	},
	fourth: {
		tittle: "English Pre A1, A1, A2",
		sutittle: "Instituto Superior Tecnológico Mayor Pedro Traversari",
		date: "08-11-2021 - 07-11-2022"
	}
};
const contact = {
	grandtittle: "Contact",
	name: "Name",
	lastname: "Lastname",
	email: "Email",
	topic: "Topic",
	message: "Message",
	button: "Send"
};
const link = "Link";
const certificate = "Certificate";
const languageSwitch = "Español";
const en = {
	navbar: navbar,
	about: about,
	project: project,
	skills: skills,
	experience: experience,
	studies: studies,
	course: course,
	contact: contact,
	link: link,
	certificate: certificate,
	languageSwitch: languageSwitch
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const locale = "en";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio Pablo Torres" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="z-10"> ${renderComponent($$result2, "Navbar", $$Navbar, { "translations": en, "locale": locale })} ${renderComponent($$result2, "About", $$About, { "translations": en, "locale": locale })} ${renderComponent($$result2, "Project", $$Project, { "translations": en, "locale": locale })} ${renderComponent($$result2, "Skills", $$Skills, { "translations": en, "locale": locale })} ${renderComponent($$result2, "Experience", $$Experience, { "translations": en, "locale": locale })} ${renderComponent($$result2, "Studies", $$Studies, { "translations": en, "locale": locale })} ${renderComponent($$result2, "Courses", $$Courses, { "translations": en, "locale": locale })} ${renderComponent($$result2, "Contact", $$Contact, { "translations": en, "locale": locale })} ${renderComponent($$result2, "Footer", $$Footer, { "translations": en, "locale": locale })} </main> ` })}`;
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