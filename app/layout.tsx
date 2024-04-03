import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "@/themeConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Saud Ahmed",
	description: "Saud Ahmed's portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<AntdRegistry>
					<ConfigProvider theme={theme}>
						<main className="bg-slate-300 p-5">{children}</main>
					</ConfigProvider>
				</AntdRegistry>
			</body>
		</html>
	);
}
