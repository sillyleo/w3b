import spec from "./spec.json";

// const spec = {
// 	description: "",
// 	methods: [],
// 	props: {
// 		size: {
// 			required: false,
// 			tsType: {
// 				name: "union",
// 				raw: '"sm" | "md" | "lg" | "xl"',
// 				elements: [
// 					{
// 						name: "literal",
// 						value: '"sm"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"md"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"lg"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"xl"',
// 					},
// 				],
// 			},
// 			description: "",
// 		},
// 		align: {
// 			required: false,
// 			tsType: {
// 				name: "union",
// 				raw: '"left" | "center" | "right" | "between" | "around"',
// 				elements: [
// 					{
// 						name: "literal",
// 						value: '"left"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"center"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"right"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"between"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"around"',
// 					},
// 				],
// 			},
// 			description: "",
// 		},
// 		tone: {
// 			required: false,
// 			tsType: {
// 				name: "unknown",
// 			},
// 			description: "",
// 			defaultValue: {
// 				value: '"slate"',
// 				computed: false,
// 			},
// 		},
// 		intent: {
// 			required: false,
// 			tsType: {
// 				name: "union",
// 				raw: '"primary" | "secondary" | "ghost"',
// 				elements: [
// 					{
// 						name: "literal",
// 						value: '"primary"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"secondary"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"ghost"',
// 					},
// 				],
// 			},
// 			description: "",
// 			defaultValue: {
// 				value: '"primary"',
// 				computed: false,
// 			},
// 		},
// 		leftIcon: {
// 			required: false,
// 			tsType: {
// 				name: "ReactReactNode",
// 				raw: "React.ReactNode",
// 			},
// 			description: "",
// 		},
// 		rightIcon: {
// 			required: false,
// 			tsType: {
// 				name: "ReactReactNode",
// 				raw: "React.ReactNode",
// 			},
// 			description: "",
// 		},
// 		isLoading: {
// 			required: false,
// 			tsType: {
// 				name: "boolean",
// 			},
// 			description: "",
// 		},
// 		children: {
// 			required: false,
// 			tsType: {
// 				name: "ReactReactNode",
// 				raw: "React.ReactNode",
// 			},
// 			description: "",
// 		},
// 		depth: {
// 			required: false,
// 			tsType: {
// 				name: "union",
// 				raw: '"0" | "1" | "2" | "3"',
// 				elements: [
// 					{
// 						name: "literal",
// 						value: '"0"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"1"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"2"',
// 					},
// 					{
// 						name: "literal",
// 						value: '"3"',
// 					},
// 				],
// 			},
// 			description: "",
// 		},
// 		css: {
// 			required: false,
// 			tsType: {
// 				name: "CSS",
// 			},
// 			description: "",
// 		},
// 	},
// };

export const Props = () => {
	{
		/* render spec to table */
	}
	const props = spec.props;
	const keys = Object.keys(props);
	const rows = keys.map((key) => {
		//@ts-ignore
		const prop: any = props[key];
		return (
			<tr
				key={key}
				className="nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20 "
			>
				<td className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600 ">
					{key}{" "}
					{prop.required ? <span className="nx-text-red-500">*</span> : null}
				</td>
				<td className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600 ">
					{prop.tsType.raw}
				</td>
				<td className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600 ">
					{prop.description}
				</td>
			</tr>
		);
	});

	return (
		<table className="nx-overflow-x-scroll nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0 nx-w-full">
			<thead className="nx-text-left	">
				<tr className="nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20">
					<th className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600 ">
						Props
					</th>
					<th className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600 ">
						Type
					</th>
					<th className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600 ">
						Description
					</th>
				</tr>
			</thead>
			<tbody className="" style={{ width: "200%" }}>
				{rows}
			</tbody>
		</table>
	);
};
