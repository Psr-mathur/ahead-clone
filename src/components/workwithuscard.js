import styles from "./workwith.module.scss";

const Workwithuscard = ({
	title = "This is title",
	desc = `Lorem ipsum dolor, sit amet consectetur 
            adipi elit. Impedit beatae deserunt 
            aperiam mollitia maiores.`,
}) => {
	return (
		<div className={styles.cardCon}>
			<p>{title}</p>
			<p>{desc}</p>
		</div>
	);
};

export default Workwithuscard;
