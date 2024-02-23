import type { Component } from "solid-js";
import styles from "./Peg.module.scss";

type Props = {
	color: string,
	size: string,
	static?: boolean,
};

const Peg: Component<Props> = (props: Props) => {
	return <div
		classList={{
			[styles.peg]: true,
			[styles.clickable]: !props.static,
		}}
		style={`background: ${props.color}; --size: ${props.size}`}
	></div>;
};


export default Peg;
