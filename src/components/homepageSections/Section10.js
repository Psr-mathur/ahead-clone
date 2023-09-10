import React from "react";

const Section10 = () => {
	return (
		<div className="BOX-10 p-5 sm:p-6 md:p-12 h-max md:h-[400px]">
			<div className=" pb-12">
				<h1
					className=" text-5xl font-semibold"
					data-aos="zoom-out-right"
				>
					Open vacancies
				</h1>
			</div>
			<div className=" flex flex-col sm:flex-row gap-4 sm:gap-5 items-start justify-between">
				<div
					className=" flex flex-col gap-3 p-5 bg-[#fefbec] rounded-[16px] transition-all hover:bg-[#ffefd6] group"
					data-aos="flip-down"
				>
					<h4 className="font-medium">Senior Full-stack Engineer</h4>
					<li className=" text-xs">Full-time position</li>
					<li className=" text-xs">Berlin or remote</li>
					<li className=" text-xs">
						CTC 12LPA 0.5-1% equity share options
					</li>
					<button className=" w-max text-sm py-3 px-5 rounded-[1.25rem] bg-black text-white cursor-pointer sm:hidden group-hover:block">
						See details
					</button>
				</div>
				<div
					className=" flex flex-col gap-3 p-5 bg-[#fefbec] rounded-[16px] transition-all hover:bg-[#ffefd6] group"
					data-aos="flip-down"
				>
					<h4 className="font-medium">Senior Designer</h4>
					<li className=" text-xs">Full-time position</li>
					<li className=" text-xs">Berlin or remote</li>
					<li className=" text-xs">
						CTC 12LPA 0.5-1% equity share options
					</li>
					<button className=" w-max text-sm py-3 px-5 rounded-[1.25rem] bg-black text-white cursor-pointer sm:hidden group-hover:block">
						See details
					</button>
				</div>
				<div
					className=" flex flex-col gap-3 p-5 bg-[#fefbec] rounded-[16px] transition-all hover:bg-[#ffefd6] group"
					data-aos="flip-down"
				>
					<h4 className="font-medium">Software Intern</h4>
					<li className=" text-xs">Full-time position</li>
					<li className=" text-xs">Berlin or remote</li>
					<li className=" text-xs">
						CTC 12LPA 0.5-1% equity share options
					</li>
					<button className=" w-max text-sm py-3 px-5 rounded-[1.25rem] bg-black text-white cursor-pointer sm:hidden group-hover:block">
						See details
					</button>
				</div>
			</div>
		</div>
	);
};

export default Section10;
