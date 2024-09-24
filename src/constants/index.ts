export const SITE = {
	title: "WeCare",
	tagline: "We care",
	description: "",
	description_short: "",
	url: "",
	author: "",
};

export const SEO = {
	title: SITE.title,
	description: SITE.description,
	structuredData: {
		"@context": "https://schema.org",
		"@type": "WebPage",
		inLanguage: "en-US",
		"@id": SITE.url,
		url: SITE.url,
		name: SITE.title,
		description: SITE.description,
		isPartOf: {
			"@type": "WebSite",
			url: SITE.url,
			name: SITE.title,
			description: SITE.description,
		},
	},
};

export const OG = {
	locale: "en_US",
	type: "website",
	url: SITE.url,
	title: `${SITE.title}:`,
	description: ""
};

export const HEADER_NAV_ITEMS = [
	{ name: "Home", url: "/" },
	{ name: "About", url: "/about" },
	{ name: "What We Do", url: "/what-we-do" },
	{ name: "Media Corner", url: "/media-corner" },
	{ name: "Team", url: "/team" },
	{ name: "Contact Us", url: "/contact" },
	{ name: "Join Us", url: "/join" },
];
