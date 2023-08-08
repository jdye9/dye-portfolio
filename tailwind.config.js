/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/**/*.{html,js}",
		"./src/**/*.{html,ts}",
		"./src/**/*.{html,tsx}",
	],
	mode: "jit", //just in time mode
	purge: [
		"./src/**/*.{html,js}",
		"./src/**/*.{html,ts}",
		"./src/**/*.{html,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				ripple: {
					"0%": { transform: "scale(0)", opacity: "0.75" },
					"100%": { transform: "scale(4)", opacity: "0" },
				},
			},
			animation: {
				ripple: "ripple 500ms linear",
			},
			colors: {
				"light-blue": "#C9E2F8",
				"light-purple": "#CDC1EE",
				white: "#FFFFFF",
				black: "#000000",
			},
			backgroundSize: {
				"size-200": "200% 200%",
			},
			backgroundPosition: {
				"pos-0": "0% -0%",
				"pos-100": "100% 100%",
			},
		},
		fontFamily: {
			openSans: ["Open Sans", "sans-serif"],
		},
		screens: {
			mobileS: "320px",
			mobileM: "360px",
			mobileL: "540px",
			desktopS: "768px",
			desktopM: "1080px",
			desktopL: "1440px",
			desktopXL: "1920px",
			desktopXXL: "2560px",
			desktopXXXL: "3840px",
			short: { raw: "(max-height: 400px)" },
			desktopSUnder: { max: "768px" },
		},
	},
};
