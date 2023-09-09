import styles from "@/app/page.module.scss";
import AppleIcon from "@mui/icons-material/Apple";
import Image from "next/image";
const SectionOne = () => {
	const phome_img_url =
		"https://ik.imagekit.io/psrmathur/phone.png?updatedAt=1694077460049";
	const phone_content_url =
		"https://ik.imagekit.io/psrmathur/ssfake.jpg?updatedAt=1694077458761";
	return (
		<div className={styles.box_1}>
			<div>
				<p>Ahead app</p>
				<p>Mastering your life by mastering emotions.</p>
				<div>
					<div>
						<div>
							<AppleIcon />
						</div>
						<div>
							<span>Download on the</span>
							<span>App Store</span>
						</div>
					</div>
					<div>
						<p>rating stars</p>
						<p>100+ AppStore reviews</p>
					</div>
				</div>
			</div>
			<div>
				<div>
					<div>
						<div>
							<Image
								src={phome_img_url}
								width="200"
								height="400"
							/>
							<div>
								<Image
									src={phone_content_url}
									layout="fill"
									objectFit="cover"
									style={{
										height: "100%",
										width: "100%",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionOne;
