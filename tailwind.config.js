/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	mode: "jit", //just in time mode
	theme: {
		extend: {
			colors: {
				"light-blue": "#C9E2F8",
				"light-purple": "#CDC1EE",
				white: "#FFFFFF",
				black: "#000000",
				"opaque-black": "rgba(0, 0, 0, 0.35)",
				dark: "#121212",
			},
			backgroundImage: (theme) => ({
				"purple-blue-gradient":
					"linear-gradient(90deg, rgba(205,193,238,1) 0%, rgba(201,226,248,1) 100%)",
			}),
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
		content: {
			logo: "url(./src/images/logo.svg)",
			me: "url(./src/images/me.png)",
		},
	},
	screens: {
		xs: "480px",
		sm: "768px",
		md: "1060px",
		tall: { raw: "(min-height: 800px)" },
	},
	plugins: [],
};
