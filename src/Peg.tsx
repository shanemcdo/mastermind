import type { Component, Signal } from "solid-js";
import { For, Show, createSignal } from "solid-js";
import { colors } from "./colors"
import styles from "./Peg.module.scss";

type Props = {
	color: string | Signal<string>,
	size: string,
	enabled?: boolean,
	static?: boolean,
	onclick?: (e: MouseEvent) => void,
};

const Peg: Component<Props> = (props: Props) => {
	const [showingModal, setShowingModal] = createSignal(false);
	const enabled = () => props.enabled ?? true;
	const [pegColor, setPegColor] = (typeof props.color === 'string') ?
			createSignal(props.color) :
			props.color;
	return <div
		classList={{
			[styles.peg]: true,
			[styles.clickable]: enabled() && (!props.static || props.onclick !== undefined),
		}}
		style={{
			background: pegColor(),
			'--size': props.size,
		}}
		onclick={
			enabled() ?
			(props.onclick ?? (() => setShowingModal(b => !b))) :
			(() => {})
		}
	>
		<Show when={enabled() && props.onclick === undefined && !props.static && showingModal()}>
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
