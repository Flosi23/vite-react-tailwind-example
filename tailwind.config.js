/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#063773",
				"on-primary": "#fafafa",
				surface: "#ffffff",
				"surface-dim": "#fafafa",
				"surface-container": "#f5f5f5",
				"surface-container-high": "#e5e5e5",
				"surface-container-low": "#fafafa",
				"on-surface": "#0a0a0a",
				outline: "#171717",
			},
		},
	},
	plugins: [],
};
