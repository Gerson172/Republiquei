/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: false,
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundColor: ['checked'],
			borderColor: ['checked'],
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [require('daisyui')],
};
