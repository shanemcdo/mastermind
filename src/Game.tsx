import type { Component } from "solid-js";
import { For, createEffect, createSignal } from "solid-js";
import { grey, colors, getRandomColor } from "./colors";
import Peg from "./Peg";
import ButtonResults from "./ButtonResults";
import styles from "./Game.module.scss";

const Game: Component = () => {
	const columnCount = 4;
	const rowCount = 10;
	const [showChosen, setShowChosen] = createSignal(false);
	const chosenColors = Array.from({ length: columnCount }, getRandomColor);
	const grid = Array.from({ length: rowCount }, () =>
		Array.from({ length: columnCount }, () => createSignal(''))
	)
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
				<For each={grid}>{ row => {
					const displayButton = () => !row.some(([get, _]) => get() === '');
					const completedRowSignal = createSignal(false);
					const [completedRow, _] = completedRowSignal;
					createEffect(() => console.log('game', completedRow()))
					return <>
						<For each={row}>{ color =>
							<Peg
								color={color}
								enabled={!completedRow()}
								size="4rem"
							/>
						}</For>
						<ButtonResults
							completedSignal={completedRowSignal}
							display={displayButton()}
						/>
					</>
				}}</For>
			</div>
		</div>
	</>;
};

export default Game;
