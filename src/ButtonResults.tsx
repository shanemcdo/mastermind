import type { Component, Signal } from "solid-js";
import { For, Show, createSignal }  from "solid-js";
import { grey } from "./colors";
import Peg from "./Peg";
import styles from "./ButtonResults.module.scss";

export enum Answer {
	CorrectColorCorrectSpot = 0,
	CorrectColorWrongSpot,
	WrongColorWrongSpot,
};

const answerColors = Object.freeze({
	[Answer.CorrectColorCorrectSpot]: 'red',
	[Answer.CorrectColorWrongSpot]: 'white',
	[Answer.WrongColorWrongSpot]: grey,
});

const defaultAnswers = [
	Answer.WrongColorWrongSpot,
	Answer.WrongColorWrongSpot,
	Answer.WrongColorWrongSpot,
	Answer.WrongColorWrongSpot,
];

type Props = {
	completedSignal: Signal<boolean>
	values?: Answer[],
	display?: boolean,
	onclick?: () => void,
};


const ButtonResults: Component<Props> = props => {
	const [clicked, setClicked] = props.completedSignal;
	return <Show
		when={props.display ?? true}
		fallback={<div/>}
	>
		<Show
			when={clicked()}
			fallback={
				<button
					classList={{
						[styles.button]: true,
						[styles.clickable]: true,
					}}
					onclick={() => {
						setClicked(true);
						if(props.onclick) {
							props.onclick();
						}
					}}
				>✓</button>
			}
		>
			<div class={styles.grid}>
				<For each={props.values ?? defaultAnswers}>{ answer =>
					<Peg
						class={styles.small}
						color={answerColors[answer]}
						static
					/>
				}</For>
			</div>
		</Show>
	</Show>;
};


export default ButtonResults;
