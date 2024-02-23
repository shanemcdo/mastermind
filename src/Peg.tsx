import type { Component } from "solid-js";
import { For, Show, createSignal } from "solid-js";
import { colors } from "./colors"
import styles from "./Peg.module.scss";

type Props = {
	color: string,
	size: string,
	static?: boolean,
	onclick?: (e: MouseEvent) => void,
};

const Peg: Component<Props> = (props: Props) => {
	const [showingModal, setShowingModal] = createSignal(false);
	const [pegColor, setPegColor] = createSignal(props.color);
	console.log(props.static);
	return <div
		classList={{
			[styles.peg]: true,
			[styles.clickable]: !props.static || props.onclick !== undefined,
		}}
		style={{
			background: pegColor(),
			'--size': props.size,
		}}
		onclick={props.onclick ?? (() => setShowingModal(true))}
	>
		<Show when={props.onclick === undefined && !props.static && showingModal()}>
			<div class={styles.modal}>
			<For each={colors}>{color =>
				<Peg
					color={color}
					size="2rem"
					onclick={() => {
						setPegColor(color);
						setShowingModal(false);
					}}
				/>
			}</For>
			</div>
		</Show>
	</div>;
};


export default Peg;
