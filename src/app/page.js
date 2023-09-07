import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Card from "@/components/card";
import SIpoint from "@/components/sipoint";
import Workwithuscard from "@/components/workwithuscard";
import AppleIcon from "@mui/icons-material/Apple";

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
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
				</div>
				<div className={styles.box_4}>
					<div>
						<div>
							<p>Built out of frustation</p>
							<p>Meet the ahead app</p>
							<div>floater</div>
						</div>
					</div>
					<div>
						<div>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Voluptatibus eos, quod dolorem
								nihil vitae harum excepturi ratione reiciendis
								dignissimos illo eius adipisci totam molestias?
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Voluptatibus eos, quod
								dolorem.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.box_5}>
					<div>
						<p>
							Wrong with self-improvement & how we're fixing it.
						</p>
						<p>Self-improvement. Ugh.</p>
					</div>
					<div>
						<div className={styles.line}></div>
						<div className={styles.points}>
							<SIpoint />
							<SIpoint />
							<SIpoint />
							<SIpoint />
							<SIpoint />
							<SIpoint />
							<SIpoint />
						</div>
					</div>
				</div>
				<div className={styles.box_6}>
					<div>
						<p>Be the best you with EQ</p>
					</div>
					<div>
						<p>
							Not having your own emotions under control might be
							holding you back.
						</p>
					</div>
					<div>
						<p>
							Additionaly, not understanding those of others stops
							you from being parent, friend you can be.
						</p>
					</div>
				</div>
				<div className={styles.box_7}>
					<p>
						Let your friend, family and co-workers (anonymously)
						rate your social skills.
					</p>
					<p>Ever wondered what others think of you?</p>
					<div>
						<div>
							<div className={styles.dotline}></div>
							<div>1</div>
							<div>2</div>
							<div>3</div>
						</div>
					</div>
					<div>
						<div>
							<div className={styles.solidline}></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
				<div className={styles.box_8}>
					<p>We take privacy Seriously</p>
					<p>Before you get started</p>
					<p>
						"We wont share your answers with anyone ( and won't ever
						tell you which friend says what about you)"
					</p>
					<div>
						<span>with love</span>
						<span>Sign</span>
					</div>
					<button>Start a test</button>
					<p>Take only 5 minutes</p>
				</div>
				<div className={styles.box_9}>
					<div>
						<p>Work with us</p>
						<p>ahead</p>
					</div>
					<div>
						<div>
							<div>
								<p>About</p>
								<p>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Ea fugiat quisquam
									delectus, eos ab eaque natus consectetur
									voluptates fuga distinctio voluptatum
									repellat ipsum veniam deleniti, temporibus
									eius autem corrupti veritatis!
								</p>
							</div>
							<div>
								<p>Product</p>
								<p>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Aperiam, expedita
									doloremque quia quidem libero voluptatum
									praesentium quod eveniet! Explicabo
									voluptas, impedit hic laboriosam vel sint!
									Optio pariatur qui unde ullam?
								</p>
							</div>
						</div>
						<div>
							<div>
								<Workwithuscard />
								<Workwithuscard />
								<Workwithuscard />
								<Workwithuscard />
								<Workwithuscard />
								<Workwithuscard />
								<Workwithuscard />
								<Workwithuscard />
								<Workwithuscard />
								<Workwithuscard />
								<Workwithuscard />
								<Workwithuscard />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.box_10}>
					<div>
						<h1>Open vacancies</h1>
					</div>
					<div>
						<div>
							<h4>Senior Full-stack Engineer</h4>
							<li>Full-time position</li>
							<li>Berlin or remote</li>
							<li>CTC 12LPA 0.5-1% equity share options</li>
							<button>See details</button>
						</div>
						<div>
							<h4>Senior Designer</h4>
							<li>Full-time position</li>
							<li>Berlin or remote</li>
							<li>CTC 12LPA 0.5-1% equity share options</li>
							<button>See details</button>
						</div>
						<div>
							<h4>Software Intern</h4>
							<li>Full-time position</li>
							<li>Berlin or remote</li>
							<li>CTC 12LPA 0.5-1% equity share options</li>
							<button>See details</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
