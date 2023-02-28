import { motion } from "framer-motion";
import { Stack, Text } from "../index";

// An utility display for component
export default function Display(props: any) {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			style={{
				marginTop: "2em",
				marginBottom: "2em",
			}}
		>
			<Text mb="2" size="overline" color="slate10">
				{props.label}
			</Text>
			<Stack
				__borderWidth="1px"
				p="6"
				borderColor="slate6"
				borderRadius={"xl"}
				{...props}
			/>
		</motion.div>
	);
}