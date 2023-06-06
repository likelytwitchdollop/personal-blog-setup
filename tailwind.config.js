/** @type {import('tailwindcss').Config} */
module.exports = {
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'var(--font-kumbh-sans)',
					'Segoe UI',
					'Tahoma',
					'Geneva',
					'Verdana',
					'sans-serif',
				],
				mono: [
					'var(--font-roboto-mono)',
					'Courier New',
					'Courier',
					'monospace',
				],
			},
			colors: {
				'primary-100': '#9A9A9A',
				'black-50': 'rgba(0, 0, 0, 0.05)',
				'black-100': 'rgba(0, 0, 0, 0.1)',
				'black-200': 'rgba(0, 0, 0, 0.2)',
				'black-500': 'rgba(0, 0, 0, 0.5)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
