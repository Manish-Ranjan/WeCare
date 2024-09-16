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
