import type { Component, Signal } from "solid-js";
import { Answer } from "./ButtonResults";
import { For, createSignal } from "solid-js";
import { grey, colors, getRandomColor } from "./colors";
import Peg from "./Peg";
import ButtonResults from "./ButtonResults";
import styles from "./Game.module.scss";

function arrayCount<T>(arr: T[], target: T): number {
	return arr.filter(x => x === target).length;
}

const Game: Component = () => {
	const columnCount = 4;
	const rowCount = 10;
	const [showChosen, setShowChosen] = createSignal(false);
	const chosenColors = Array.from({ length: columnCount }, getRandomColor);
	const grid = Array.from({ length: rowCount }, (_, i) =>
		({
			row: Array.from({ length: columnCount }, () => createSignal('')),
			disabledPegsSignal: createSignal(i !== 0),
		})
	)
	function calculateResults(row: Signal<string>[]): Answer[] {
		const arr = row.map(x => x[0]());
		const result: Answer[] = [];
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] === chosenColors[i]) {
				result.push(Answer.CorrectColorCorrectSpot);
			}
		}
		// TODO fix this algo
		for(let i = 0; i < arr.length; i++) {
			const colorCount = arrayCount(chosenColors, arr[i]);
			if(
				colorCount > 0 &&
				arr[i] !== chosenColors[i] &&
				arrayCount(arr, arr[i]) <= colorCount
			) {
				result.push(Answer.CorrectColorWrongSpot);
			}
		}
		while(result.length < 4) {
			result.push(Answer.WrongColorWrongSpot);
		}
		return result;
	}
	return <>
		<div class={styles.vflex}>
			<h1 class={styles.title}>Mastermind</h1>
			<div class={styles.row}>
				<For each={chosenColors}>{ (color: string) =>
					<Peg
						color={showChosen() ? color : grey}
						size="3rem"
						static
					/>
				}</For>
			</div>
			<div class={styles.grid}>
				<For each={grid}>{ ({ row, disabledPegsSignal }, i) => {
					const displayButton = () => !row.some(([get, _]) => get() === '');
					const [disabledPegs, _] = disabledPegsSignal;
					return <>
						<For each={row}>{ color =>
							<Peg
								color={color}
								enabled={!disabledPegs()}
								size="4rem"
							/>
						}</For>
						<ButtonResults
							values={calculateResults(row)}
							completedSignal={disabledPegsSignal}
							display={displayButton()}
							onclick={() => {
								const idx = i() + 1;
								if(idx >= grid.length) return;
								grid[idx].disabledPegsSignal[1](false);
							}}
						/>
					</>
				}}</For>
			</div>
		</div>
	</>;
};

export default Game;
