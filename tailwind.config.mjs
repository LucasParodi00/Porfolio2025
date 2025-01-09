/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				body: "#252930ff",
				rosado: "#ff5080",
				naranjaFuerte: "#ff5733",
				body2: '#03070f',
				lightNavbar: '#29323c',
				body3: '#202837',
				body4: '#0c0c0d',
				bodyLight: '#E4E4E7'
			},
		},
	},
	plugins: [],
};
