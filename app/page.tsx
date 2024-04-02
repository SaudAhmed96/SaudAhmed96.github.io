import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<section>
			<div>
				<h1>Saud Ahmed</h1>
				<p>
					I am an aspiring software developer currently working in project
					management field. I love learning and creating new tools to help me at
					work and wish to further develop my abilities in developing useful
					software and programs.
				</p>
				<div></div>
				<Button type="primary">
					<Link href={"/contact"}>Hire Me</Link>
				</Button>
			</div>
		</section>
	);
}
