"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
	const currentPath = usePathname();
	const [burgerOpen, setBurgerOpen] = useState(false);

	const mobileMenu = () => {
		setBurgerOpen(!burgerOpen);
		console.log(burgerOpen);
		console.log("hi");
	};

	const links = [
		{ nav: "/", label: "Home" },
		{ nav: "/journey", label: "My Journey" },
		{ nav: "/projects", label: "Projects" },
		{ nav: "/contact", label: "Contact Me" },
	];
	return (
		<nav className="bg-gray-800">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<Link
						href={"/"}
						className="text-gray-300 hover:bg-slate-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition-colors"
					>
						Saud Ahmed
					</Link>
					<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
						{/* <!-- Mobile menu button--> */}
						<button
							type="button"
							className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={() => {
								mobileMenu();
							}}
						>
							<RxHamburgerMenu className="h-6 w-6" strokeWidth="0.5" />
						</button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
						<div className="flex flex-shrink-0 items-center"></div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
								{links.map((link) => {
									return (
										<Link
											key={link.nav}
											href={link.nav}
											className={classNames({
												"bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium":
													link.nav === currentPath,
												"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium":
													link.nav !== currentPath,
											})}
										>
											{link.label}
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>

			{burgerOpen && (
				<div className="sm:hidden" id="mobile-menu">
					<div className="space-y-1 px-2 pb-3 pt-2">
						{links.map((link) => {
							return (
								<Link
									key={link.nav}
									href={link.nav}
									className={classNames({
										"bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium":
											link.nav === currentPath,
										"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium":
											link.nav !== currentPath,
										// "hover:text-slate-800 transition-colors": true,
									})}
								>
									{link.label}
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
