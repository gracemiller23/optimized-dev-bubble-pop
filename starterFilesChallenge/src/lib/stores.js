import { writable } from 'svelte/store';

export const session = writable(false);

//for tracking the score each time a bubble is popped
export const score = writable(0);

//for setting and saving the winning score to localStorage
export const savedFinalScore = localStorage.finalScore;

export const finalScore = writable(savedFinalScore || 10);

finalScore.subscribe((score) => (localStorage.finalScore = score));

const savedScore = localStorage.score;

//for checking the previous score when setting a high score
export const lastScore = writable(savedScore || null);

lastScore.subscribe((score) => (localStorage.score = score));

//TODO: Create a store to save the total bubbles input by users to localStorage

//TODO: Create a writable store using the value from localStorage or an initial value. Then subscribe it to the localStorage value.

