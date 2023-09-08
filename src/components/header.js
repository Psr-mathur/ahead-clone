"use client";
import Link from "next/link";
import styles from "./header.module.scss";
import Face6Icon from "@mui/icons-material/Face6";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
	const [showsidebar, setshowsidebar] = useState(false);

	return (
		<div className={styles.headerContainer}>
			<div className={styles.headerContentConMobile}>
				<div onClick={() => setshowsidebar(!showsidebar)}>
					<MenuIcon fontSize="large" />
				</div>
				<div>
					<Face6Icon fontSize="large" />
				</div>
				{showsidebar && (
					<div className={styles.sidebarCon}>
						<div onClick={() => setshowsidebar(!showsidebar)}>
							<CloseIcon fontSize="large" />
						</div>
						<div>
							<Link href="#">Emotions</Link>
							<Link href="#">Manifesto</Link>
							<Link href="#">Self-awareness test</Link>
							<Link href="#">Work With Us</Link>
							<button>Download app</button>
						</div>
					</div>
				)}
			</div>
			<div className={styles.headerContentCon}>
				<div>
					<Face6Icon fontSize="large" />
					{/* <button>DE</button> */}
				</div>
				<div>
					<Link href="#">Emotions</Link>
					<Link href="#">Manifesto</Link>
					<Link href="#">Self-awareness test</Link>
					<Link href="#">Work With Us</Link>
				</div>
				<div>
					<button>Download app</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
