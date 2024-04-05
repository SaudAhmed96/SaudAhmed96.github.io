import React from "react";
import { Card, Space } from "antd";
import Link from "next/link";

const ProjectsPage = () => {
	return (
		<section>
			<h1 className="text-gray-800 text-xl font-medium mb-5">Projects</h1>
			<Space className="flex flex-wrap" direction="horizontal" size={16}>
				<Card
					title="Project 1"
					extra={<Link href="#">More</Link>}
					style={{ width: 300 }}
				>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
				<Card
					title="Project 2"
					extra={<Link href="#">More</Link>}
					style={{ width: 300 }}
				>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
				<Card
					title="Project 3"
					extra={<Link href="#">More</Link>}
					style={{ width: 300 }}
				>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
			</Space>
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
