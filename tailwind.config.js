const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./src/**/*.{html,js,jsx}"],
	safelist: [
		"bg-[#cdc1ee]",
		"bg-[#ccc9f1]",
		"bg-[#cbd1f4]",
		"bg-[#cad9f7]",
		"bg-[#c9e2f8]",
	],
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
		screens: {
			mobileS: "320px",
			mobileN: "360px",
			mobileL: "540px",
			desktopM: "768px",
			desktopL: "1060px",
		},
	},
	plugins: [],
});
