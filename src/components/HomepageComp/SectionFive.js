import styles from "@/app/page.module.scss";
import SIpoint from "../sipoint";

const SectionFive = () => {
	return (
		<div className={styles.box_5}>
			<div>
				<p data-aos="fade-left">
					Wrong with self-improvement & how we're fixing it.
				</p>
				<p data-aos="fade-left">Self-improvement. Ugh.</p>
			</div>
			<div>
				<div className={styles.line}></div>
				<div className={styles.points}>
					<SIpoint />
					<SIpoint />
					<SIpoint />
					<SIpoint />
					<SIpoint />
					<SIpoint />
					<SIpoint />
				</div>
			</div>
		</div>
	);
};

export default SectionFive;
