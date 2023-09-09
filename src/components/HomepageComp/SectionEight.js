import styles from "@/app/page.module.scss";

const SectionEight = () => {
	return (
		<div className={styles.box_8}>
			<p data-aos="flip-up">We take privacy Seriously</p>
			<p data-aos="zoom-in" data-aos-delay="250">
				Before you get started
			</p>
			<p data-aos="flip-up" data-aos-delay="500">
				"We wont share your answers with anyone ( and won't ever tell
				you which friend says what about you)"
			</p>
			<div>
				<span data-aos="fade-right">with love,&nbsp;&nbsp;</span>
				<span
					data-aos="zoom-out-up"
					data-aos-duration="1000"
					data-aos-delay="500"
				>
					Prakash
				</span>
			</div>
			<button
				data-aos="fade-right"
				data-aos-anchor-placement="bottom-bottom"
			>
				Start a test
			</button>
			<p>Take only 5 minutes</p>
		</div>
	);
};

export default SectionEight;
