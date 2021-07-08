import { writable } from "svelte/store";

import type { Container } from './types';

export const container = writable([
  {
    name: 'Kleinteilemagazin 1',
    folders: [],
    width: 1,
    height: 1,
  },
  {
    name: 'Kleinteilemagazin 2',
    folders: [],
    width: 2,
    height: 2,
  },
  {
    name: 'Kleinteilemagazin 3',
    folders: [],
    width: 3,
    height: 3,
  },
] as Container[]);