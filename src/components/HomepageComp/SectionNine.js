import styles from "@/app/page.module.scss";
import Workwithuscard from "../workwithuscard";

const SectionNine = () => {
	return (
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
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Ea fugiat quisquam delectus, eos ab eaque
							natus consectetur voluptates fuga distinctio
							voluptatum repellat ipsum veniam deleniti,
							temporibus eius autem corrupti veritatis!
						</p>
					</div>
					<div>
						<p>Product</p>
						<p data-aos="zoom-in">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Aperiam, expedita doloremque quia quidem
							libero voluptatum praesentium quod eveniet!
							Explicabo voluptas, impedit hic laboriosam vel sint!
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
	);
};

export default SectionNine;
