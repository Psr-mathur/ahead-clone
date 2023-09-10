import React from "react";
import SIpoint from "../sipoint";

const Section5 = () => {
	return (
		<div className="BOX-5 my-[75px] max-h-[650px] sm:max-h-max sm:h-[calc(100vh-125px)] w-full rounded-[25px]">
			<div className="py-3 px-[8%]">
				<p data-aos="fade-left">
					Wrong with self-improvement & how we're fixing it.
				</p>
				<p className=" text-[32px] font-bold pt-6" data-aos="fade-left">
					Self-improvement. Ugh.
				</p>
			</div>
			<div className=" py-[25px] px-5 sm:px-[20%]">
				<div className="w-[2px] h-[calc(100vh-300px)] bg-[#7756fd] absolute left-[50px] sm:left-[23%]"></div>
				<div className=" relative h-[calc(100vh-300px)] overflow-y-scroll pl-[50px] flex flex-col justify-start gap-10 scrollbar scrollbar-w-1 scrollbar-thumb-[#b8a6fd] scrollbar-track-gray-100">
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
	);
};

export default Section5;
