import React from "react";
import Workwithuscard from "../workwithuscard";

const Section9 = () => {
	return (
		<div className="BOX-9 h-max px-5 sm:h-[calc(100vh-150px)] sm:px-12">
			<div className="w-full py-6 flex items-center justify-between">
				<p
					className="text-black text-[42px] font-bold"
					data-aos="fade-right"
				>
					Work with us
				</p>
				<p
					className="hidden sm:block text-[#6a47f8] text-[42px] font-bold"
					data-aos="fade-left"
				>
					ahead
				</p>
			</div>
			<div className=" flex flex-col sm:flex-row max-h-max sm:max-h-[calc(100vh-275px)]">
				<div className=" w-full sm:w-1/2 md:w-[60%] flex flex-col justify-center gap-6">
					<div className=" max-w-[500px] p-5">
						<p className="text-[24px] font-medium pb-4">About</p>
						<p className=" text-base" data-aos="zoom-in">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Ea fugiat quisquam delectus, eos ab eaque
							natus consectetur voluptates fuga distinctio
							voluptatum repellat ipsum veniam deleniti,
							temporibus eius autem corrupti veritatis!
						</p>
					</div>
					<div className=" max-w-[500px] p-5">
						<p className="text-[24px] font-medium pb-4">Product</p>
						<p className=" text-base" data-aos="zoom-in">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Aperiam, expedita doloremque quia quidem
							libero voluptatum praesentium quod eveniet!
							Explicabo voluptas, impedit hic laboriosam vel sint!
							Optio pariatur qui unde ullam?
						</p>
					</div>
				</div>
				<div className="w-full sm:w-[50%] md:w-[40%]">
					<div className="h-[calc(100vh-275px)] p-5 flex flex-col items-center gap-5 overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-[#b8a6fd] scrollbar-track-gray-100">
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

export default Section9;
