// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
	token: {
		fontSize: 16,
		colorPrimary: "#0a3168",
	},
	components: {
		Collapse: {
			/* here is your component tokens */
			contentBg: "#ffffff",
			headerBg: "rgb(55, 65, 81)",
			// colorText: "#ffffff",
			colorTextHeading: "#ffffff",
		},
	},
};

export default theme;
