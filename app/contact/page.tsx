"use client";

import {
	Button,
	Cascader,
	DatePicker,
	Form,
	Input,
	InputNumber,
	Mentions,
	Radio,
	Select,
	TreeSelect,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import Link from "next/link";
import React, { useState } from "react";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const ContactPage = () => {
	// const { RangePicker } = DatePicker;

	const [form] = Form.useForm();
	const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

	const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
		setFormLayout(layout);
	};

	const formItemLayout =
		formLayout === "horizontal"
			? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
			: null;

	const buttonItemLayout =
		formLayout === "horizontal"
			? { wrapperCol: { span: 14, offset: 4 } }
			: null;

	return (
		<section className="p-1 flex flex-col items-center">
			<h1 className="mb-3 text-xl">Contact Me</h1>

			<Form
				{...formItemLayout}
				layout={"horizontal"}
				form={form}
				className="md: w-full"
			>
				<Form.Item>
					<label>Name:</label>
					<Input placeholder="Your Name" />
				</Form.Item>
				<Form.Item>
					<label>Email Address:</label>
					<Input placeholder="name@example.com" />
				</Form.Item>
				<Form.Item>
					<label>Contact Reason:</label>
					<Select>
						<Select.Option value="1">Work Opportunity</Select.Option>
						<Select.Option value="2">Project Collaboration</Select.Option>
						<Select.Option value="3">Other</Select.Option>
					</Select>
				</Form.Item>

				<Form.Item>
					<label>Opportunity Description:</label>
					<TextArea rows={4} />
				</Form.Item>

				<Button type="primary" className="sm: w-full md: w-36">
					Submit
				</Button>
			</Form>
		</section>
	);
};

export default ContactPage;
