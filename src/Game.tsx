import type { Component } from "solid-js";
import { For, createSignal } from "solid-js";
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
		Array.from({ length: columnCount }, () => '')
	)
	console.log(grid);
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
				<For each={grid}>{ row => <>
					<For each={row}>{ (color: string) =>
						<Peg
							color={color}
							size="4rem"
						/>
					}</For>
					<ButtonResults
						display={true /* TODO */}
					/>
				</>}</For>
			</div>
		</div>
	</>;
};

export default Game;
