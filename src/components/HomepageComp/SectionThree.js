import styles from "@/app/page.module.scss";
import Card from "../card";

const SectionThree = () => {
	return (
		<div className={styles.box_3}>
			<div>
				<p
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-easing="ease-out-back"
				>
					Does this sound familiar...
				</p>
			</div>
			<div>
				<div>
					<Card emoji="&#128577;" bgColor="#9a82fa" />
					<Card emoji="&#128544;" bgColor="#fefbec" />
					<Card emoji="&#128577;" bgColor="#ffefd6" />
					<Card emoji="&#128522;" bgColor="#f1f8f7" />
					<Card emoji="&#128577;" bgColor="#ff9370" />
					<Card emoji="&#128577;" bgColor="#9a82fa" />
					<Card emoji="&#128544;" bgColor="#fefbec" />
					<Card emoji="&#128577;" bgColor="#ffefd6" />
					<Card emoji="&#128522;" bgColor="#f1f8f7" />
					<Card emoji="&#128577;" bgColor="#ff9370" />
					<Card emoji="&#128577;" bgColor="#9a82fa" />
					<Card emoji="&#128544;" bgColor="#fefbec" />
					<Card emoji="&#128577;" bgColor="#ffefd6" />
					<Card emoji="&#128522;" bgColor="#f1f8f7" />
					<Card emoji="&#128577;" bgColor="#ff9370" />
				</div>
			</div>
		</div>
	);
};

export default SectionThree;
