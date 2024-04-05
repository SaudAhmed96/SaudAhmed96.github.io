import React from "react";
import { Card, Space } from "antd";
import Link from "next/link";
import Image from "next/image";
import dealiciousImg from "../../public/assets/dealicious.png";
import nextJsProject from "../../public/assets/nextJsProject.png";

const ProjectsPage = () => {
	return (
		<section>
			<h1 className="text-gray-800 text-xl font-medium mb-5">Projects</h1>
			<Space className="flex flex-wrap" direction="horizontal" size={16}>
				<Card
					title="Dealicious - Fiserv"
					extra={<Link href="#">More</Link>}
					style={{ width: 300, padding: 4 }}
				>
					<Image src={dealiciousImg} alt="Dealicious" />
					<ul className="list-disc">
						<li>
							Ideated a food ordering app with a multi-disciplinary team of 8
							individuals from Data Science, UX/UI Design and Software
							Engineering
						</li>
						<li>
							The app would recommend users deals based on user preferences and
							past orders
						</li>
					</ul>
				</Card>
				<Card
					title="RemindMii - BrainStation"
					extra={<Link href="#">More</Link>}
					style={{ width: 300, padding: 4 }}
				>
					<ul className="list-disc">
						<li>Created the next generation of reminder apps</li>
						<li>Added speech capabilties to take down tasks and journal</li>
						<li>Working on adding AI to the app</li>
					</ul>
				</Card>
				<Card
					title="NextJs App Project"
					extra={<Link href="#">More</Link>}
					style={{ width: 300, padding: 4 }}
				>
					<Image src={nextJsProject} alt="NextJs Project Image" />
					<ul className="list-disc">
						<li>Working through NextJS app tutorial</li>
						<li>Card content</li>
						<li>Card content</li>
					</ul>
				</Card>
			</Space>

			<Link className="nav-link" href="https://github.com/SaudAhmed96">
				Github
			</Link>
		</section>
	);
};

export default ProjectsPage;

// export function generateStaticParams() {
// 	return [
// 		{ id: "1", name: "Fiserv" },
// 		{ id: "2", name: "Fiserv" },
// 		{ id: "3", name: "Fiserv" },
// 	];
// }
