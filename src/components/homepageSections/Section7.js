import React from "react";

const Section7 = () => {
	return (
		<div className="BOX-7 my-[75px] py-3 sm:py-5 md:py-6 bg-[#ebf8fe] w-full rounded-[25px] h-[calc(100vh-125px)] sm:h-max md:h-[calc(100vh-125px)] flex flex-col items-center justify-start sm:justify-center gap-5">
			<p className=" font-medium text-center md:text-left">
				Let your friend, family and co-workers (anonymously) rate your
				social skills.
			</p>
			<p
				className=" font-bold text-center text-[32px] sm:text-[42px] word-spacing-5"
				data-aos="flip-down"
			>
				Ever wondered what others think of you?
			</p>
			<div className="hidden md:block w-full px-[20%] pb-12 my-12">
				<div
					className="flex items-center justify-between relative"
					data-aos="fade-right"
				>
					<div className="absolute border-[2px] border-[#f2e4b6] border-dashed left-0 right-0 top-[49%]"></div>
					<div className=" h-10 w-10 rounded-full flex items-center justify-center text-white bg-[#eac13c] z-[9] after:block after:w-[325px] after:text-center after:absolute after:text-black after:top-[50px] after:z-[99] aqoyss">
						1
					</div>
					<div className=" h-10 w-10 rounded-full flex items-center justify-center text-white bg-[#eac13c] z-[9] after:block after:w-[325px] after:text-center after:absolute after:text-black after:top-[50px] after:z-[99] loaats">
						2
					</div>
					<div className=" h-10 w-10 rounded-full flex items-center justify-center text-white bg-[#eac13c] z-[9] after:block after:w-[325px] after:text-center after:absolute after:text-black after:top-[50px] after:z-[99] fowyaost">
						3
					</div>
				</div>
			</div>
			<div className="w-full px-[5px] sm:px-10 md:px-[25%] pb-12 my-12">
				<div
					className="flex items-center justify-between relative py-[100px] bg-white rounded-[16px]"
					data-aos="fade-left"
				>
					<div className="absolute border border-[lightslategray] border-solid left-0 right-0 top-[49%]"></div>
					<div className=" h-5 w-5 rounded-full flex items-center justify-center text-white bg-[#6341ef] z-[9] after:inline-block after:w-max after:text-center after:absolute after:text-white after:py-[10px] after:px-[15px] after:rounded-[16px] after:top-[25%] after:bg-[#6341ef] after:z-[99] after:content-['You']"></div>
					<div className=" h-5 w-5 rounded-full flex items-center justify-center text-white bg-[#40c3ff] z-[9] after:inline-block after:w-max after:text-center after:absolute after:text-white after:py-[10px] after:px-[15px] after:rounded-[16px] after:top-[58%] after:bg-[#40c3ff] after:z-[99] Anonymonus1"></div>
					<div className=" h-5 w-5 rounded-full flex items-center justify-center text-white bg-[#fdb238] z-[9] after:inline-block after:w-max after:text-center after:absolute after:text-white after:py-[10px] after:px-[15px] after:rounded-[16px] after:top-[25%] after:bg-[#fdb238] after:z-[99] Anonymonus2"></div>
					<div className=" h-5 w-5 rounded-full flex items-center justify-center text-white bg-[#8BF38B] z-[9] after:inline-block after:w-max after:text-center after:absolute after:text-white after:py-[10px] after:px-[15px] after:rounded-[16px] after:top-[58%] after:bg-[#8BF38B] after:z-[99] Anonymonus3"></div>
				</div>
			</div>
		</div>
	);
};

export default Section7;
