import styles from "./footer.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Link from "next/link";

const Footer = () => {
	const apple_img_url = "";
	return (
		<div className={styles.footerCon}>
			<div>
				<div>
					<h1>&#128125;</h1>
					<span>ahead</span>
				</div>
				<div>
					<div>
						<LocationOnOutlinedIcon className={styles.loca} />
						<span>Patna , Bihar</span>
					</div>
					<div>
						<EmailOutlinedIcon className={styles.email} />
						<span>Prakashkrinida@outlook.com</span>
					</div>
				</div>
				<Link href="https://github.com/Psr-mathur">
					<div>
						<GitHubIcon />
						<span>Github</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
