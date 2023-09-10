import React from "react";
import Card from "../card";

const Section3 = () => {
	return (
		<div className="BOX-3">
			<div className="">
				<p
					className=" font-bold text-[42px] font-[Poppins,sans-serif]"
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-easing="ease-out-back"
				>
					Does this sound familiar...
				</p>
			</div>
			<div className=" py-5">
				<div className=" h-60 flex items-center gap-6 overflow-x-scroll scrollbar-hidden">
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
	);
};

export default Section3;
