import type { Component } from "solid-js";
import { For } from "solid-js";
import { colors, getRandomColor } from "./colors";
import styles from "./Game.module.scss";

const Game: Component = () => {
	const columnCount = 4;
	const rowCount = 10;
	const chosenColors = [];
	for(let i = 0; i < columnCount; i++) {
		chosenColors.push(getRandomColor());
	}
	console.log(chosenColors);
	return <>
		<h1 class={styles.title}>Mastermind</h1>
	</>;
};

export default Game;
