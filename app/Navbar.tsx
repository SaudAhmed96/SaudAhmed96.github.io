import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<Link href={"/"}>Home</Link>
				<Link href={"/journey"}>My Journey</Link>
				<Link href={"/projects"}>Projects</Link>
				<Link href={"/contact"}>Contact Me</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
