"use client";
import Link from "next/link";
import Face6Icon from "@mui/icons-material/Face6";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
	const [showsidebar, setshowsidebar] = useState(false);

	return (
		<div className="py-3 px-5 sm:px-10 md:px-12 bg-white border ">
			<div className="flex items-center justify-between bg-white transition-all sm:hidden">
				<div
					className=" text-black bg-transparent py-1 px-[6px]"
					onClick={() => setshowsidebar(!showsidebar)}
				>
					<MenuIcon fontSize="large" />
				</div>
				<div className=" text-[greenyellow] bg-[#7eaef3] py-1 px-[6px]">
					<Face6Icon fontSize="large" />
				</div>
				{showsidebar && (
					<div className="fixed top-0 left-0 bottom-0 right-[25vw] py-3 px-5 bg-[#ddd9ed]">
						<div
							className="pt-1 pb-6 px-[6px] flex items-center justify-end border-b border-gray-400 border-solid"
							onClick={() => setshowsidebar(!showsidebar)}
						>
							<CloseIcon fontSize="large" />
						</div>
						<div className="flex flex-col items-start justify-center gap-5">
							<Link className="pt-6" href="#">
								Emotions
							</Link>
							<Link href="#">Manifesto</Link>
							<Link href="#">Self-awareness test</Link>
							<Link href="#">Work With Us</Link>
							<button className=" py-4 px-5 bg-black text-white font-bold rounded-[20px]">
								Download app
							</button>
						</div>
					</div>
				)}
			</div>
			<div className="hidden sm:flex sm:items-center sm:justify-around bg-white">
				<div className=" text-[greenyellow] bg-[#4a29db] py-1 px-[6px]">
					<Face6Icon fontSize="large" />
					{/* <button>DE</button> */}
				</div>
				<div className=" flex items-center gap-9">
					<Link href="#">Emotions</Link>
					<Link href="#">Manifesto</Link>
					<Link href="#">Self-awareness test</Link>
					<Link href="#">Work With Us</Link>
				</div>
				<div className="">
					<button className=" py-4 px-8 bg-black text-white font-bold rounded-[30px]">
						Download app
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
