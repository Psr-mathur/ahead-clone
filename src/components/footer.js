import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Link from "next/link";

const Footer = () => {
	const apple_img_url = "";
	return (
		<div className=" p-24 pt-6 border-t border-[lightslategray]">
			<div className="flex flex-col items-center justify-center gap-7">
				<div className=" text-center">
					<h1 className=" text-7xl py-1 shadow text-white font-bold">
						&#128125;
					</h1>
					<span className=" text-2xl font-semibold text-[#775bf0]">
						ahead
					</span>
				</div>
				<div className="flex flex-col sm:flex-row gap-6 sm:gap-52">
					<div className="flex items-center justify-center gap-2">
						<LocationOnOutlinedIcon className="text-blue-500" />
						<span className=" text-sm">Patna , Bihar</span>
					</div>
					<div className="flex items-center justify-center gap-2">
						<EmailOutlinedIcon className="text-blue-500" />
						<span className=" text-sm">
							Prakashkrinida@outlook.com
						</span>
					</div>
				</div>
				<Link className="" href="https://github.com/Psr-mathur">
					<div className=" flex items-center justify-center gap-[6px] bg-black text-white rounded-[6px] py-[10px] px-4 cursor-pointer">
						<GitHubIcon />
						<span className=" font-semibold">Github</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
