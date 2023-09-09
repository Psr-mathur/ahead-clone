import React from "react";
import styles from "./page.module.scss";
import "./global.scss";
import SectionOne from "@/components/HomepageComp/SectionOne";
import SectionTwo from "@/components/HomepageComp/SectionTwo";
import SectionThree from "@/components/HomepageComp/SectionThree";
import SectionFive from "@/components/HomepageComp/SectionFive";
import SectionSix from "@/components/HomepageComp/SectionSix";
import SectionSeven from "@/components/HomepageComp/SectionSeven";
import SectionEight from "@/components/HomepageComp/SectionEight";
import SectionNine from "@/components/HomepageComp/SectionNine";
import SectionTen from "@/components/HomepageComp/SectionTen";

const Home = () => {
	return (
		<div className={styles.homeContainer}>
			<div className={styles.homeContentContainer}>
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFive />
				<SectionSix />
				<SectionSeven />
				<SectionEight />
				<SectionNine />
				<SectionTen />
			</div>
		</div>
	);
};

export default Home;
