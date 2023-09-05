import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.headerContentCon}>
				<div>
					<button>DE</button>
				</div>
				<div>
					<Link href="#">Emotions</Link>
					<Link href="#">Manifesto</Link>
					<Link href="#">Self-awareness test</Link>
					<Link href="#">Work With Us</Link>
				</div>
				<div>
					<button>Download app</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
