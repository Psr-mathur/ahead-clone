import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Card from "@/components/card";
import SIpoint from "@/components/sipoint";
import Workwithuscard from "@/components/workwithuscard";
import AppleIcon from "@mui/icons-material/Apple";

const phome_img_url =
	"https://ik.imagekit.io/psrmathur/phone.png?updatedAt=1694077460049";
const phone_content_url =
	"https://ik.imagekit.io/psrmathur/ssfake.jpg?updatedAt=1694077458761";

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
				<div className={styles.box_2}>
					<div>
						<p data-aos="zoom-in-right">EQ beats IQ</p>
					</div>
					<div>
						<p data-aos="flip-up">
							People with high emotional intelligence (EQ) have
							more fulfilled lives. They tend to be happier and
							have healthier relationships.
						</p>
					</div>
					<div>
						<p data-aos="zoom-in-left">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Vel hic inventore autem, soluta ad architecto
							commodi maiores aperiam.
						</p>
					</div>
				</div>
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
				<div className={styles.box_4}>
					<div>
						<div>
							<p
								data-aos="flip-down"
								data-aos-anchor-placement="center-center"
							>
								Built out of frustation
							</p>
							<p data-aos="flip-down">Meet the ahead app</p>
							<div
								data-aos="fade-left"
								data-aos-easing="ease-out-back"
							>
								<div>
									<span>&#128123;</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div>
							<p data-aos="flip-left">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Voluptatibus eos, quod dolorem
								nihil vitae harum excepturi ratione reiciendis
								dignissimos illo eius adipisci totam molestias?
							</p>
							<p data-aos="fade-left" data-aos-delay="500">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Voluptatibus eos, quod
								dolorem.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.box_5}>
					<div>
						<p data-aos="fade-left">
							Wrong with self-improvement & how we're fixing it.
						</p>
						<p data-aos="fade-left">Self-improvement. Ugh.</p>
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
						<p data-aos="flip-up">Be the best you with EQ</p>
					</div>
					<div>
						<p data-aos="zoom-in">
							Not having your own emotions under control might be
							holding you back.
						</p>
					</div>
					<div>
						<p data-aos="flip-up">
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
					<p data-aos="flip-down">
						Ever wondered what others think of you?
					</p>
					<div>
						<div data-aos="fade-right">
							<div className={styles.dotline}></div>
							<div>1</div>
							<div>2</div>
							<div>3</div>
						</div>
					</div>
					<div>
						<div data-aos="fade-left">
							<div className={styles.solidline}></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
				<div className={styles.box_8}>
					<p data-aos="flip-up">We take privacy Seriously</p>
					<p data-aos="zoom-in" data-aos-delay="250">
						Before you get started
					</p>
					<p data-aos="flip-up" data-aos-delay="500">
						"We wont share your answers with anyone ( and won't ever
						tell you which friend says what about you)"
					</p>
					<div>
						<span data-aos="fade-right">
							with love,&nbsp;&nbsp;
						</span>
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
				<div className={styles.box_9}>
					<div>
						<p data-aos="fade-right">Work with us</p>
						<p data-aos="fade-left">ahead</p>
					</div>
					<div>
						<div>
							<div>
								<p>About</p>
								<p data-aos="zoom-in">
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
								<p data-aos="zoom-in">
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
			</div>
		</div>
	);
};

export default Home;
