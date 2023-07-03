const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./src/**/*.{html,js,jsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
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
			animation: {
				type: "type 2.7s ease-out .8s infinite alternate both",
				"type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
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
			desktopXL: "2560px",
			desktopXXL: "3840px",
		},
	},
	plugins: [require("flowbite/plugin")],
});
