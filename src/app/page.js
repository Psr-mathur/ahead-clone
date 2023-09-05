import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const apple_img_url =
	"https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png";

const Home = () => {
	return (
		<div className={styles.homeContainer}>
			<div className={styles.homeContentContainer}>
				<div className={styles.box_1}>
					<div>
						<p>Ahead app</p>
						<p>Mastering your life by mastering emotions.</p>
						<div>
							<div>
								<div>
									<Image
										src={apple_img_url}
										width="25"
										height="25"
									/>
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
								<div>mob</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.box_2}>
					<div>
						<p>EQ beats IQ</p>
					</div>
					<div>
						<p>
							People with high emotional intelligence (EQ) have
							more fulfilled lives. They tend to be happier and
							have healthier relationships.
						</p>
					</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Vel hic inventore autem, soluta ad architecto
							commodi maiores aperiam.
						</p>
					</div>
				</div>
				<div className={styles.box_3}>
					<div>
						<p>Does this sound familiar...</p>
					</div>
					<div>
						<div>
							<div>cards</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
