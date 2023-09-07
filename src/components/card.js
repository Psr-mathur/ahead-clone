import styles from "./card.module.scss";

const Card = ({
	emoji = "&#128513;",
	title = "Where is title?",
	desc = `Lorem ipsum dolor, sit amet consectetur 
            adipi elit. Impedit beatae deserunt 
            aperiam mollitia maiores.`,
	bgColor = "lightcyan",
}) => {
	const emoji_html = { __html: emoji };
	return (
		<div className={styles.cardCon} style={{ backgroundColor: bgColor }}>
			<p dangerouslySetInnerHTML={emoji_html}></p>
			<p>{title}</p>
			<p>{desc}</p>
		</div>
	);
};

export default Card;
