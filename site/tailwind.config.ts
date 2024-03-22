/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'base': '1.3rem',
				'lg': '1.5rem',
				'xl': '1.8rem',
				'2xl': '2.2rem',
				'3xl': '2.5rem',
				'4xl': '3rem',
				'5xl': '3.5rem',
				'6xl': '5rem',
				'7xl': '6rem',
				'8xl': '8rem',
				'9xl': '9rem',
			  },
			  fontFamily: {
				'header': ['Inter', 'sans-serif'],
				'body': ['Lora', 'serif'],
				'ui': ['Inter', 'sans-serif'],
			  },
			  fontWeight: {
				'light': 300,
				'normal': 400,
				'bold': 700,
				'extrabold': 800,
			  },
		},
	},
	plugins: [],
}