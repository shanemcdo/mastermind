/* @refresh reload */
import type { Component, JSX } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';
import { Router, Route } from '@solidjs/router';
import { render } from 'solid-js/web';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

type Props = RouteSectionProps<unknown>;

const App: Component<Props> = (props: Props) => <>
	<h1>Mastermind</h1>
	{props.children}
</>;

render(
	() => <Router root={App} >
		<Route path="/" />
	</Router>,
	root!
);
