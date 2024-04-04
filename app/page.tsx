"use client";

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	return (
		<section className="px-3">
			<div className="flex flex-col space-y-3">
				<p>
					I am an aspiring software developer currently working in project
					management field. I love learning and creating new tools to help me at
					work and wish to further develop my abilities in developing useful
					software and programs.
				</p>
				<div></div>
				<Button
					type="primary"
					className="w-full"
					onClick={() => {
						router.push("/contact");
					}}
				>
					Hire Me
				</Button>
			</div>
		</section>
	);
}
