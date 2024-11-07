/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'woodland': '#3d642b',
        'woodland-darker': '#2a461e',
        'woodland-light': '#2b6442',
        'woodland-brown': '#5c642b',
        'woodland-brown-dark': '#40461e',
        'light-green': '#e1f0d6',
        'muted-yellow': '#c9b16b',
        'soft-beige': '#eae1d0',
        'dark-grey': '#2b2b2b',
        'lightbg': '#f3f4f6',

      }
    },
	},
	plugins: [require('@tailwindcss/typography'),],
}
