import React from "react";

const Section4 = () => {
	return (
		<div className="BOX-4 my-[75px] flex flex-col h-max w-full items-center justify-center rounded-[25px] bg-[#fcf6f0] sm:flex-row sm:h-[calc(100vh-125px)] sm:items-stretch sm:justify-start">
			<div className="flex items-center justify-start w-full p-6 sm:w-1/2">
				<div className="flex flex-col items-center justify-center gap-5">
					<p
						className=" w-full font-normal"
						data-aos="flip-down"
						data-aos-anchor-placement="center-center"
					>
						Built out of frustation
					</p>
					<p
						className=" w-full font-bold text-[36px] tracking-wider word-space-5"
						data-aos="flip-down"
					>
						Meet the ahead app
					</p>
					<div
						className=" w-full z-[2] h-[40vh] flex items-center justify-center"
						data-aos="fade-left"
						data-aos-easing="ease-out-back"
					>
						<div className=" h-[25vh] w-[25vh] rounded-full border-[20px] border-[solid] border-[#f7f7f7] bg-white flex items-center justify-center">
							<span className=" text-[80px]">&#128123;</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-start w-full p-6 sm:w-1/2">
				<div className="flex flex-col items-center justify-center gap-6 max-w-[75%]">
					<p
						className="w-full text-base text-justify"
						data-aos="flip-left"
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Voluptatibus eos, quod dolorem nihil vitae harum
						excepturi ratione reiciendis dignissimos illo eius
						adipisci totam molestias?
					</p>
					<p
						className="w-full text-base text-justify"
						data-aos="fade-left"
						data-aos-delay="500"
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Voluptatibus eos, quod dolorem.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Section4;
