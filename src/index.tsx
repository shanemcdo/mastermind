/* @refresh reload */
import type { Component, JSX } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';
import { Router, Route } from '@solidjs/router';
import { render } from 'solid-js/web';
import Game from './Game';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <Game />, root!);
