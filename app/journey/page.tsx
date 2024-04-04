import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const JourneyPage = () => {
	const text2014 = `In my first year of university I had the opportunity to take a computer science course where we got to learn and use Python.
	I was able to naturally adapt and understand the concepts as I had some experience and found Python very freeing as it did not have some of the constraints 
	that were required by C#.
`;
	const text20142 = ` While I was mechanical engineering project course, we were required to calculate possibilities for a gear train with a fixed number of gears and space constraints to house those gears.
	I created a Python program to print out a number of lists that gave me the number of teeth required for each gear to meet the gear ratio within the size constraints.
	This was one of the first times I appreciated the ability to code and make complex tasks easier.`;
	const text2 = `                <div class="col-6">`;
	const text3 = `                <div class="col-6">`;

	const items: CollapseProps["items"] = [
		{
			key: "1",
			label: "2013 - 2014",
			children: (
				<p>
					{text2014}
					<br></br>
					<br></br>
					{text20142}
				</p>
			),
			className: "bg-gray-700",
		},
		{
			key: "2",
			label: "2017-2018",
			children: (
				<p>
					In my first year of university I had the opportunity to take a
					computer science course where we got to learn and use Python. I was
					able to naturally adapt and understand the concepts as I had some
					experience and found Python very freeing as it did not have some of
					the constraints that were required by C#.
					<br></br>
					<br></br>
					While I was taking another course we were required to calculate
					possibilities for a gear train with a fixed number of gears and space
					constraints to house those gears. I recall I created a Python program
					to print out a number of lists that gave me the number of teeth
					required for each gear to meet the gear ratio within the size
					constraints. This was one of the first times I appreciated the ability
					to code and make my tasks easier.
				</p>
			),
		},
		{
			key: "3",
			label: "2017-2018",
			children: <p>{text2}</p>,
		},
		{
			key: "4",
			label: "2017-2018",
			children: <p>{text3}</p>,
		},
	];

	const onChange = (key: string | string[]) => {
		console.log(key);
	};

	return (
		<section>
			<h1 className="mb-5 text-gray-800 font-medium text-xl">
				Programming Timeline
			</h1>
			<Collapse
				items={items}
				defaultActiveKey={["1"]}
				// className="text-sky-300"
				// contentBg="#ffffff"
				// onChange={onChange}
			/>
		</section>
	);
};

export default JourneyPage;
