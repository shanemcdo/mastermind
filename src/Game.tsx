import type { Component } from "solid-js";
import styles from "./Game.module.scss";

const Game: Component = () => {
	return <>
		<h1 class={styles.title}>Mastermind</h1>
	</>;
};

export default Game;
