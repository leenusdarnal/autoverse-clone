import { Config } from 'tailwindcss';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				autoversePink: 'hsl(330,75.73%,59.61%)',
				autoverseGreen: 'hsl(127.68,51.44%,47.65%)'
			}
		}
	},
	plugins: []
} satisfies Config;
