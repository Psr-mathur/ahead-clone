import styles from "@/app/page.module.scss";

const SectionTen = () => {
	return (
		<div className={styles.box_10}>
			<div>
				<h1 data-aos="zoom-out-right">Open vacancies</h1>
			</div>
			<div>
				<div data-aos="flip-down">
					<h4>Senior Full-stack Engineer</h4>
					<li>Full-time position</li>
					<li>Berlin or remote</li>
					<li>CTC 12LPA 0.5-1% equity share options</li>
					<button>See details</button>
				</div>
				<div data-aos="flip-down">
					<h4>Senior Designer</h4>
					<li>Full-time position</li>
					<li>Berlin or remote</li>
					<li>CTC 12LPA 0.5-1% equity share options</li>
					<button>See details</button>
				</div>
				<div data-aos="flip-down">
					<h4>Software Intern</h4>
					<li>Full-time position</li>
					<li>Berlin or remote</li>
					<li>CTC 12LPA 0.5-1% equity share options</li>
					<button>See details</button>
				</div>
			</div>
		</div>
	);
};

export default SectionTen;
