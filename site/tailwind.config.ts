/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		fontSize: {
			xs: "1rem",
			sm: "1.2rem",
		  base: "1.4rem",
		  lg: "1.4rem",
		  xl: "1.8rem",
		  "2xl": "2.2rem",
		  "3xl": "2.5rem",
		  "4xl": "3rem",
		  "5xl": "3.5rem",
		  "6xl": "5rem",
		  "7xl": "6rem",
		  "8xl": "8rem",
		  "9xl": "9rem",
		},
		fontFamily: {
		  header: ["Inter", "sans-serif"],
		  body: ["Lora", "serif"],
		  ui: ["Inter", "sans-serif"],
		},
		fontWeight: {
		  light: 300,
		  normal: 400,
		  bold: 700,
		  extrabold: 800,
		},
		colors: {
		  gray: {
			800: '#333333',
		  },
		  blue: {
			600: '#1e90ff',
			800: '#1c3d5a',
		  },
		},
		spacing: {
		  0: '0',
		  2: '0.5rem',
		  4: '1rem',
		  5: '1.25rem',
		  6: '1.5rem',
		},
		zIndex: {
		  1000: 1000,
		},
		lineHeight: {
		  relaxed: '1.625',
		},
		borderRadius: {
		  lg: '0.5rem',
		},
		borderWidth: {
		  DEFAULT: '1px',
		  0: '0',
		  4: '4px',
		},
		borderColor: {
		  gray: {
			300: '#cccccc',
		  },
		  blue: {
			600: '#1e90ff',
		  },
		},
		backgroundColor: {
		  gray: {
			200: '#eeeeee',
		  },
		},
		maxWidth: {
		  full: '100%',
		},
		width: {
		  full: '100%',
		},
		padding: {
		  0: '0',
		  1: '0.25rem',
		  5: '1.25rem',
		  6: '1.5rem',
		},
		margin: {
		  0: '0',
		  2: '0.5rem',
		  4: '1rem',
		},
		position: {
		  sticky: 'sticky',
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/typography'),
	],
  };