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
		<section>
			<h2>Contact Me</h2>
			{/* <div className="myform-format">
				<div className="form-floating m-3">
					<input
						type="name"
						className="form-control"
						id="floatingInput"
						placeholder="Name"
					/>
					<label>Name</label>
				</div>

				<div className="form-floating m-3">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
					/>
					<label>Email address</label>
				</div>

				<select className="form-select m-3" aria-label="Default select example">
					<option selected>Contact Reason</option>
					<option value="1">Work Opportunity</option>
					<option value="2">Project Collaboration</option>
					<option value="3">Other</option>
				</select>

				<div className="m-3">
					<label className="form-label">Opportunity Description</label>
					<textarea
						className="form-control textbox"
						id="exampleFormControlTextarea1"
					></textarea>
				</div>

				<button type="button" className="btn btn-outline-light ms-3">
					Submit
				</button>


			</div> */}

			<Link className="nav-link" href="https://github.com/SaudAhmed96">
				Github
			</Link>

			<Form
				{...formItemLayout}
				layout={"vertical"}
				form={form}
				// initialValues={{ layout: "vertical" }}
				// onValuesChange={onFormLayoutChange}
				style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
			>
				{/* <Form.Item label="Form Layout" name="layout">
					<Radio.Group value={formLayout}>
						<Radio.Button value="horizontal">Horizontal</Radio.Button>
						<Radio.Button value="vertical">Vertical</Radio.Button>
						<Radio.Button value="inline">Inline</Radio.Button>
					</Radio.Group>
				</Form.Item> */}
				<Form.Item label="Field A">
					<Input placeholder="input placeholder" />
				</Form.Item>
				<Form.Item label="Field B">
					<Input placeholder="input placeholder" />
				</Form.Item>
				<Form.Item {...buttonItemLayout}>
					<Button type="primary">Submit</Button>
				</Form.Item>
			</Form>
		</section>
	);
};

export default ContactPage;
