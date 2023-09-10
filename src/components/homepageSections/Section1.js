import Image from "next/image";
import AppleIcon from "@mui/icons-material/Apple";

const Section1 = () => {
	const phome_img_url =
		"https://ik.imagekit.io/psrmathur/phone.png?updatedAt=1694077460049";
	const phone_content_url =
		"https://ik.imagekit.io/psrmathur/ssfake.jpg?updatedAt=1694077458761";
	return (
		<div className="BOX-1 flex flex-col items-center justify-center h-[calc(100vh-110px)] w-full bg-[#eeeafd] rounded-[25px] md:flex-row sm:items-stretch sm:justify-start">
			<div className=" w-full p-3 flex items-center justify-center flex-col sm:p-6 md:w-1/2">
				<p className=" w-full">Ahead app</p>
				<p className=" w-full text-[4rem] font-bold py-3">
					Mastering your life by mastering emotions.
				</p>
				<div className=" w-full flex items-center justify-start gap-6">
					<div className=" py-1 px-2 flex items-center gap-1 rounded bg-black text-white cursor-pointer">
						<div>
							<AppleIcon />
						</div>
						<div>
							<span className=" block text-[8px]">
								Download on the
							</span>
							<span className=" text-[14px] block">
								App Store
							</span>
						</div>
					</div>
					<div>
						<p className=" text-[20px]">rating stars</p>
						<p className=" text-[13px]">100+ AppStore reviews</p>
					</div>
				</div>
			</div>
			<div className=" hidden sm:w-full md:w-1/2 sm:p-6 sm:flex sm:items-center sm:justify-center">
				<div className=" p-10 h-[calc(100%-80px)] w-[calc(100%-80px)] rounded-full border-[3px] border-white border-dashed flex items-center justify-center relative">
					<div className=" p-6 h-[calc(100%-50px)] w-[calc(100%-50px)] rounded-full bg-[#dbd3f5]">
						<div className=" absolute left-[32%] top-[15%]">
							<Image
								src={phome_img_url}
								width="200"
								height="400"
							/>
							<div className=" absolute top-[10px] left-2 right-2 h-[375px] rounded-[10px] overflow-y-scroll scrollbar-none">
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
	);
};

export default Section1;
