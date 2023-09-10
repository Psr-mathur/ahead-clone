import React from "react";

const Section8 = () => {
	return (
		<div className="BOX-8 h-[calc(100vh-150px)] p-6 flex flex-col items-center justify-center gap-5">
			<p className=" max-w-[625px]" data-aos="flip-up">
				We take privacy Seriously
			</p>
			<p
				className="max-w-[625px] text-[28px] font-bold text-center"
				data-aos="zoom-in"
				data-aos-delay="250"
			>
				Before you get started
			</p>
			<p
				className="max-w-[625px] text-xl font-semibold text-center"
				data-aos="flip-up"
				data-aos-delay="500"
			>
				"We wont share your answers with anyone ( and won't ever tell
				you which friend says what about you)"
			</p>
			<div className="max-w-[625px] py-5">
				<span data-aos="fade-right">with love,&nbsp;&nbsp;</span>
				<span
					data-aos="zoom-out-up"
					data-aos-duration="1000"
					data-aos-delay="500"
				>
					Prakash
				</span>
			</div>
			<button
				className=" text-white bg-black font-semibold py-3 px-4 rounded-[18px]"
				data-aos="fade-right"
				data-aos-anchor-placement="bottom-bottom"
			>
				Start a test
			</button>
			<p className="max-w-[625px] text-xs">Take only 5 minutes</p>
		</div>
	);
};

export default Section8;
