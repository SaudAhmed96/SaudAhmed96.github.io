import React from "react";
import projDetails from "../../../public/projectsDetails.json";

const Project1Page = ({ params }: { params: { id: string } }) => {
	const { id } = params;

	const myData = projDetails.find((proj) => proj.id === params.id);
	return (
		<div>
			<h1>
				Project {params.id} : {myData?.projectName}
			</h1>
			<p> {myData?.projectDetails}</p>
		</div>
	);
};

export default Project1Page;

export function generateStaticParams() {
	return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
