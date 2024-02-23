import type { Component } from "solid-js";
import { For, Show, createSignal }  from "solid-js";
import { grey } from "./colors";
import Peg from "./Peg";
import styles from "./ButtonResults.module.scss";

type Props = {
	display?: boolean,
};

const ButtonResults: Component<Props> = (props: Props) => {
	const [clicked, setClicked] = createSignal(false);
	const values = ['red', 'white', grey, grey];
	return <Show
		when={clicked()}
		fallback={
			<button
				classList={{
					[styles.button]: true,
					[styles.clickable]: true,
				}}
				onclick={() => setClicked(true)}
			>✓</button>
		}
	>
		<div class={styles.grid}>
			<For each={values}>{ (color: string) =>
				<Peg
					color={color}
					size="1rem"
					static
				/>
			}</For>
		</div>
	</Show>;
};


export default ButtonResults;
