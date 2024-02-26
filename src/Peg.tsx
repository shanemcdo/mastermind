import type { Accessor, Component, Setter, Signal } from "solid-js";
import { For, Show, createSignal } from "solid-js";
import { colors } from "./colors"
import styles from "./Peg.module.scss";

type Props = {
	class: string,
	color: string | Signal<string>,
	enabled?: boolean,
	static?: boolean,
	onclick?: (e: MouseEvent) => void,
};

const Peg: Component<Props> = (props: Props) => {
	const [showingModal, setShowingModal] = createSignal(false);
	const toggleModal = () => setShowingModal(b => !b);
	const enabled = () => props.enabled ?? true;
	const [pegColor, setPegColor]  = typeof props.color === 'string' ?
			[() => props.color as string, (_ :string) => { console.error('Cannot set') }] :
			[
				() => (props.color[0] as Accessor<string>)(),
				(x: string) => (props.color[1] as Setter<string>)(x)
			];
	return <div
		classList={{
			[props.class]: true,
			[styles.peg]: true,
			[styles.clickable]: enabled() && (!props.static || props.onclick !== undefined),
		}}
		style={{
			background: pegColor(),
		}}
		onclick={ e => {
			if(enabled()){
				(props.onclick ?? toggleModal)(e)
			}
		}}
	>
		<Show when={enabled() && props.onclick === undefined && !props.static && showingModal()}>
			<div class={styles.modal}>
			<For each={colors}>{color =>
				<Peg
					color={color}
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
