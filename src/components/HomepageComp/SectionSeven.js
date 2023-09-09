import styles from "@/app/page.module.scss";

const SectionSeven = () => {
	return (
		<div className={styles.box_7}>
			<p>
				Let your friend, family and co-workers (anonymously) rate your
				social skills.
			</p>
			<p data-aos="flip-down">Ever wondered what others think of you?</p>
			<div>
				<div data-aos="fade-right">
					<div className={styles.dotline}></div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</div>
			</div>
			<div>
				<div data-aos="fade-left">
					<div className={styles.solidline}></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default SectionSeven;
