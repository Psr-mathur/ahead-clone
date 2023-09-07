"use client";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "ahead app",
// 	description: "Created for density-exchange",
// };

export default function RootLayout({ children }) {
	useEffect(() => {
		AOS.init({
			duration: 750,
			anchorPlacement: "top-center",
		});
	}, []);
	return (
		<html lang="en">
			<body className={inter.className}>
				<div>
					<header>
						<Header />
					</header>
					<main>{children}</main>
					<footer>
						<Footer />
					</footer>
				</div>
			</body>
		</html>
	);
}
