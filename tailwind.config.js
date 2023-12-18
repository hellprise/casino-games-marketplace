/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				red: 'rgba(182, 36, 39, 1)',
				black: 'rgba(43, 43, 43, 1)',
				yellow: 'rgba(255, 167, 0)'
			},
			backgroundImage: {
				bets: "url('./assets/roulette/bg-bets.png')",
				roulette: "url('./assets/roulette/bg.jpg')",
				slots: "url('./assets/slot/bg.jpg')"
			},
			width: {
				bet: '46px'
			},
			height: {
				bet: '46px'
			},
			boxShadow: {
				slots: '0px 0px 11px 23px #561c08'
			}
		}
	},
	plugins: []
}
