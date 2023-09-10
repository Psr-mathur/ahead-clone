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
			anchorPlacement: "top-bottom",
		});
	}, []);
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className=" sticky top-0 z-50">
					<Header />
				</header>
				<main className=" overflow-x-hidden">{children}</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
